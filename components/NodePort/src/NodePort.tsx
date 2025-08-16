import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export interface NodePortProps {
    type: 'input' | 'output';
    label?: string;
}

const Container = styled.div`
    padding: ${themeVars.spacing.m} 0;
    position: relative;
    display: flex;
    align-items: center;

    &[data-type="input"] {
        justify-content: flex-start;
        padding-left: ${themeVars.spacing.xl};
    }

    &[data-type="output"] {
        justify-content: flex-end;
        padding-right: ${themeVars.spacing.xl};
    }
`;

const PortHandle = styled.div`
    width: 12px;
    height: 12px;
    background: ${themeVars.layout.onSurface.tertiary};
    border-radius: ${themeVars.cornerRadius.xxl};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.surfaceLow};
    position: absolute;

    &[data-type="input"] {
        left: -6px;
    }

    &[data-type="output"] {
        right: -6px;
    }
`;

export const NodePort: React.FC<NodePortProps> = ({ type, label }) => {
    return (
        <Container data-type={type}>
            {label && (
                <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
                    {label}
                </Typography>
            )}
            <PortHandle data-type={type} />
        </Container>
    );
};