import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  gap: 2rem;
  
  /* Glassmorphism: Translucent & Borderless */
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(10, 0, 20, 0.2)' : 'rgba(238, 241, 248, 0.2)'};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: none;
  box-shadow: none;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: ${({ theme }) => theme.colors.textPrimary};
      padding: 0.6rem;
      font-family: ${({ theme }) => theme.fonts.display};
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: all 0.3s ease;

      &.button{
        padding: 0.6rem 2rem;
        background-color: ${({ theme }) => theme.colors.accentCyan};
        color: ${({ theme }) => theme.colors.bgPrimary};
        border-radius: ${({ theme }) => theme.radius.sm};
        font-weight: 700;
        &:hover{
          background-color: ${({ theme }) => theme.colors.accentCyan};
          color: ${({ theme }) => theme.colors.bgPrimary};
          filter: brightness(1.1);
          box-shadow: ${({ theme }) => theme.shadows.glowCyanStrong};
        }
      }

      &:hover{
        color: ${({ theme }) => theme.colors.accentCyan};
        text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
      }
    }
  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.accentCyan};
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.accentCyan};
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border: 1px solid ${({ theme }) => theme.colors.accentCyan};
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    transition: all 0.3s ease;
  }

  @media (max-width: 960px) {
    padding: 1.8rem 2rem;
    gap: 1rem;

    .logo {
      font-size: 2.4rem;
    }

    label {
      margin-left: auto;
    }
  }

  @media (max-width: 400px) {
    .logo {
      font-size: 1.8rem;
    }
  }

  label:after {
    content: '';
    background: ${({ theme }) => theme.colors.accentCyan};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    box-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }

  input:checked + label {
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-color: ${({ theme }) => theme.colors.accentMagenta};
  }

  input:checked + label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
    background: ${({ theme }) => theme.colors.accentMagenta};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentMagenta};
  }

  @media (max-width: 960px){
    /* padding handled above */

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.bgSecondary};
      top: 0;
      left: 0;
      transition: opacity 0.25s;

      a.button{
        background-color: ${({ theme }) => theme.colors.accentCyan};
        color: ${({ theme }) => theme.colors.bgPrimary};
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`