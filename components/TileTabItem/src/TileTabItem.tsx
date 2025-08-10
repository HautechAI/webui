import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@linaria/react';
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
    video?: string;
    selected?: boolean;
    value: string;
    onClick?: (value: string) => void;
};

export const TileTabItem = (props: TileTabItemProps) => {
    const { icon, image, video, selected } = props;
    const clickHandler = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick, props.value]);

    const videoProps = video ? { src: video, component: 'video', autoPlay: true, loop: true } as const : {};
    return (
        <StyledTileTabItem onClick={clickHandler}>
            <Tile size="small" {...{ icon, src: image, selected }} {...videoProps} />
            <Typography variant="LabelSmallRegular">{props.label}</Typography>
        </StyledTileTabItem>
    );
};
