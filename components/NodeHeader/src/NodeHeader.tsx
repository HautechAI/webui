import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { Divider } from '@hautechai/webui.divider';

export interface NodeHeaderProps {
    icon?: React.ReactNode;
    label: string;
    badge?: React.ReactNode;
}

const Container = styled.div`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NodeHeader: React.FC<NodeHeaderProps> = ({ icon, label, badge }) => {
    return (
        <>
            <Container>
                {icon && <IconContainer>{icon}</IconContainer>}
                <LabelContainer>
                    <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                        {label}
                    </Typography>
                </LabelContainer>
                {badge && <BadgeContainer>{badge}</BadgeContainer>}
            </Container>
            <Divider />
        </>
    );
};