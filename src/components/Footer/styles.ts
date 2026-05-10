import styled from "styled-components";


export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .logo{
    font-size: 2.8rem;
    font-family: ${({ theme }) => theme.fonts.display};
    color: ${({ theme }) => theme.colors.accentCyan};
    text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }

  p{
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    
    img{
      width: 2.6rem;
      filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
      animation: spinning 5s infinite linear;
    }
    
    span {
      color: ${({ theme }) => theme.colors.accentMagenta};
      font-weight: 700;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
      transition: all 0.3s ease;
      
      &:hover {
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

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`