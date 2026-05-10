import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
      font-family: ${({ theme }) => theme.fonts.display};
      color: ${({ theme }) => theme.colors.accentCyan};
      text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
    }
    p{
      color: ${({ theme }) => theme.colors.accentMagenta};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-weight: 500;
      margin-top: 1rem;
      letter-spacing: 0.1em;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 4rem;
    
    & > div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: ${({ theme }) => theme.colors.bgSecondary};
      border: 1px solid ${({ theme }) => theme.colors.borderDefault};
      border-radius: ${({ theme }) => theme.radius.md};
      padding: 1.6rem 2.8rem;
      transition: all 0.3s ease;
      
      img{
        width: 3.5rem;
        filter: ${({ theme }) => theme.mode === 'dark' 
          ? `brightness(0) invert(1) drop-shadow(0 0 5px ${theme.colors.accentCyan})` 
          : 'none'};
        transition: all 0.3s ease;
      }
      
      a{
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.mono};
        font-size: 1.4rem;
        transition: color 0.3s ease;
      }
      
      &:hover{
        border-color: ${({ theme }) => theme.colors.accentCyan};
        box-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
        transform: translateY(-5px);
        
        a{
          color: ${({ theme }) => theme.colors.accentCyan};
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      & > div{
        width: 100%;
      }
    }
  }
`
