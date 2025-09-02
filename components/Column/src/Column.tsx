import { styled } from '@hautechai/webui.themeprovider';
import { themeVars, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const BaseComponent = (
    props: Pick<ColumnProps, 'className' | 'children' | 'testId'> & { style?: React.CSSProperties },
) => {
    const { className, children, style, testId } = props;
    return <div {...{ className, children, style }} data-testid={testId} />;
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
    testId?: string;
}>;

export const Column = (props: ColumnProps) => {
    const { children, spacing, align, stretch, overflow, overflowX, overflowY, testId, ...rest } = props;
    const style: React.CSSProperties = {
        gap: spacing ? themeVars.spacing[spacing] : 0,
        alignItems: align,
        flex: stretch ? 1 : undefined,
        ...(overflow ? { overflow } : {}),
        ...(overflowX ? { overflowX } : {}),
        ...(overflowY ? { overflowY } : {}),
    };
    return (
        <Container style={style} testId={testId} {...rest}>
            {children}
        </Container>
    );
};
