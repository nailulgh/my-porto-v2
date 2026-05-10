import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  .hard-skills{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.bgElevated};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: 1.2rem;
    min-width: 9rem;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.accentCyan};
      box-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
      transform: translateY(-5px);
      
      p {
        color: ${({ theme }) => theme.colors.accentCyan};
      }
    }

    img{
      width: 3.4rem;
      margin-bottom: 0.8rem;
      filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
    }
    
    p {
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.fonts.mono};
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.textSecondary};
      transition: color 0.3s ease;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3.5rem;
    font-family: ${({ theme }) => theme.fonts.display};
    color: ${({ theme }) => theme.colors.accentCyan};
    text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }

  h3{
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.accentMagenta};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 2.2rem;
  }

  p{
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .education, .experience {
    margin-top: 2rem;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.bgElevated};
    border-left: 3px solid ${({ theme }) => theme.colors.accentCyan};
    border-radius: ${({ theme }) => theme.radius.sm};

    h4 {
      color: ${({ theme }) => theme.colors.accentCyan};
      margin: 0.5rem 0;
    }
  }

  .about-image{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
      max-width: 350px;
      border-radius: ${({ theme }) => theme.radius.lg};
      border: 1px solid ${({ theme }) => theme.colors.borderDefault};
      filter: grayscale(0.5) brightness(0.8);
      transition: all 0.5s;
      &:hover{
        filter: grayscale(0) brightness(1);
        border-color: ${({ theme }) => theme.colors.accentCyan};
        box-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem;
    .about-image {
      margin-top: 4rem;
      img{
        width: 100%;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      margin-top: 4rem;
      img{
        width: 100%;
      }
    }
  }
`