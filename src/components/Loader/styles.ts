import styled, { keyframes } from 'styled-components';

const glitchAnim = keyframes`
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
`;

const progressAnim = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  
  .glitch-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .glitch {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    text-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
    
    &::before, &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.bgPrimary};
    }
    
    &::before {
      left: 2px;
      text-shadow: -2px 0 ${({ theme }) => theme.colors.accentMagenta};
      clip: rect(24px, 550px, 90px, 0);
      animation: ${glitchAnim} 3s infinite linear alternate-reverse;
    }
    
    &::after {
      left: -2px;
      text-shadow: -2px 0 ${({ theme }) => theme.colors.accentCyan};
      clip: rect(85px, 550px, 140px, 0);
      animation: ${glitchAnim} 2.5s infinite linear alternate-reverse;
    }
  }

  .progress-bar {
    width: 250px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: ${({ theme }) => theme.radius.sm};
    overflow: hidden;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.bgSecondary};
    
    .progress {
      height: 100%;
      background-color: ${({ theme }) => theme.colors.accentCyan};
      box-shadow: ${({ theme }) => theme.shadows.glowCyanStrong};
      animation: ${progressAnim} 1.5s ease-out forwards;
    }
  }
`;
