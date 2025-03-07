import { css, styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<
    Pick<DataListProps, 'spacing' | 'stretch' | 'align' | 'justify' | 'fullHeight' | 'noOverflow'> & { $wrap?: boolean }
>`
    display: flex;
    flex-direction: row;
    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}
    ${({ justify }) =>
        justify &&
        css`
            justify-content: ${justify};
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
    ${({ fullHeight }) =>
        fullHeight &&
        css`
            height: 100%;
        `}
    ${({ noOverflow }) =>
        noOverflow &&
        css`
            overflow: hidden;
        `}
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
`;

type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
    stretch?: boolean;
    align?: Align;
    justify?: Justify;
    fullHeight?: boolean;
    noOverflow?: boolean;
};

export const Row = (props: DataListProps) => {
    const { children, wrap, ...rest } = props;
    return (
        <Container $wrap={wrap} {...rest}>
            {children}
        </Container>
    );
};
