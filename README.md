# Patolícia

## Integrantes

- Bianca Iwata Soares da Silva
- Lucas Gomes Souza Lima


## Sobre o produto

O produto é um site de venda de bolinhos macios (dumplings) em formato de pato. Seu público-alvo são pessoas que gostam de doces criativos, presentes diferentes e produtos visualmente fofos.


## Jornada de construção

### Ideia inicial

O produto surgiu a partir de um jogo focado em fabricar bolinhos macios, onde uma ideia divertida surgiu de bolinhos macios em formato de pato.
Após analisar sites de confeitaria como o Sucrier e receber inspiração de um doce japonês chamado Hiyoko Manju, chegamos a conclusão de que essa ideia era verídica.

Essa foi a primeira e única alternativa de produto e, por ser criativa e única, acabou sendo selecionada.


### Pesquisa e referências

Pesquisamos por produtos similares e sites focados na venda de doces para receber inspiração após ter a ideia.

Analisamos sites como Sucrier, Flakes Brasil, Sodiê, entre outros sites de confeitaria.


### Ferramentas utilizadas

- React
- VS Code / OpenCode


### Uso de IA

Modelos utilizados:

- GPT-5 Mini
  * Utilizado para desenvolver o site com React e CSS modularizado.
- Gemini Nano Banana
  * Utilizado para gerar imagens
    
Escolhemos esse modelo por ser rápido, versátil e relativamente econômico quando utilizado pelo Azure AI Foundry. A IA foi utilizada principalmente para acelerar o desenvolvimento da landing page, gerar o código em React e CSS e auxiliar na construção da interface a partir do prompt elaborado.

Entretanto, o resultado inicial não correspondeu completamente às especificações fornecidas. Mesmo tendo solicitado React, CSS modularizado e a arquitetura MVVM, a IA gerou apenas três arquivos principais: index.html, App.jsx e styles.css. Além disso, orientou a abertura direta do arquivo HTML no navegador, mas a página não funcionou como esperado.

A implementação também utilizava Babel e não apresentava a organização arquitetural solicitada. Visualmente, a página estava incompleta, com imagens ausentes, elementos sem estilização adequada e imagens que não correspondiam ao tema da Patolícia.

Diante desses problemas, foi necessário revisar o resultado e realizar ajustes. Para melhorar a apresentação visual, utilizamos o Gemini Nano Banana para gerar imagens mais alinhadas à proposta do produto e as organizamos em um diretório do projeto. Também ajustamos a estilização de alguns elementos para aproximar a página da identidade visual idealizada.

Ao longo do processo, percebemos que fornecer um prompt detalhado não garantia que todas as instruções fossem seguidas corretamente. Por isso, foi necessário avaliar o código gerado, identificar inconsistências e intervir para melhorar o resultado.

A IA foi importante para acelerar a codificação, mas não substituiu a necessidade de revisão, correção e tomada de decisões durante o desenvolvimento.


### Evolução da solução

A ideia inicial da Patolícia foi mantida durante o desenvolvimento. As principais mudanças aconteceram na implementação e na apresentação visual do produto.

Inicialmente, a página gerada pela IA não apresentava todos os elementos visuais necessários e continha imagens que não representavam adequadamente os bolinhos em formato de pato. Para resolver esse problema, geramos novas imagens com o Gemini Nano Banana e as adicionamos ao projeto.

Também realizamos ajustes na estilização de alguns elementos para melhorar a aparência da página e torná-la mais coerente com a identidade visual planejada.

Outra dificuldade foi a ausência da arquitetura MVVM solicitada no prompt. Embora a IA tenha produzido uma primeira versão do código, a estrutura gerada não seguiu a organização arquitetural esperada, evidenciando a necessidade de conferir não apenas o resultado visual, mas também a estrutura interna da aplicação.

Assim, a evolução da solução ocorreu principalmente por meio da substituição de imagens, de ajustes visuais e da avaliação crítica do código produzido pela IA. Essas intervenções foram importantes para aproximar o resultado final da proposta inicial, mesmo com o tempo limitado para o desenvolvimento.


### Resultado final

#### Como vocês avaliam o resultado?

Consideramos que o resultado final ficou bom para uma primeira versão, especialmente considerando o tempo disponível para a realização da atividade. Conseguimos transformar a ideia da Patolícia em uma landing page e utilizar a inteligência artificial para acelerar parte do processo de desenvolvimento.

Apesar disso, a experiência mostrou que o código gerado automaticamente nem sempre atende a todos os requisitos técnicos e visuais definidos. Foi necessário identificar problemas, ajustar a estilização e substituir imagens para tornar a página mais coerente com o produto idealizado.

#### O que fariam diferente se tivessem mais tempo?

Se tivéssemos mais tempo, acrescentaríamos novos elementos e detalhes visuais para aproximar ainda mais a página da identidade que imaginamos. Também revisaríamos o código de maneira mais aprofundada, verificando sua organização, a aplicação correta da arquitetura MVVM e o cumprimento das boas práticas de desenvolvimento em React.

Como principal aprendizado, entendemos que a inteligência artificial pode ser uma ferramenta útil para acelerar o desenvolvimento, mas seus resultados precisam ser avaliados criticamente. A participação humana continua sendo essencial para identificar problemas, orientar melhorias e garantir que a solução final corresponda aos objetivos do projeto.