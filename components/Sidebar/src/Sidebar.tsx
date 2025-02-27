import { styled } from '@hautechai/webui.themeprovider';

const StyledContainer = styled.div<SidebarProps>`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme, hierarchy }) =>
        hierarchy === 'mid' ? theme.palette.layout.surfaceMid : theme.palette.layout.surfaceLow};

    border-right-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.palette.layout.strokes};
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.xl}px;
`;

const StyledTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.xxl};
`;

const StyledBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.xl};
`;

export type SidebarProps = {
    header?: React.ReactNode;
    top?: React.ReactNode;
    bottom?: React.ReactNode;
    hierarchy?: 'mid' | 'low';
};
export const Sidebar = (props: SidebarProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <StyledContainer hierarchy={hierarchy}>
            {props.header}
            <StyledContent>
                <StyledTopContainer>{props.top}</StyledTopContainer>
                <StyledBottomContainer>{props.bottom}</StyledBottomContainer>
            </StyledContent>
        </StyledContainer>
    );
};
