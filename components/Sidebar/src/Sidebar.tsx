import { css, styled } from '@hautechai/webui.themeprovider';

const StyledContainer = styled.div<SidebarProps>`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme, hierarchy }) =>
        hierarchy === 'mid' ? theme.palette.layout.surfaceMid : theme.palette.layout.surfaceLow};

    ${({ side, theme }) =>
        side === 'right' &&
        css`
            border-left-width: ${theme.foundation.stroke.thin}px;
            border-left-style: solid;
            border-left-color: ${theme.palette.layout.strokes};
        `}

    ${({ side, theme }) =>
        side === 'left' &&
        css`
            border-right-width: ${theme.foundation.stroke.thin}px;
            border-right-style: solid;
            border-right-color: ${theme.palette.layout.strokes};
        `}

    ${({ stretch }) =>
        stretch &&
        css`
            flex-grow: 1;
        `}
`;

const SidebarContent = styled.div`
    overflow-y: auto;
    flex: 1;
`;

export const SidebarSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.l}px;
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
        <StyledContainer hierarchy={hierarchy} stretch={props.stretch} side={side}>
            {props.header}
            <SidebarContent>{props.content}</SidebarContent>
            {props.footer}
        </StyledContainer>
    );
};
