import React, { ReactNode } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { WarningIcon } from '@hautechai/webui.icon';

export interface NodePortProps {
    type: 'input' | 'output';
    label?: string;
    interactiveHandle?: ReactNode;
    testId?: string;
    state?: 'normal' | 'warning' | 'error';
}

const Container = styled.div`
    padding: ${themeVars.spacing.m} 0;
    position: relative;
    display: flex;
    align-items: center;

    &[data-type='input'] {
        justify-content: flex-start;
        padding-left: ${themeVars.spacing.xl};
    }

    &[data-type='output'] {
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
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-type='input'] {
        left: -6px;
    }

    &[data-type='output'] {
        right: -6px;
    }

    &[data-state='error'] {
        background: ${themeVars.actions.error};
    }
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

export const NodePort: React.FC<NodePortProps> = ({ type, label, interactiveHandle, testId, state = 'normal' }) => {
    return (
        <Container data-testid={testId} data-type={type}>
            {label && (
                <LabelContainer>
                    {state === 'warning' && <WarningIcon size={16} color="actions.warning" />}
                    <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
                        {label}
                    </Typography>
                </LabelContainer>
            )}
            <PortHandle data-type={type} data-state={state}>
                {interactiveHandle}
            </PortHandle>
        </Container>
    );
};
