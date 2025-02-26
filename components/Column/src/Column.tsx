import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const Container = styled.div<Pick<ColumnProps, 'align'> & Required<Pick<ColumnProps, 'spacing'>>>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, spacing }) => theme.foundation.spacing[spacing]}px;
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
    const { spacing = 'm', children, ...rest } = props;
    return (
        <Container spacing={spacing} {...rest}>
            {children}
        </Container>
    );
};
