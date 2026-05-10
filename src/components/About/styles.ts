import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem 0; /* Menghapus side padding agar lebih membaur */
  background: transparent;
  border: none;
  box-shadow: none;

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
    background: transparent;
    border: none;
    padding: 1.2rem;
    min-width: 9rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      
      p {
        color: ${({ theme }) => theme.colors.accentCyan};
        text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
      }
      
      img {
        filter: drop-shadow(0 0 12px ${({ theme }) => theme.colors.accentCyan});
      }
    }

    img{
      width: 3.4rem;
      margin-bottom: 0.8rem;
      filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.accentCyan});
      transition: all 0.3s ease;
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
    padding: 1.5rem 0 1.5rem 1.5rem;
    background: transparent;
    border-left: 3px solid ${({ theme }) => theme.colors.accentCyan};
    border-radius: 0;

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
    position: relative;
    
    .image-container {
      position: relative;
      width: 350px;
      height: 350px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .cyber-ring {
      position: absolute;
      bottom: 0;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      border: 2px dashed ${({ theme }) => theme.colors.accentCyan};
      box-shadow: 0 0 20px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(0, 245, 255, 0.2);
      animation: spin-slow 15s linear infinite;
      z-index: 1;
    }

    .profile-img {
      width: 90%;
      position: relative;
      z-index: 2;
      filter: grayscale(0.2) drop-shadow(0 0 10px rgba(0,0,0,0.5));
      transition: all 0.5s ease;
      transform: translateY(-20px) scale(1.05); /* Efek keluar dari lingkaran */
      
      /* Efek hologram fade di bagian bawah agar potongan tidak tajam */
      -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
      mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
      
      border: none;
      border-radius: 0;
      box-shadow: none;

      &:hover {
        filter: grayscale(0) drop-shadow(0 0 15px ${({ theme }) => theme.colors.accentCyan});
        transform: translateY(-30px) scale(1.1);
      }
    }

    .floating-icon {
      position: absolute;
      width: 45px;
      height: 45px;
      z-index: 3;
      filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accentCyan});
    }

    .icon-1 {
      top: 10%;
      left: -10%;
      animation: float 4s ease-in-out infinite;
    }
    .icon-2 {
      top: 40%;
      right: -15%;
      animation: float 5s ease-in-out infinite 1s;
    }
    .icon-3 {
      bottom: 10%;
      left: 0;
      animation: float 6s ease-in-out infinite 2s;
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes spin-slow {
    100% { transform: rotate(360deg); }
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