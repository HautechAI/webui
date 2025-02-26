import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { Tile, TileProps } from '@hautechai/webui.tile';

import { Typography } from '@hautechai/webui.typography';
import { useCallback } from 'react';

const StyledTileTabItem = styled(ButtonBase)<Pick<TileTabItemProps, 'selected'>>`
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;

    color: ${({ theme, selected }) =>
        selected ? theme.palette.actions.primary : theme.palette.layout.onSurface.secondary};

    :hover {
        color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

export type TileTabItemProps = {
    label?: string;
    icon?: React.ReactNode;
    image?: string;
    selected?: boolean;
    value: string;
    onClick?: (value: string) => void;
};

export const TileTabItem = (props: TileTabItemProps) => {
    const { icon, image, selected } = props;
    const clickHandler = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick, props.value]);

    return (
        <StyledTileTabItem onClick={clickHandler}>
            <Tile size="small" {...{ icon, image, selected }} />
            <Typography variant="LabelSmallRegular">{props.label}</Typography>
        </StyledTileTabItem>
    );
};
