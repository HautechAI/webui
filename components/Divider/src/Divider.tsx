import { css } from '@linaria/core';
import { themeVars } from '../../ThemeProvider/src';

export const dividerStyles = css`
    border-bottom-width: ${themeVars.stroke.thin};
    border-bottom-style: solid;
    border-bottom-color: ${themeVars.layout.strokes};
`;

export const Divider = (props: { className?: string }) => {
    const className = [dividerStyles, props.className].filter(Boolean).join(' ');
    return <div className={className} />;
};
