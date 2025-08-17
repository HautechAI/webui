import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export default {
    Close: styled('div')`
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    `,
    Container: styled('div')`
        background-color: ${themeVars.layout.surfaceLow};
        border-color: ${themeVars.layout.strokes};
        border-radius: ${themeVars.cornerRadius.m};
        border-style: solid;
        border-width: ${themeVars.stroke.thin};
        display: flex;
        flex-direction: column;
        margin: ${themeVars.spacing.m};
        padding: ${themeVars.spacing.l} ${themeVars.spacing.s};
    `,
};
