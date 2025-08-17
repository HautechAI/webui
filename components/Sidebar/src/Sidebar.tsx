import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeVars.layout.surfaceMid};
    &[data-hierarchy="low"] {
        background-color: ${themeVars.layout.surfaceLow};
    }

    &[data-side="right"] {
        border-left-width: ${themeVars.stroke.thin};
        border-left-style: solid;
        border-left-color: ${themeVars.layout.strokes};
    }

    &[data-side="left"] {
        border-right-width: ${themeVars.stroke.thin};
        border-right-style: solid;
        border-right-color: ${themeVars.layout.strokes};
    }

    &[data-stretch="true"] {
        flex-grow: 1;
    }
`;

const SidebarContent = styled.div`
    overflow-y: auto;
    flex: 1;
`;

export const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${themeVars.spacing.l} ${themeVars.spacing.l};
`;

export type SidebarProps = {
    header?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    hierarchy?: 'mid' | 'low';
    stretch?: boolean;
    side?: 'left' | 'right';
};
export const Sidebar = (props: SidebarProps) => {
    const { hierarchy = 'mid', side = 'left' } = props;
    return (
    <StyledContainer data-hierarchy={hierarchy} data-stretch={!!props.stretch} data-side={side}>
            {props.header}
            <SidebarContent>{props.content}</SidebarContent>
            {props.footer}
        </StyledContainer>
    );
};
