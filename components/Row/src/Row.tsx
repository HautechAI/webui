import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<Pick<DataListProps, 'spacing' | 'stretch' | 'align'> & { $wrap?: boolean }>`
    display: flex;
    flex-direction: row;
    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}
    ${({ $wrap }) =>
        $wrap &&
        css`
            flex-wrap: wrap;
        `}
    ${({ stretch }) =>
        stretch &&
        css`
            flex: 1;
        `}
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
`;

type Align = 'start' | 'center' | 'end' | 'stretch';

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
    stretch?: boolean;
    align?: Align;
};

export const Row = (props: DataListProps) => {
    const { children, wrap, ...rest } = props;
    return (
        <Container $wrap={wrap} {...rest}>
            {children}
        </Container>
    );
};
