import React from 'react';
import { styled } from '@linaria/react';
import { Typography } from '@hautechai/webui.typography';
import { ArrowAltRightIcon } from '@hautechai/webui.icon';
import { themeVars } from '@hautechai/webui.themeprovider';

export interface NodeGroupHeaderProps {
    /** Text label to display */
    label: string;
    /** Whether the group is collapsed */
    collapsed: boolean;
    /** Handler for toggle state */
    onToggle?: () => void;
}

const Container = styled.div`
    align-self: stretch;
    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    border-radius: ${themeVars.cornerRadius.xs};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    cursor: pointer;

    &:hover {
        background: ${themeVars.layout.surfaceHigh};
    }
`;

const HeaderRow = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.s};
    display: inline-flex;
`;

const LabelContainer = styled.div`
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    display: flex;
`;

const ArrowContainer = styled.div<{ collapsed: boolean }>`
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVars.layout.onSurface.secondary};
    transform: ${props => props.collapsed ? 'rotate(0deg)' : 'rotate(-90deg)'};
    transition: transform 0.15s ease-out;
`;

export const NodeGroupHeader = (props: NodeGroupHeaderProps) => {
    const { label, collapsed, onToggle } = props;

    const handleClick = () => {
        onToggle?.();
    };

    return (
        <Container onClick={handleClick}>
            <HeaderRow>
                <LabelContainer>
                    <Typography 
                        variant="LabelSmallEmphasized" 
                        color="layout.onSurface.primary"
                    >
                        {label}
                    </Typography>
                </LabelContainer>
                <ArrowContainer collapsed={collapsed}>
                    <ArrowAltRightIcon size={12} />
                </ArrowContainer>
            </HeaderRow>
        </Container>
    );
};