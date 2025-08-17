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
    width: 100%;
    height: 100%;
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${themeVars.spacing.xl};
`;

const IconSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

const IconContainer = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    background: ${themeVars.layout.onSurface.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LabelSection = styled.div`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
`;

const LabelText = styled(Typography)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

const BadgeSection = styled.div`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NodeHeader: React.FC<NodeHeaderProps> = ({ icon, label, badge }) => {
    return (
        <>
            <Container>
                <IconSection>
                    {icon && <IconContainer>{icon}</IconContainer>}
                </IconSection>
                <LabelSection>
                    <LabelContainer>
                        <LabelText variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                            {label}
                        </LabelText>
                    </LabelContainer>
                </LabelSection>
                <BadgeSection>
                    {badge}
                </BadgeSection>
            </Container>
            <Divider />
        </>
    );
};