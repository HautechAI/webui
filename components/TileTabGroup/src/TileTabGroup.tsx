import { styled } from '@linaria/react';

import React, { PropsWithChildren } from 'react';

const StyledTileTabGroup = styled.div<{ $wrap?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
`;

export type TileTabGroupProps = PropsWithChildren<{
    selected?: string;
    onSelect?: (value: string) => void;
    wrap?: boolean;
}>;

export const TileTabGroup = (props: TileTabGroupProps) => {
    return (
        <StyledTileTabGroup $wrap={props.wrap}>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)) {
                    const value = (child.props as any)['value'] as string;
                    return React.cloneElement(child, {
                        onClick: () => props?.onSelect?.(value),
                        selected: value === props.selected,
                    } as any);
                }
                return child;
            })}
        </StyledTileTabGroup>
    );
};
