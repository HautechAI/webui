import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

export default {
    Container: styled('div')`
        display: flex;
        flex-direction: column;
    gap: ${themeVars.spacing.ml};
    padding: ${themeVars.spacing.s};
        width: 310px;
    `,
    UnreadIndicator: styled('div')`
    background-color: ${themeVars.actions.primary};
    border-radius: ${themeVars.cornerRadius.s};
        height: 6px;
        width: 6px;
    `,
    TopContainer: styled('div')`
    gap: ${themeVars.spacing.s};
    `,
};
