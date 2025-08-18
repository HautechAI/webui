import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export const MaterialContainer = styled.div`
    display: flex;
    overflow: hidden;
    gap: ${themeVars.spacing.xl};
    border-bottom-color: ${themeVars.layout.strokes};
    border-bottom-style: solid;
    border-bottom-width: ${themeVars.stroke.thin};
    padding: 0 ${themeVars.spacing.l};

    &[data-stretch='true'] {
        flex: 1;
    }
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

    &[data-stretch='true'] {
        flex: 1;
    }
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

    &[data-stretch='true'] {
        flex: 1;
        justify-content: center;
    }

    &[data-whitespace='xs'] {
        padding-left: ${themeVars.spacing.xs};
        padding-right: ${themeVars.spacing.xs};
    }

    &[data-whitespace='s'] {
        padding-left: ${themeVars.spacing.s};
        padding-right: ${themeVars.spacing.s};
    }

    &[data-whitespace='m'] {
        padding-left: ${themeVars.spacing.m};
        padding-right: ${themeVars.spacing.m};
    }

    &[data-whitespace='ml'] {
        padding-left: ${themeVars.spacing.ml};
        padding-right: ${themeVars.spacing.ml};
    }

    &[data-whitespace='l'] {
        padding-left: ${themeVars.spacing.l};
        padding-right: ${themeVars.spacing.l};
    }

    &[data-whitespace='xl'] {
        padding-left: ${themeVars.spacing.xl};
        padding-right: ${themeVars.spacing.xl};
    }

    &[data-whitespace='xxl'] {
        padding-left: ${themeVars.spacing.xxl};
        padding-right: ${themeVars.spacing.xxl};
    }

    &[data-whitespace='xxxl'] {
        padding-left: ${themeVars.spacing.xxxl};
        padding-right: ${themeVars.spacing.xxxl};
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

    &[data-stretch='true'] {
        flex: 1;
        justify-content: center;
    }

    &[data-whitespace='xs'] {
        padding-left: ${themeVars.spacing.xs};
        padding-right: ${themeVars.spacing.xs};
    }

    &[data-whitespace='s'] {
        padding-left: ${themeVars.spacing.s};
        padding-right: ${themeVars.spacing.s};
    }

    &[data-whitespace='m'] {
        padding-left: ${themeVars.spacing.m};
        padding-right: ${themeVars.spacing.m};
    }

    &[data-whitespace='ml'] {
        padding-left: ${themeVars.spacing.ml};
        padding-right: ${themeVars.spacing.ml};
    }

    &[data-whitespace='l'] {
        padding-left: ${themeVars.spacing.l};
        padding-right: ${themeVars.spacing.l};
    }

    &[data-whitespace='xl'] {
        padding-left: ${themeVars.spacing.xl};
        padding-right: ${themeVars.spacing.xl};
    }

    &[data-whitespace='xxl'] {
        padding-left: ${themeVars.spacing.xxl};
        padding-right: ${themeVars.spacing.xxl};
    }

    &[data-whitespace='xxxl'] {
        padding-left: ${themeVars.spacing.xxxl};
        padding-right: ${themeVars.spacing.xxxl};
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
