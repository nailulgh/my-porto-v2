import styled from "styled-components";


export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px dashed ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 10rem;
  margin-top: 10rem;
  width: 100%;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .logo {
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accentCyan};
      text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
    }
  }

  p {
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    
    img {
      width: 2rem;
      filter: ${({ theme }) => theme.mode === 'dark' 
        ? `drop-shadow(0 0 5px ${theme.colors.accentCyan})` 
        : `brightness(0.5) drop-shadow(0 0 2px rgba(0,0,0,0.1))`};
      animation: spinning 5s infinite linear;
    }
    
    span {
      color: ${({ theme }) => theme.colors.accentMagenta};
    }
  }
  .social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 2.5rem;
      opacity: 0.8;
      transition: all 0.3s ease;
      
      &:hover {
        opacity: 1;
        filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accentCyan});
        transform: translateY(-3px);
      }
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 900px){
    padding: 4rem 2rem;
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
      justify-content: center;
    }
  }
  @media(max-width: 600px){
    padding: 3rem 1rem;
    
    .logo {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
    .social-media img {
      width: 2rem;
    }
  }
`