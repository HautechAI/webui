import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const Container = styled.div<Pick<ColumnProps, 'align' | 'spacing'>>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}
`;

type Align = 'start' | 'center' | 'end' | 'stretch';

export type ColumnProps = PropsWithChildren<{
    className?: string;
    spacing?: keyof ThemeType['foundation']['spacing'];
    align?: Align;
}>;

export const Column = (props: ColumnProps) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};
