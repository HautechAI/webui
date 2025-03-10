import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Required<Pick<PanelProps, 'hierarchy' | 'size'>>>`
    display: flex;
    padding: ${({ theme, size }) =>
        ({
            small: theme.foundation.spacing.ml,
            medium: theme.foundation.spacing.l,
        }[size])}px;

    background-color: ${({ theme, hierarchy }) =>
        ({
            low: theme.palette.layout.surfaceLow,
            mid: theme.palette.layout.surfaceMid,
            high: theme.palette.layout.surfaceHigh,
        }[hierarchy])};

    border-radius: ${({ theme, size }) =>
        ({
            small: theme.foundation.cornerRadius.m,
            medium: theme.foundation.cornerRadius.l,
        }[size])}px;

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
    size?: 'small' | 'medium';
};

export const Panel = (props: PanelProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container className={props.className} hierarchy={hierarchy} size={props.size ?? 'medium'}>
            {props.children}
        </Container>
    );
};
