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

  /* Custom Cursor Logic */
  @media (min-width: 961px) {
    body {
      cursor: none;
    }
    a, button, .button, input[type="submit"], input[type="checkbox"] + label {
      cursor: none !important;
    }
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