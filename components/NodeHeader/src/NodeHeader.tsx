import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { Divider } from '@hautechai/webui.divider';
import { IconColorProp } from '../../Icon/src/color';
import { Column } from '@hautechai/webui.column';

export interface NodeHeaderProps {
    icon?: React.ReactNode;
    label: string;
    badge?: React.ReactNode;
}

const NoShrink = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    padding: ${themeVars.spacing.ml} ${themeVars.spacing.xl};
    display: flex;
    justify-content: flex-start;
    gap: ${themeVars.spacing.m};
    overflow: hidden;
    align-items: center;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const NodeHeader: React.FC<NodeHeaderProps> = ({ icon, label, badge }) => {
    const sizedIcon = React.isValidElement<{ size?: number; color?: IconColorProp }>(icon)
        ? React.cloneElement(icon, { size: 16, color: 'layout.onSurface.secondary' })
        : icon;
    return (
        <>
            <Container>
                {sizedIcon && <NoShrink>{sizedIcon}</NoShrink>}
                <Column overflow="hidden" stretch>
                    <LabelContainer>
                        <Typography
                            noWrap
                            overflow="ellipsis"
                            variant="LabelMediumEmphasized"
                            color="layout.onSurface.primary"
                        >
                            {label}
                        </Typography>
                    </LabelContainer>
                </Column>
                {badge && <NoShrink>{badge}</NoShrink>}
            </Container>
            <Divider />
        </>
    );
};
