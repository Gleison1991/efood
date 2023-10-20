import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  brancoBeije: '#FFF8F2',
  branco: '#FFF',
  background: 'rgba(0, 0, 0, 0.80)'
}

export const GlobalCss = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    padding-top: 0px;
    display: block;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`
