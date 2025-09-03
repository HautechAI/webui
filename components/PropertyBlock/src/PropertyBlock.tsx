import React from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { IconButton } from '@hautechai/webui.iconbutton';
import { MinusIcon, PlusIcon } from '@hautechai/webui.icon';

const Container = styled.div`
    flex: 1;
    padding: ${themeVars.spacing.l};
    border-bottom: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
`;

const PropertyHeader = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: center;
    gap: ${themeVars.spacing.l};
    display: inline-flex;
`;

const Label = styled.div`
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const Content = styled.div`
    align-self: stretch;
    padding-top: ${themeVars.spacing.ml};
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
`;

const ContentContainer = styled.div`
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

export type PropertyBlockProps = {
    children?: React.ReactNode;
    removable?: boolean;
    removed?: boolean;
    className?: string;
    label?: string;
    onToggle?: () => void;
    testId?: string;
};

export const PropertyBlock = (props: PropertyBlockProps) => {
    const { children, removable = false, removed = false, className, label = 'Property', onToggle } = props;

    return (
        <Container className={className} data-testid={props.testId || testId}>
            <PropertyHeader>
                <Label>
                    <Typography
                        variant="LabelSmallEmphasized"
                        color={removed ? 'layout.onSurface.secondary' : 'layout.onSurface.primary'}
                    >
                        {label}
                    </Typography>
                </Label>
                {removable && (
                    <IconButton
                        variant="flat"
                        size="xsmall"
                        icon={removed ? <PlusIcon /> : <MinusIcon />}
                        onClick={onToggle}
                    />
                )}
            </PropertyHeader>
            {!removed && (
                <Content>
                    <ContentContainer>
                        {children || (
                            <Typography variant="LabelMediumRegular" color="layout.onSurface.secondary">
                                Content placeholder
                            </Typography>
                        )}
                    </ContentContainer>
                </Content>
            )}
        </Container>
    );
};
