import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const BaseComponent = (props: Pick<ColumnProps, 'className' | 'children'>) => {
    const { className, children } = props;
    return <div {...{ className, children }} />;
};

const Container = styled(BaseComponent)<Pick<ColumnProps, 'align' | 'spacing' | 'stretch'>>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}
    ${({ stretch }) =>
        stretch &&
        css`
            flex: 1;
        `}
`;

type Align = 'start' | 'center' | 'end' | 'stretch';

export type ColumnProps = PropsWithChildren<{
    className?: string;
    spacing?: keyof ThemeType['foundation']['spacing'];
    align?: Align;
    stretch?: boolean;
}>;

export const Column = (props: ColumnProps) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};
