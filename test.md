**TEST**

# O que são testes?

- Testes automatizados são uma importante ferramenta para quem trabalha com o desenvolvimento de softwares.
  Neles, o sistema é otimizado com precisão e agilidade: é nessa hora que você encontrará bugs, falhas de
  segurança e qualquer outro problema que prejudique o uso da aplicação.

# O que são testes unitarios?

- Os testes de unidade são focados em testar o caminho lógico dentro de uma unidade de código.
  Esta unidade é geralmente um método/classe.
  Os testes não devem ter nenhuma ou apenas algumas dependências externas.
  A maioria das dependências pode ser simulada através de mocks/fakes.

# Alguns conceitos e dicas para ter em mente ao escrever testes:

- Valide apenas um cenário por teste: minimize o número de asserts
- Os testes devem ser sem estado: todos os elementos em um teste devem retornar ao estado inicial após cada teste.
- NÃO TENHA CONDICIONAIS NOS TESTES.
- Se vc tem dificuldades com testes a minha sugestão é que vc gaste energia primeiro na resolução do problema e
  depois faça os testes.
- Dê preferencia ao beforeEach para montar cenarios.

# Arrange > Act > Assert

- `Arrange` – configure os elementos necessários para o teste (variáveis, objetos, bancos de dados, mocks, espiões, etc).
- `Act` – realizar a ação que irá gerar o comportamento que será testado.
- `Assert` – verifique o resultado da ação.

# Principio F. I. R. S. T.

- `Fast` - o teste deve ser rápido. Quando os testes ficam lentos, você não vai querer executá-los com frequência.
- `Independent` - Os testes não devem depender uns dos outros. Os testes devem poder ser executados em qualquer ordem.
- `Repeatable` - Os testes devem ser repetíveis em qualquer ambiente. Se o seu teste não puder ser repetido em nenhum ambiente, você sempre terá uma desculpa para o motivo da falha.
- `Self-Validating` - Os testes devem ter uma saída booleana. Você não deve ter que ler um arquivo de log para saber se os testes foram aprovados.
- `Timely` - Os testes precisam ser escritos em tempo hábil. O teste de unidade deve ser escrito imediatamente antes do código de produção. Se você escrever testes após o código de produção, poderá achar o código de produção difícil de testar

# Assert Tips

- Verifique se a classe chamou corretamente as dependencias externas
  com os valores corretos.
- Verifique se se o retorno da classe é smpre o mesmo resultado.
- Em caso de exceção, verifique a intancia da exceção e a mensagem de
  retorno.
