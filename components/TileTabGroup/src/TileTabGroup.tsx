import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { Tile, TileProps } from '@hautechai/webui.tile';

import { Typography } from '@hautechai/webui.typography';
import React, { PropsWithChildren, useCallback } from 'react';

const StyledTileTabGroup = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
`;

export type TileTabGroupProps = PropsWithChildren<{
    selected?: string;
    onSelect?: (value: string) => void;
}>;

export const TileTabGroup = (props: TileTabGroupProps) => {
    return (
        <StyledTileTabGroup>
            {React.Children.map(props.children, (child) => {
                console.log({ child });
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
