import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 10000;
  transition: opacity 0.3s ease;

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.accentCyan};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }) => theme.shadows.glowCyanStrong};
    transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  }

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid ${({ theme }) => theme.colors.accentCyan};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
    transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease, box-shadow 0.3s ease;
  }

  &.hovering {
    .dot {
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.accentMagenta};
      box-shadow: 0 0 15px ${({ theme }) => theme.colors.accentMagenta};
    }
    .ring {
      width: 45px;
      height: 45px;
      border-color: ${({ theme }) => theme.colors.accentMagenta};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentMagenta};
    }
  }

  &.clicked {
    .dot {
      transform: translate(-50%, -50%) scale(0.5);
    }
    .ring {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  @media (max-width: 960px) {
    display: none; /* Disable custom cursor on touch devices */
  }
`;
