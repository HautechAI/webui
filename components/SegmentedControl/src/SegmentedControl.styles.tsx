import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

export const MaterialContainer = styled.div`
    display: flex;
    overflow: hidden;
    gap: ${themeVars.spacing.xl};
    border-bottom-color: ${themeVars.layout.strokes};
    border-bottom-style: solid;
    border-bottom-width: ${themeVars.stroke.thin};
    padding: 0 ${themeVars.spacing.l};
`;

export const HIGContainer = styled.div`
    display: flex;
    border-color: ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.s};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    overflow: hidden;
    padding: ${themeVars.spacing.xs};
    gap: ${themeVars.spacing.s};
`;

export const HIGRow = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: calc(${themeVars.spacing.s} * 1.5) ${themeVars.spacing.s};
    background-color: transparent;
    cursor: pointer;
    border-radius: ${themeVars.cornerRadius.s};
    gap: ${themeVars.spacing.s};
    color: ${themeVars.layout.onSurface.tertiary};

    &[data-selected='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
        color: ${themeVars.layout.onSurface.primary};
    }

    &:hover {
        background-color: ${themeVars.layout.surfaceMid};
        color: ${themeVars.layout.onSurface.primary};
    }

    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

export const MaterialRow = styled.div`
    flex-direction: row;
    display: flex;
    padding: ${themeVars.spacing.s} ${themeVars.spacing.s};
    padding-bottom: ${themeVars.spacing.ml};
    cursor: pointer;
    gap: ${themeVars.spacing.s};
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: ${themeVars.stroke.thick};
    color: ${themeVars.layout.onSurface.tertiary};

    &[data-selected='true'] {
        border-bottom-color: ${themeVars.actions.primary};
        color: ${themeVars.layout.onSurface.primary};
    }

    &:hover {
        color: ${themeVars.layout.onSurface.primary};
    }

    transition: color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
`;

export const WhiteSpace = styled.div`
    height: ${themeVars.spacing.l};
    width: ${themeVars.spacing.l};
`;

export const Icon = styled.div`
    display: flex;
    color: ${themeVars.layout.onSurface.tertiary};
    &[data-selected='true'] {
        color: ${themeVars.layout.onSurface.primary};
    }
`;
