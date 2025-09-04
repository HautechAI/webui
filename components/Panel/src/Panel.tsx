import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const BaseContainer = (
    props: Pick<PanelProps, 'className' | 'children' | 'testId'> & { style?: React.CSSProperties },
) => {
    const { className, children, style, testId } = props;
    return <div {...{ className, children, style }} data-testid={testId} />;
};

const Container = styled(BaseContainer)<
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
    testId?: string;
};

export const Panel = (props: PanelProps) => {
    const { hierarchy = 'mid', testId, ...restProps } = props;
    return (
        <Container
            className={restProps.className}
            hierarchy={hierarchy}
            size={restProps.size ?? 'medium'}
            stretch={restProps.stretch}
            highlighted={restProps.highlighted}
            testId={testId}
        >
            {restProps.children}
        </Container>
    );
};
