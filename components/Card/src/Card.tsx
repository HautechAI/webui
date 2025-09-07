import { ButtonBase } from '@hautechai/webui.buttonbase';
import { Column } from '@hautechai/webui.column';
import { DownloadIcon, MoreIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Row } from '@hautechai/webui.row';
import { Tile, TileProps } from '@hautechai/webui.tile';
import { Typography } from '@hautechai/webui.typography';
import { Fragment } from 'react';

export type CardProps = {
    label: string;
    image: string;
    icon?: React.ReactNode;
    aspectRatio?: number;
    width?: number | string;
    height?: number | string;
    fullWidth?: boolean;
    onDownload?: () => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    href?: string;
    tileComponent?: TileProps['component'];
    testId?: string;
};

export const Card = (props: CardProps) => {
    const ActionWrapper = props.href ? 'a' : props.onClick ? ButtonBase : Fragment;
    return (
        <Column spacing="s" stretch={props.fullWidth} testId={props.testId}>
            <ActionWrapper onClick={props.onClick} href={props.href}>
                <Tile
                    width={props.fullWidth ? '100%' : props.width}
                    height={props.height}
                    src={props.image}
                    icon={props.icon}
                    aspectRatio={props.aspectRatio}
                    component={props.tileComponent}
                />
            </ActionWrapper>
            <Row align="center">
                <Typography variant="LabelSmallRegular" color="layout.onSurface.secondary">
                    {props.label}
                </Typography>
                <Column stretch></Column>
                <Row spacing="s">
                    <IconButton icon={<MoreIcon size={20} />} size="small" variant="flat" />
                    <IconButton
                        icon={<DownloadIcon size={20} />}
                        size="small"
                        variant="flat"
                        onClick={props.onDownload}
                    />
                </Row>
            </Row>
        </Column>
    );
};
