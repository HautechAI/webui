import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeContainerProps {
    children: React.ReactNode;
    testId?: string;
    width?: number;
    selected?: boolean;
}

const Container = styled.div<{ width?: number }>`
    background: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.xl};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${(props) => (props.width ? `${props.width}px` : 'auto')};

    &[data-selected='true'] {
        border-color: ${themeVars.actions.primary};
    }
`;

export const NodeContainer: React.FC<NodeContainerProps> = ({ children, width, selected = false, testId }) => {
    return (
        <Container width={width} data-selected={selected} data-testid={testId}>
            {children}
        </Container>
    );
};
