import os
import re
import shutil
import sys
import tempfile

import pytest
from twisted.internet.defer import inlineCallbacks

from hathor.profiler.resources import ProfilerResource
from tests import unittest
from tests.resources.base_resource import StubSite, _BaseResourceTest


class BaseProfilerTest(_BaseResourceTest._ResourceTest):
    __test__ = False

    def setUp(self):
        super().setUp()
        self.web = StubSite(ProfilerResource(self.manager))

    @pytest.mark.skipif(sys.platform == 'win32', reason='shutil.rmtree fails on Windows')
    @inlineCallbacks
    def test_post(self):
        # Options
        yield self.web.options("profiler")

        tmpdir = tempfile.mkdtemp()
        tmpfile = tempfile.NamedTemporaryFile(dir=tmpdir, suffix='.prof', delete=False)
        filename = os.path.basename(tmpfile.name)
        full_path = os.path.join(tmpdir, filename)

        # Start profiler
        response_start = yield self.web.post("profiler", {'start': True})
        data_start = response_start.json_value()
        self.assertTrue(data_start['success'])

        with open(full_path, 'r') as f:
            # In the start the file must be empty
            self.assertEqual(len(f.read()), 0)

        # Stop profiler
        response_stop = yield self.web.post("profiler", {'stop': True, 'filepath': full_path})
        data_stop = response_stop.json_value()
        self.assertTrue(data_stop['success'])

        with open(full_path, 'rb') as f:
            # After stop profiler file must have something
            self.assertGreater(len(f.read()), 0)

        # Success false
        response_error = yield self.web.post("profiler")
        data_error = response_error.json_value()
        self.assertFalse(data_error['success'])

        # Removing tmpdir
        shutil.rmtree(tmpdir)

    def test_dump_file(self):
        resource = ProfilerResource(self.manager)
        filename = resource.gen_dump_filename()

        filename_arr = filename.split('/')
        self.assertEqual(filename_arr[0], 'profiles')
        self.assertTrue(re.search(r'^profile\d{3}\.prof$', filename_arr[1]))


class SyncV1ProfilerTest(unittest.SyncV1Params, BaseProfilerTest):
    __test__ = True


class SyncV2ProfilerTest(unittest.SyncV2Params, BaseProfilerTest):
    __test__ = True


# sync-bridge should behave like sync-v2
class SyncBridgeProfilerTest(unittest.SyncBridgeParams, SyncV2ProfilerTest):
    pass
