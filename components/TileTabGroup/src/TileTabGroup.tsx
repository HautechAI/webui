import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

import React, { PropsWithChildren } from 'react';

const StyledTileTabGroup = styled.div<{ $wrap?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
    gap: ${themeVars.spacing.ml};
`;

export type TileTabGroupProps = PropsWithChildren<{
    selected?: string;
    onSelect?: (value: string) => void;
    wrap?: boolean;
    testId?: string;
}>;

export const TileTabGroup = (props: TileTabGroupProps) => {
    return (
        <StyledTileTabGroup $wrap={props.wrap} data-testid={props.testId || testId}>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)) {
                    const value = (child.props as { value?: string })['value'] as string;
                    return React.cloneElement(child, {
                        onClick: () => props?.onSelect?.(value),
                        selected: value === props.selected,
                    } as Partial<{ onClick: () => void; selected: boolean }>);
                }
                return child;
            })}
        </StyledTileTabGroup>
    );
};
