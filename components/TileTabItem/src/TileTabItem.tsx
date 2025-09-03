import { ButtonBase } from '@hautechai/webui.buttonbase';
import { styled } from '@hautechai/webui.themeprovider';
import { Tile } from '@hautechai/webui.tile';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { useCallback } from 'react';

const StyledTileTabItem = styled(ButtonBase)`
    flex-direction: column;
    align-items: center;
    gap: ${themeVars.spacing.m};
    color: ${themeVars.layout.onSurface.secondary};
    &[data-selected='true'] {
        color: ${themeVars.actions.primary};
    }
    :hover {
        color: ${themeVars.actions.primary};
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
    testId?: string;
};

export const TileTabItem = (props: TileTabItemProps) => {
    const { icon, image, video, selected } = props;
    const clickHandler = useCallback(() => {
        props.onClick?.(props.value);
    }, [props.onClick, props.value]);

    const videoProps = video ? ({ src: video, component: 'video', autoPlay: true, loop: true } as const) : {};
    return (
        <StyledTileTabItem onClick={clickHandler} data-selected={!!selected} data-testid={props.testId || testId}>
            <Tile size="small" {...{ icon, src: image, selected }} {...videoProps} />
            <Typography variant="LabelSmallRegular">{props.label}</Typography>
        </StyledTileTabItem>
    );
};
