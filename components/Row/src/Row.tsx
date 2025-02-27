import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<Pick<DataListProps, 'spacing' | 'stretch'> & { $wrap?: boolean }>`
    display: flex;
    flex-direction: row;
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

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
    stretch?: boolean;
};

export const Row = (props: DataListProps) => {
    const { children, wrap, ...rest } = props;
    return (
        <Container $wrap={wrap} {...rest}>
            {children}
        </Container>
    );
};
