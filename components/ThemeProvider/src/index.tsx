import { styled, css, globalCss } from '@pigment-css/react';

export * from './ThemeProvider';
export { css, styled };
// Re-export globalCss as Global to maintain compatibility with emotion API
export { globalCss as Global };
