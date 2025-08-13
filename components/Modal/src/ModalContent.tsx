import { styled } from '@linaria/react';
import { ComponentProps } from 'react';
import { themeVars } from '@hautechai/webui.themeprovider';

export const ModalContentStyled = styled.div`
    padding: ${themeVars.spacing.xxl};
    border-radius: ${themeVars.cornerRadius.l};
    background: ${themeVars.layout.surfaceLow};
`;

export const ModalContent = (props: ComponentProps<typeof ModalContentStyled>) => {
    return <ModalContentStyled {...props} />;
};
