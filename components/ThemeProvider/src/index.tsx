import styled from '@emotion/styled';
import { Paths } from 'type-fest';
import { ThemeType } from './ThemeProvider';

export * from './ThemeProvider';
export { themeVars, cssVar } from './theme-to-css';

export { css, Global } from '@emotion/react';
export { styled };

export type IconColorProp =
    | Paths<ThemeType['palette'], { leavesOnly: true }>
    | 'currentColor'
    | `#${string}`
    | `rgba(${string})`;
