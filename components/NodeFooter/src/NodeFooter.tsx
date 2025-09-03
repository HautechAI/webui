import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeFooterProps {
    inputPorts?: React.ReactNode;
    outputPorts?: React.ReactNode;
    testId?: string;
}

const Container = styled.div`
    padding: ${themeVars.spacing.m} 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const InputPorts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const OutputPorts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

    export const NodeFooter: React.FC<NodeFooterProps> = ({ inputPorts, outputPorts, testId }) => {
    return (
        <Container data-testid={testId}>
            <InputPorts>{inputPorts}</InputPorts>
            <OutputPorts>{outputPorts}</OutputPorts>
        </Container>
    );
};
