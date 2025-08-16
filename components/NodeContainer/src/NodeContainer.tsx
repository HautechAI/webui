import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeContainerProps {
    children: React.ReactNode;
    width?: number;
}

const Container = styled.div<{ width?: number }>`
    background: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.xl};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
`;

export const NodeContainer: React.FC<NodeContainerProps> = ({ children, width }) => {
    return <Container width={width}>{children}</Container>;
};