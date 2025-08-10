import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { ThemeType } from '@hautechai/webui.themeprovider';

const BaseComponent = (props: Pick<RowProps, 'className' | 'children'>) => {
    const { className, children } = props;
    return <div {...{ className, children }} />;
};

const Container = styled(BaseComponent)<
    Pick<RowProps, 'spacing' | 'stretch' | 'align' | 'justify' | 'fullHeight' | 'noOverflow'> & {
        $wrap?: boolean;
        reverse?: boolean;
    }
>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
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

export type RowProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
    wrap?: boolean;
    reverse?: boolean;
    stretch?: boolean;
    align?: Align;
    justify?: Justify;
    fullHeight?: boolean;
    noOverflow?: boolean;
};

export const Row = (props: RowProps) => {
    const { children, wrap, ...rest } = props;
    return (
        <Container $wrap={wrap} {...rest}>
            {children}
        </Container>
    );
};
