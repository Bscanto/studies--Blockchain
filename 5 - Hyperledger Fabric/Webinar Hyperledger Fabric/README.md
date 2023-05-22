# Webinar Hyperledger Fabric

* Blockchain
* conceitos
* tipos de blockchain
* projetos
  
# BlockChain 

blockchain é um sistema de livro-razão com registros imutáveis, mantido em uma rede distribuída por múltiplos nós pares (peer nodes). Esses nós mantêm uma cópia do livro-razão contendo as transações que foram validadas por um protocolo de consenso e agrupadas em blocos que inclue um hash que liga cada bloco ao bloco anterior.

A aplicação amplamente reconhecida do blockchain é a criptomoeda Bitcoin, embora outras moedas tenham seguido seus passos. A Ethereum, uma criptomoeda alternativa, adotou uma abordagem diferente, integrando muitas das características do Bitcoin, mas adicionando contratos inteligentes (smart contracts) para criar uma plataforma para aplicativos distribuídos. Bitcoin e Ethereum se enquadram em uma classe de blockchain que classificamos como tecnologia de blockchain pública não permissionada (public permissionless). Basicamente, são redes públicas, abertas a qualquer pessoa, onde os participantes interagem anonimamente.

  ## O que é Hyperledger Fabric

  >Hyperledger Fabric é uma estrutura blockchain que executa contratos inteligentes chamados chaincode, que podem ser escritos em JS, Java, Go, Python. Uma plataforma que nao tem nenhum custo com Gás para execução dos contratos, possui um uso de identidade Privado e permissionado sendo configuravel permitindo transações privadas.

### Como funciona os contratos de Hyperledge Fabric

>Permite que uma organização participe simultaneamente de várias redes blockchain separadas por canais. Ao ingressar em vários canais, uma organização pode participar da chamada rede de redes.
   
   Uma blockchain registra as transações imutáveis que atualizam estados em um livro-razão. Um contrato inteligente acessa programaticamente duas partes distintas do livro-razão — uma blockchain, que registra o histórico imutável de todas as transações e um estado global, que armazena um cache do valor atual desses estados, geralmente o que se busca saber é o valor atual de um objeto.

## Tipos de Blockchain

>Há vários tipos de blockchain, mesmo porque eles evoluíram e ganharam novas funcionalidades ao longo do tempo. Conheça os tipos e veja como eles funcionam.

|Rede Pública| Rede Privada|Rede Privada + Provisionada|
|---|---|---|
|sem restrições de entrada, descentralizada e com a participação igualitária entre todos os membros, qualquer pessoa pode entrar, validar transações e contribuir para a rede. Exemplos ```Bitcoin``` e ```Ethereum```| Rede mais centralizada restrita a algum grupo de pessoas, isso quer dizer que apenas membros que receberam a permissão para entrar podem ter acesso a elas. Mais indicado para empresas que querem usufruir da tecnologia blockchain, mas ainda preservar a publicidade de seus dados.| Restrita a um grupo de pessoas que gerencia as permissões e emitw os contratos digitais. Exemplo mais comun ```Hyperledger Fabric```


##  Desenvolvimento

   Contratos inteligentes primariamente executam operações de put, get e delete no estado global e também podem consultar os registros imutáveis de transações na blockchain.

   * ```get``` normalmente representa uma consulta para recuperar informações sobre o estado atual de um objeto de negócios.
   * ```get``` normalmente cria um novo objeto de negócios ou modifica um existente no estado global do livro-razão.
   * ```get``` normalmente representa a remoção de um objeto de negócios do estado atual do razão, mas não seu histórico.
   * >Os contratos inteligentes têm muitas APIs disponíveis para eles. Em todos os casos, se as transações criam, leem, atualizam ou excluem objetos de negócios no estado global, a blockchain manterá um registro imutável dessas alterações.

### Endosso
>Associada a todos os chaincodes, há uma política de endosso que se aplica a todos os contratos inteligentes definidos nele. Uma política de endosso é muito importante, indica quais organizações em uma rede blockchain devem assinar uma transação gerada por um determinado contrato inteligente para que essa transação seja declarada válida.

Todo contrato inteligente possui uma política de endosso associada. Esta política de endosso identifica quais organizações devem aprovar transações geradas pelo contrato inteligente antes que essas transações possam ser identificadas como válidas.

* Um exemplo de política de endosso pode definir que dois das três organizações que participam de uma rede blockchain devem assinar uma transação antes de serem consideradas válidas.
* Se uma política de endosso especificar que mais de uma organização deve assinar uma transação, o contrato inteligente deve ser executado por um conjunto suficiente de organizações para que uma transação válida seja gerada. No exemplo acima, uma transação de contrato inteligente para transferir um carro precisaria ser executada e assinada por ```ORG1```e ```ORG2``` para que ele fosse válido.

## Rede de Exemplo
Aqui está um diagrama representando o estado final da nossa rede de exemplo.

![Estado Final de uma rede](https://github.com/Bscanto/studies--trainings/blob/main/5%20-%20Hyperledger%20Fabric/Webinar%20Hyperledger%20Fabric/Img/Hyperledger.jpeg)

Quatro organizações, ```R1```, ```R2```, ```R3``` e ```R4```, decidiram em conjunto formalizar um contrato onde irão configurar e explorar uma rede Hyperledger Fabric. O ```R4``` foi designado para ser o criador da rede – ele tem a capacidade de configurar a versão inicial da rede. O ```R4``` não tem intenção de realizar transações comerciais na rede. ```R1 ```e ```R2 ```precisam de uma comunicação privada dentro da rede geral, assim como ```R2``` e ```R3```. A organização ```R1``` possui um aplicativo cliente que pode executar transações comerciais no canal ```C1```. A organização ```R2``` possui um aplicativo cliente que pode executar um trabalho semelhante nos canais ```C1``` e ```C2```. A organização ```R3``` tem um aplicativo cliente que pode fazer isso no canal ```C2```. O nó ```P1``` mantém uma cópia do livro-razão ```L1``` associada a ```C1```. O nó ```P2 ``` mantém uma cópia do razão ```L1``` associada ao ```C1``` e uma cópia do razão ```L2``` associada ao ```C2```. O nó ```P3``` mantém uma cópia do razão ```L2``` associada a ```C2```. A rede é governada de acordo com as regras da política especificada na configuração de rede ```NC4```, a rede está sob o controle das organizações ```R1``` e ```R4```. O canal ```C1``` é governado de acordo com as regras da política especificada na configuração de canal ```CC1```; o canal está sob o controle das organizações ```R1``` e ``` R2```. O canal ```C2``` é governado de acordo com as regras da política especificada na configuração do canal ```CC2```; o canal está sob o controle das organizações ```R2``` e ```R3```. Há um serviço de ordem ```O4``` que atua como um ponto de administração de rede para ```N ```e usa o canal do sistema. O serviço de ordem também suporta os canais de aplicativos ```C1``` e ```C2```, para fins de ordem de transações dos blocos para distribuição. Cada uma das quatro organizações possui uma Autoridade de Certificação preferida.

## Conclusão

>A Hyperledger Fabric é um dos projetos mais ativos da Hyperledger. A construção da comunidade em torno da plataforma está crescendo constantemente, e a inovação oferecida a cada lançamento ultrapassa em muito qualquer das outras plataformas corporativas de blockchain.

Combinados, os recursos diferenciadores da Fabric o tornam um sistema altamente escalável para blockchains com permissão, oferece suporte a assunções de confiança flexíveis que permitem à plataforma suportar uma ampla variedade de casos de uso da indústria, desde governo, finanças, logística da cadeia de suprimentos, saúde e muito mais.