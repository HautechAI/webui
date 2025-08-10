import { ArrowAltDownIcon, ArrowAltUpIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Progress } from '@hautechai/webui.progress';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div<Pick<FloatingPanelProps, 'width'>>`
    position: fixed;
    bottom: ${({ theme }) => theme.foundation.spacing.xl}px;
    right: ${({ theme }) => theme.foundation.spacing.xl}px;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    overflow: hidden;

    ${({ width }) =>
        width
            ? css`
                  width: ${width}px;
              `
            : ''};

    display: flex;
    flex-direction: column;
    z-index: 500;

    /* shadow_01 */
    box-shadow: 0px 0px 24px 0px rgba(42, 47, 60, 0.1);
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.foundation.spacing.ml}px;
    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

const Label = styled(Typography)`
    flex: 1;
`;

const ContentContainer = styled.div`
    padding-top: ${({ theme }) => theme.foundation.spacing.s}px;
    padding-bottom: ${({ theme }) => theme.foundation.spacing.xl}px;
`;

export type FloatingPanelProps = {
    className?: string;
    children?: React.ReactNode;
    title: string;
    width?: number;
    collapsed?: boolean;
    onToggleCollapsed?: () => void;
    showProgress?: boolean;
};

export const FloatingPanel = (props: FloatingPanelProps) => {
    return (
        <Container className={props.className} width={props.width}>
            <Header>
                <IconButton
                    variant="flat"
                    icon={props.collapsed ? <ArrowAltUpIcon /> : <ArrowAltDownIcon />}
                    onClick={props.onToggleCollapsed}
                />
                <Label variant="H1">{props.title}</Label>
                {props.showProgress && <Progress size={24} />}
            </Header>
            {!props.collapsed && <ContentContainer>{props.children}</ContentContainer>}
        </Container>
    );
};
