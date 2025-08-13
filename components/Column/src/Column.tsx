import { styled } from '@linaria/react';
import { themeVars, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const BaseComponent = (props: Pick<ColumnProps, 'className' | 'children'> & { style?: React.CSSProperties }) => {
    const { className, children, style } = props;
    return <div {...{ className, children, style }} />;
};

const Container = styled(BaseComponent)`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

type Align = 'start' | 'center' | 'end' | 'stretch';

export type ColumnProps = PropsWithChildren<{
    className?: string;
    spacing?: keyof ThemeType['foundation']['spacing'];
    align?: Align;
    stretch?: boolean;
    overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowX?: 'hidden' | 'visible' | 'scroll' | 'auto';
    overflowY?: 'hidden' | 'visible' | 'scroll' | 'auto';
}>;

export const Column = (props: ColumnProps) => {
    const { children, spacing, align, stretch, overflow, overflowX, overflowY, ...rest } = props;
    const style: React.CSSProperties = {
        gap: spacing ? (themeVars.spacing as any)[spacing] : 0,
        alignItems: align as any,
        flex: stretch ? 1 : undefined,
        overflow,
        overflowX,
        overflowY,
    };
    return (
        <Container style={style} {...rest}>
            {children}
        </Container>
    );
};
