import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled('div')`
    border-radius: ${themeVars.cornerRadius.s};
    gap: ${themeVars.spacing.s};
    padding: ${themeVars.spacing.s} ${themeVars.spacing.m};

    &[data-color='success'] {
        background-color: ${themeVars.actions.onSuccess};
    }
    &[data-color='error'] {
        background-color: ${themeVars.actions.onError};
    }
    &[data-color='info'] {
        background-color: ${themeVars.layout.surfaceMid};
    }
`;

export default {
    Container,
};
