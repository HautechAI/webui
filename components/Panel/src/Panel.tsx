import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Required<Pick<PanelProps, 'hierarchy'>>>`
    display: flex;
    padding: ${({ theme }) => theme.foundation.spacing.l}px;
    background-color: ${({ theme, hierarchy }) =>
        ({
            mid: theme.palette.layout.surfaceMid,
            low: theme.palette.layout.surfaceLow,
        }[hierarchy])};

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;

    border-style: solid;
    border-width: ${({ theme, hierarchy }) =>
        ({
            mid: 0,
            low: theme.foundation.stroke.thin,
        }[hierarchy])}px;
    border-color: ${({ theme, hierarchy }) =>
        ({
            mid: 0,
            low: theme.palette.layout.strokes,
        }[hierarchy])};
`;

export type PanelProps = {
    className?: string;
    children?: React.ReactNode;
    hierarchy?: 'mid' | 'low';
};

export const Panel = (props: PanelProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container className={props.className} hierarchy={hierarchy}>
            {props.children}
        </Container>
    );
};
