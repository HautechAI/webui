import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Divider } from '@hautechai/webui.divider';

export interface NodeContentProps {
    children: React.ReactNode;
}

const Container = styled.div`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NodeContent: React.FC<NodeContentProps> = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
            <Divider />
        </>
    );
};