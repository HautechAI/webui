import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export const maxPxSize = 320;

export const OptionLabel = styled.div`
    padding-left: ${themeVars.spacing.ml};
    padding-bottom: ${themeVars.spacing.m};
    min-width: 100px;
`;

export const AspectRatioBoxContainer = styled.div`
    min-width: ${maxPxSize + 2}px;
    min-height: ${maxPxSize + 2}px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const RatioBox = styled.div`
    display: flex;
    border-color: ${themeVars.layout.onSurface.tertiary};
    border-style: solid;
    border-width: ${themeVars.stroke.standard};
    border-radius: ${themeVars.cornerRadius.m};
    align-items: center;
    justify-content: center;
`;

export const SmallRatioBox = styled.div`
    display: flex;
    border-color: currentcolor;
    border-style: solid;
    border-width: ${themeVars.stroke.standard};
    border-radius: ${themeVars.cornerRadius.s};
`;

export const RatioBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`;

export const ModalContentContainer = styled.div`
    display: flex;
    gap: ${themeVars.spacing.xxl};
    padding: ${themeVars.spacing.xxl};
    border-radius: ${themeVars.cornerRadius.l};
    border-color: ${themeVars.layout.strokes};
    border-style: solid;
    border-width: ${themeVars.stroke.thin};
    background-color: ${themeVars.layout.surfaceLow};
`;

export const Ratio = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    gap: ${themeVars.spacing.s};
    border-radius: ${themeVars.cornerRadius.m};
    border-color: transparent;
    border-style: solid;
    cursor: pointer;
    background-color: transparent;
    &[data-selected='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
    :hover {
        background-color: ${themeVars.layout.surfaceMid};
    }
`;

export const Sizes = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CustomRatioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    gap: ${themeVars.spacing.s};
    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    cursor: pointer;
    margin-top: ${themeVars.spacing.xs};
`;

export const CheckAsDefault = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${themeVars.spacing.m};
    margin-top: ${themeVars.spacing.xl};
    margin-left: ${themeVars.spacing.ml};
    align-items: center;
`;
