import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<Pick<DataListProps, 'spacing' | 'wrap' | 'stretch'>>`
    display: flex;
    flex-direction: row;
    ${({ wrap }) =>
        wrap &&
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
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};
