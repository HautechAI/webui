import { ArrowAltDownIcon, ArrowAltUpIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Progress } from '@hautechai/webui.progress';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div`
    position: fixed;
    bottom: ${themeVars.spacing.xl};
    right: ${themeVars.spacing.xl};

    border-radius: ${themeVars.cornerRadius.l};
    border-width: ${themeVars.stroke.thin};
    border-style: solid;
    border-color: ${themeVars.layout.strokes};
    background-color: ${themeVars.layout.surfaceLow};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    z-index: 500;

    /* shadow_01 */
    box-shadow: 0px 0px 24px 0px rgba(42, 47, 60, 0.1);
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${themeVars.spacing.ml};
    color: ${themeVars.layout.onSurface.primary};
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

const Label = styled(Typography)`
    flex: 1;
`;

const ContentContainer = styled.div`
    padding-top: ${themeVars.spacing.s};
    padding-bottom: ${themeVars.spacing.xl};
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
    const style: React.CSSProperties = {
        width: props.width ? `${props.width}px` : undefined,
    };
    return (
        <Container className={props.className} style={style}>
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
