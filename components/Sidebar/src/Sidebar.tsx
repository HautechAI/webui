import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<SidebarProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.xl}px;

    border-right-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.palette.layout.strokes};
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.xxl};
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.xl};
`;

export type SidebarProps = {
    top?: React.ReactNode;
    bottom?: React.ReactNode;
};
export const Sidebar = (props: SidebarProps) => {
    return (
        <Container>
            <TopContainer>{props.top}</TopContainer>
            <BottomContainer>{props.bottom}</BottomContainer>
        </Container>
    );
};
