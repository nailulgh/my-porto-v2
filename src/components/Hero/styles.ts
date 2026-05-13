import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(2px, -1px); }
  60% { transform: translate(-1px, 2px); }
  80% { transform: translate(1px, -2px); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.section`
  padding-top: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  gap: 8rem;
  background: rgba(0,0,0,0);
  
  .hero-text{
    & > p{
      font-size: 1.8rem;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.accentCyan};
    }
    h1{
      font-size: 7rem;
      font-family: ${({ theme }) => theme.fonts.display};
      color: ${({ theme }) => theme.colors.textPrimary};
      text-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
      margin: 1rem 0;
      
      &:hover {
        animation: ${glitch} 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
        color: ${({ theme }) => theme.colors.accentCyan};
      }
    }

    h3{
      color: ${({ theme }) => theme.colors.accentCyan};
      font-family: ${({ theme }) => theme.fonts.display};
      font-size: 2.4rem;
      margin-bottom: 2rem;
      letter-spacing: 0.1em;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 1.6rem;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
      transition: filter 0.3s;
      
      &:hover {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
      }
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.accentCyan};
    color: ${({ theme }) => theme.colors.accentCyan};
    border-radius: ${({ theme }) => theme.radius.sm};
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      background: rgba(0, 245, 255, 0.1);
      box-shadow: ${({ theme }) => theme.shadows.glowCyanStrong};
      transform: translateY(-3px);
    }
  }

  .hero-image{
    img{
      max-width: 500px;
      filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.accentCyan}44);
      animation: ${float} 4s ease-in-out infinite;
      transition: all 0.5s ease;
      
      &:hover {
        filter: drop-shadow(0 0 30px ${({ theme }) => theme.colors.accentCyan}AA);
        transform: scale(1.05);
        animation-play-state: paused;
      }
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`