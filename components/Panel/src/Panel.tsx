import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div<
    Required<Pick<PanelProps, 'hierarchy' | 'size'>> & Pick<PanelProps, 'stretch' | 'highlighted'>
>`
    display: flex;
    padding: ${({ size }) =>
        ({
            small: themeVars.spacing.ml,
            medium: themeVars.spacing.l,
        })[size]};

    background-color: ${({ hierarchy }) =>
        ({
            low: themeVars.layout.surfaceLow,
            mid: themeVars.layout.surfaceMid,
            high: themeVars.layout.surfaceHigh,
        })[hierarchy]};

    border-radius: ${({ size }) =>
        ({
            small: themeVars.cornerRadius.m,
            medium: themeVars.cornerRadius.l,
        })[size]};

    border-style: solid;
    border-width: ${({ hierarchy }) => {
        return {
            low: themeVars.stroke.thin,
            mid: '0px',
            high: themeVars.stroke.thin,
        }[hierarchy];
    }};

    box-shadow: ${({ highlighted }) => {
        if (highlighted) return `0 0 0 2px ${themeVars.layout.onSurface.primary}`;
        return `0 0 0 0px clear`;
    }};

    border-color: ${({ hierarchy, highlighted }) => {
        if (!highlighted)
            return {
                low: themeVars.layout.strokes,
                mid: 'transparent',
                high: themeVars.layout.strokes,
            }[hierarchy];

        return themeVars.layout.onSurface.primary;
    }};
    width: ${({ stretch }) => (stretch ? '100%' : 'auto')};
`;

export type PanelProps = {
    className?: string;
    children?: React.ReactNode;
    hierarchy?: 'mid' | 'low' | 'high';
    size?: 'small' | 'medium';
    stretch?: boolean;
    highlighted?: boolean;
};

export const Panel = (props: PanelProps) => {
    const { hierarchy = 'mid' } = props;
    return (
        <Container
            className={props.className}
            hierarchy={hierarchy}
            size={props.size ?? 'medium'}
            stretch={props.stretch}
            highlighted={props.highlighted}
        >
            {props.children}
        </Container>
    );
};
