const fonts = {
  display: "'Orbitron', 'Rajdhani', sans-serif",
  body: "'Share Tech', 'Exo 2', sans-serif",
  mono: "'Share Tech Mono', 'JetBrains Mono', monospace",
};

const radius = {
  sm: '2px',
  md: '4px',
  lg: '8px',
  none: '0px',
};

export const darkTheme = {
  mode: 'dark' as const,
  colors: {
    bgPrimary: '#0a0014',
    bgSecondary: '#140028',
    bgElevated: '#1e003c',
    bgOverlay: 'rgba(10, 0, 20, 0.85)',
    accentCyan: '#00f5ff',
    accentMagenta: '#ff00aa',
    accentYellow: '#f5e642',
    accentGreen: '#00ff88',
    accentPurple: '#9d00ff',
    textPrimary: '#e8e8f0',
    textSecondary: '#8888aa',
    textDisabled: '#44445a',
    borderDefault: 'rgba(0, 245, 255, 0.15)',
    borderActive: 'rgba(0, 245, 255, 0.6)',
    borderGlow: 'rgba(0, 245, 255, 0.9)',
  },
  shadows: {
    glowCyanSubtle: '0 0 8px rgba(0, 245, 255, 0.6)',
    glowCyanMedium: '0 0 10px rgba(0, 245, 255, 0.4), 0 0 20px rgba(0, 245, 255, 0.2)',
    glowCyanStrong: '0 0 15px rgba(0, 245, 255, 0.7), 0 0 30px rgba(0, 245, 255, 0.4)',
    glowMagenta: '0 0 10px rgba(255, 0, 170, 0.4), 0 0 20px rgba(255, 0, 170, 0.2)',
  },
  fonts,
  radius,
};

export const lightTheme = {
  mode: 'light' as const,
  colors: {
    bgPrimary: '#eef1f8',
    bgSecondary: '#e0e5f2',
    bgElevated: '#d4daf0',
    bgOverlay: 'rgba(238, 241, 248, 0.90)',
    accentCyan: '#007acc',
    accentMagenta: '#cc0077',
    accentYellow: '#b8a800',
    accentGreen: '#007a44',
    accentPurple: '#6600cc',
    textPrimary: '#080812',
    textSecondary: '#44446a',
    textDisabled: '#9999bb',
    borderDefault: 'rgba(0, 122, 204, 0.20)',
    borderActive: 'rgba(0, 122, 204, 0.60)',
    borderGlow: 'rgba(0, 122, 204, 0.90)',
  },
  shadows: {
    glowCyanSubtle: '0 0 6px rgba(0, 122, 204, 0.4)',
    glowCyanMedium: '0 0 8px rgba(0, 122, 204, 0.25), 0 0 16px rgba(0, 122, 204, 0.12)',
    glowCyanStrong: '0 0 12px rgba(0, 122, 204, 0.45), 0 0 24px rgba(0, 122, 204, 0.2)',
    glowMagenta: '0 0 8px rgba(204, 0, 119, 0.3), 0 0 16px rgba(204, 0, 119, 0.15)',
  },
  fonts,
  radius,
};

export type Theme = Omit<typeof darkTheme, 'mode'> & { mode: 'dark' | 'light' };
export const theme: Theme = darkTheme;
