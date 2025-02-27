import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<Pick<DataListProps, 'spacing' | 'wrap'>>`
    display: flex;
    flex-direction: row;
    ${({ wrap }) =>
        wrap &&
        css`
            flex-wrap: wrap;
        `}
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
`;

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
};

export const Row = (props: DataListProps) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};
