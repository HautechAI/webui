import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export interface NodeHeaderProps {
    icon?: React.ReactNode;
    label: string;
    badge?: React.ReactNode;
}

const Container = styled.div`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.xl};
    justify-content: flex-start;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.m};
    flex: 1;
`;

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

export const NodeHeader: React.FC<NodeHeaderProps> = ({ icon, label, badge }) => {
    return (
        <Container>
            <IconWrapper>
                {icon && <IconContainer>{icon}</IconContainer>}
                <LabelContainer>
                    <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                        {label}
                    </Typography>
                </LabelContainer>
            </IconWrapper>
            {badge && <BadgeContainer>{badge}</BadgeContainer>}
        </Container>
    );
};