import { styled } from '@linaria/react';
import { themeVars, ThemeType } from '@hautechai/webui.themeprovider';

const BaseComponent = (props: Pick<RowProps, 'className' | 'children'> & { style?: React.CSSProperties }) => {
    const { className, children, style } = props;
    return <div {...{ className, children, style }} />;
};

const Container = styled(BaseComponent)`
    display: flex;
`;

type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export type RowProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
    reverse?: boolean;
    stretch?: boolean;
    align?: Align;
    justify?: Justify;
    fullHeight?: boolean;
    noOverflow?: boolean;
};

export const Row = (props: RowProps) => {
    const { children, wrap, reverse, spacing, stretch, align, justify, fullHeight, noOverflow, ...rest } = props;
    const style: React.CSSProperties = {
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : undefined,
        flex: stretch ? 1 : undefined,
        height: fullHeight ? '100%' : undefined,
        overflow: noOverflow ? 'hidden' : undefined,
        gap: spacing ? themeVars.spacing[spacing] : 0,
    };
    return (
        <Container style={style} {...rest}>
            {children}
        </Container>
    );
};
