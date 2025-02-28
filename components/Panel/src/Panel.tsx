import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Required<Pick<PanelProps, 'hierarchy'>>>`
    display: flex;
    padding: ${({ theme }) => theme.foundation.spacing.l}px;
    background-color: ${({ theme, hierarchy }) =>
        ({
            low: theme.palette.layout.surfaceLow,
            mid: theme.palette.layout.surfaceMid,
            high: theme.palette.layout.surfaceHigh,
        }[hierarchy])};

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;

    border-style: solid;
    border-width: ${({ theme, hierarchy }) =>
        ({
            low: theme.foundation.stroke.thin,
            mid: 0,
            high: theme.foundation.stroke.thin,
        }[hierarchy])}px;
    border-color: ${({ theme, hierarchy }) =>
        ({
            low: theme.palette.layout.strokes,
            mid: 0,
            high: theme.palette.layout.strokes,
        }[hierarchy])};
`;

export type PanelProps = {
    className?: string;
    children?: React.ReactNode;
    hierarchy?: 'mid' | 'low' | 'high';
};

export const Panel = (props: PanelProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container className={props.className} hierarchy={hierarchy}>
            {props.children}
        </Container>
    );
};
