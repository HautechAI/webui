import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeContainerProps {
    children: React.ReactNode;
}

const Container = styled.div`
    background: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.xl};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const NodeContainer: React.FC<NodeContainerProps> = ({ children }) => {
    return <Container>{children}</Container>;
};