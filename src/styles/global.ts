import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech&family=Share+Tech+Mono&display=swap');

  :root{
    scroll-padding-top: 10rem;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%2300f5ff" stroke="%23140028" stroke-width="1.5" d="M2 2l14 6-5 2-2 5z"/></svg>') 2 2, auto;
    
    /* Cyberpunk Background Texture */
    background-image: ${({ theme }) => theme.mode === 'light' ? `
      linear-gradient(rgba(0, 122, 204, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 122, 204, 0.07) 1px, transparent 1px),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 122, 204, 0.015) 2px,
        rgba(0, 122, 204, 0.015) 4px
      )` : `
      linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 245, 255, 0.02) 2px,
        rgba(0, 245, 255, 0.02) 4px
      )`};
    background-size: 30px 30px, 30px 30px, 100% 4px;
  }

  body, input, textarea, button{
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
  }

  a, button, .button, input[type="submit"], input[type="checkbox"] + label {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23ff00aa" stroke="%23140028" stroke-width="1.5" d="M2 2l14 6-5 2-2 5z"/></svg>') 2 2, pointer !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a{
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accentCyan};
    color: ${({ theme }) => theme.colors.bgPrimary};
    border-radius: ${({ theme }) => theme.radius.sm};
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px 24px;
    transition: all 0.2s ease;
    
    &:hover{
      filter: brightness(1.2);
      box-shadow: ${({ theme }) => theme.shadows.glowCyanStrong};
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  .logo{
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accentCyan};
    text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }
`