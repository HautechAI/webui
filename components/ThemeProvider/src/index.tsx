import { styled } from '@linaria/react';

export * from './ThemeProvider';
export { css } from '@linaria/core';
export { styled };
export { themeVars, cssVar } from './theme-to-css';

// Global component for Linaria - simple wrapper for global styles
export const Global = ({ styles }: { styles: any }) => {
    return null; // Linaria handles global styles at build time
};
