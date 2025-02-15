import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<AppBarProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.xl}px;

    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.layout.strokes};
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: ${({ theme }) => theme.foundation.spacing.l};
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.foundation.spacing.l};
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: end;
    gap: ${({ theme }) => theme.foundation.spacing.l};
`;

export type AppBarProps = {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};
export const AppBar = (props: AppBarProps) => {
    return (
        <Container>
            <LeftContainer>{props.left}</LeftContainer>
            <CenterContainer>{props.center}</CenterContainer>
            <RightContainer>{props.right}</RightContainer>
        </Container>
    );
};
