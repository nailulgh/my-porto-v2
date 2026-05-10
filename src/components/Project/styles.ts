import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-family: ${({ theme }) => theme.fonts.display};
    color: ${({ theme }) => theme.colors.accentCyan};
    text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 3rem 2.5rem;
      background-color: ${({ theme }) => theme.colors.bgSecondary};
      border: 1px solid ${({ theme }) => theme.colors.borderDefault};
      border-radius: ${({ theme }) => theme.radius.md};
      transition: all 0.4s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: ${({ theme }) => theme.colors.textPrimary};
      position: relative;
      overflow: hidden;

      &::before {
        content: "// PROJECT_ID_" + attr(data-id); /* Fallback or placeholder */
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-family: ${({ theme }) => theme.fonts.mono};
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.accentMagenta};
        opacity: 0.5;
      }

      &:hover{
        transform: translateY(-8px);
        border-color: ${({ theme }) => theme.colors.accentCyan};
        box-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
        
        header svg {
          stroke: ${({ theme }) => theme.colors.accentCyan};
          filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => theme.colors.accentMagenta};
        margin-bottom: 3rem;
        
        svg {
          stroke: ${({ theme }) => theme.colors.accentMagenta};
          transition: all 0.3s ease;
        }

        .project-links{
          display: flex;
          align-items: center;
          gap: 1.5rem;
          
          a > img {
            width: 3rem;
            filter: ${({ theme }) => theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'};
            transition: all 0.3s ease;
            
            &:hover {
              filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
              transform: scale(1.1);
            }
          }
        }
      }
      
      h3{
        margin-bottom: 2rem;
        font-family: ${({ theme }) => theme.fonts.display};
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.accentCyan};
      }

      p{
        letter-spacing: 0.05rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        font-family: ${({ theme }) => theme.fonts.body};
        color: ${({ theme }) => theme.colors.textSecondary};
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 1.2rem;
          font-family: ${({ theme }) => theme.fonts.mono};
          color: ${({ theme }) => theme.colors.accentMagenta};
          opacity: 0.8;
          list-style: none;
          
          li {
            background: ${({ theme }) => theme.colors.bgElevated};
            padding: 0.2rem 0.8rem;
            border-radius: ${({ theme }) => theme.radius.sm};
          }
        }
      }

    }
  }

  @media (max-width: 1100px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    margin-top: 10rem;
    .projects{
      grid-template-columns: 1fr;
    }
  }
`