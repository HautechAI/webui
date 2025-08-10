import { styled } from '@linaria/react';

const Container = styled.div<Required<Pick<AppBarMobileProps, 'hierarchy'>>>`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
    padding: ${({ theme }) => theme.foundation.spacing.l}px;

    background-color: ${({ theme, hierarchy }) =>
        ({
            low: theme.palette.layout.surfaceLow,
            mid: theme.palette.layout.surfaceMid,
        }[hierarchy])};

    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.palette.layout.strokes};
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.l}px;
`;

export type AppBarMobileProps = {
    hierarchy?: 'mid' | 'low';
    top?: React.ReactNode;
    center?: React.ReactNode;
    bottom?: React.ReactNode;
};
export const AppBarMobile = (props: AppBarMobileProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container hierarchy={hierarchy}>
            <RowContainer>{props.top}</RowContainer>
            <RowContainer>{props.center}</RowContainer>
            <RowContainer>{props.bottom}</RowContainer>
        </Container>
    );
};
