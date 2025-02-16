import { styled } from '@hautechai/webui.themeprovider';
import { ComponentProps } from 'react';

export const ModalContentStyled = styled.div`
    padding: ${({ theme }) => theme.foundation.spacing.xxl}px;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;
    background: ${({ theme }) => theme.palette.layout.surfaceLow};
`;

export const ModalContent = (props: ComponentProps<typeof ModalContentStyled>) => {
    return <ModalContentStyled {...props} />;
};
