import { Column } from '@hautechai/webui.column';
import { DownloadIcon, MoreIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Row } from '@hautechai/webui.row';
import { Tile } from '@hautechai/webui.tile';
import { Typography } from '@hautechai/webui.typography';
import { ButtonBase } from '../../ButtonBase/src';

export type CardProps = {
    label: string;
    image: string;
    aspectRatio?: number;
    width?: number;
    height?: number;
    onDownload?: () => void;
    onClick?: () => void;
};

export const Card = (props: CardProps) => {
    return (
        <Column spacing="s">
            <ButtonBase disabled={!props.onClick} onClick={props.onClick}>
                <Tile width={props.width} height={props.height} image={props.image} aspectRatio={props.aspectRatio} />
            </ButtonBase>
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
