# Cafe Aurora

Landing page institucional e cardapio interativo para a cafeteria ficticia Cafe Aurora, especializada em graos especiais e torra artesanal. O projeto foi desenvolvido utilizando apenas tecnologias web nativas (HTML5, CSS3 e JavaScript puro), com foco em semantica, responsividade, acessibilidade e boas praticas de organizacao de codigo.

## Sobre o Projeto

O objetivo deste projeto e apresentar a identidade visual da cafeteria, sua historia, diferenciais de producao, cardapio categorizado e informacoes de localizacao e contato em uma pagina unica e fluida.

## Funcionalidades

- **Barra de Navegacao Responsiva**: Menu fixo que altera seu estilo ao rolar a pagina e conta com menu retratil para dispositivos moveis.
- **Filtro de Cardapio**: Sistema interativo em JavaScript que permite filtrar os itens do cardapio por categoria (Todos, Classicos, Especiais e Filtrados, Para Acompanhar) sem recarregar a pagina.
- **Animacoes de Entrada**: Transicoes suaves nos elementos conforme entram na area visivel da tela utilizando a API `IntersectionObserver`.
- **Formulario de Newsletter**: Campo de inscricao com validacao de formato de e-mail e mensagens de retorno dinamicas para o usuario.
- **Layout Adaptavel**: Grade fluida construida com CSS Grid, Flexbox e variaveis CSS para garantir boa leitura tanto em telas grandes quanto em smartphones.

## Estrutura de Arquivos

- `index.html`: Estrutura semantica da pagina dividida nas secoes de cabecalho, sobre nos, diferenciais, cardapio, contato e rodape.
- `style.css`: Folha de estilos com variaveis de cores e tipografia, layout responsivo e efeitos de transicao.
- `script.js`: Logica de interacao para animacoes de rolagem, controle do menu mobile, filtragem do cardapio e validacao de formulario.
- `README.md`: Documentacao geral do projeto.

## Tecnologias Utilizadas

- **HTML5**: Tags semanticas (`nav`, `header`, `main`, `section`, `article`, `footer`) e atributos de acessibilidade (`aria-label`, `aria-expanded`, `aria-selected`).
- **CSS3**: Custom Properties (variaveis CSS), Flexbox, CSS Grid, Media Queries e `clamp()` para tipografia responsiva.
- **JavaScript (ES6+)**: Manipulacao de DOM, eventos, `IntersectionObserver` e validacao por expressao regular.
- **Google Fonts**: Fontes *Playfair Display* para titulos e *Inter* para textos corridos.

## Como Executar

Por ser um projeto estatico sem dependencias externas de compilacao, basta abrir o arquivo principal diretamente no navegador:

1. Clone este repositorio ou baixe os arquivos em uma pasta local.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.
3. Opcionalmente, utilize uma extensao como o *Live Server* no VS Code ou execute um servidor local simples via terminal:

```bash
python3 -m http.server 8000
```

Em seguida, acesse `http://localhost:8000` no navegador.
