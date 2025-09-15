import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Divider } from '@hautechai/webui.divider';

export interface NodeContentProps {
    children: React.ReactNode;
    testId?: string;
}

const Container = styled.div`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.l};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NodeContent: React.FC<NodeContentProps> = ({ children, testId }) => {
    return (
        <>
            <Container data-testid={testId}>{children}</Container>
            <Divider />
        </>
    );
};
