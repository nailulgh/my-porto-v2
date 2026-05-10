import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1.5rem 2.5rem;
      border-radius: ${({ theme }) => theme.radius.sm};
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.borderDefault};
      background: ${({ theme }) => theme.colors.bgElevated};
      color: ${({ theme }) => theme.colors.textPrimary};
      font-family: ${({ theme }) => theme.fonts.body};
      font-weight: 400;
      transition: all 0.3s ease;
      
      &::placeholder{
        color: ${({ theme }) => theme.colors.textDisabled};
      }
      
      &:focus {
        border-color: ${({ theme }) => theme.colors.accentCyan};
        box-shadow: 0 0 10px rgba(0, 245, 255, 0.2);
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      margin-top: 2rem;
      padding: 1.4rem 6rem;
      background: ${({ theme }) => theme.colors.accentMagenta};
      border: 1px solid ${({ theme }) => theme.colors.accentMagenta};
      color: #ffffff;
      border-radius: ${({ theme }) => theme.radius.sm};
      font-family: ${({ theme }) => theme.fonts.display};
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      transition: all 0.3s ease;
      cursor: pointer;
      
      &:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentMagenta};
        transform: translateY(-3px);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`