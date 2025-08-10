import { styled, css, themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

// Base container styles
const containerBase = css`
    border-radius: ${themeVars.cornerRadius.s}px;
    gap: ${themeVars.spacing.s}px;
    padding: ${themeVars.spacing.s}px ${themeVars.spacing.m}px;
`;

// Color variant styles
const containerSuccess = css`
    background-color: ${themeVars.actions.onSuccess};
`;

const containerError = css`
    background-color: ${themeVars.actions.onError};
`;

const containerInfo = css`
    background-color: ${themeVars.layout.surfaceMid};
`;

// Text base styles
const textBase = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

// Text color variant styles
const textSuccess = css`
    color: ${themeVars.actions.success};
`;

const textError = css`
    color: ${themeVars.actions.error};
`;

const textInfo = css`
    color: ${themeVars.layout.onSurface.secondary};
`;

export const containerClasses = {
    base: containerBase,
    success: containerSuccess,
    error: containerError,
    info: containerInfo,
};

export const textClasses = {
    base: textBase,
    success: textSuccess,
    error: textError,
    info: textInfo,
};

export default {
    Container: styled.div``,
    Text: styled(Typography)``,
};
