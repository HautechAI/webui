import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { ThemeType } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const BaseComponent = (props: Pick<ColumnProps, 'className' | 'children'>) => {
    const { className, children } = props;
    return <div {...{ className, children }} />;
};

const Container = styled(BaseComponent)<
    Pick<ColumnProps, 'align' | 'spacing' | 'stretch' | 'overflow' | 'overflowX' | 'overflowY'>
>`
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

     ${({ overflow }) =>
        overflow
            ? css`
                  overflow: ${overflow};
              `
            : ''}
    ${({ overflowX }) =>
        overflowX
            ? css`
                  overflow-x: ${overflowX};
              `
            : ''}
    ${({ overflowY }) =>
        overflowY
            ? css`
                  overflow-y: ${overflowY};
              `
            : ''};
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
}>;

export const Column = (props: ColumnProps) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};
