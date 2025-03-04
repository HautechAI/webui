import { Column } from '@hautechai/webui.column';
import { Download, More } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Row } from '@hautechai/webui.row';
import { Tile } from '@hautechai/webui.tile';
import { Typography } from '@hautechai/webui.typography';

export type CardProps = {
    label: string;
    image: string;
    aspectRatio?: number;
    width?: number;
    height?: number;
    onDownload?: () => void;
};

export const Card = (props: CardProps) => {
    return (
        <Column spacing="s">
            <Tile width={props.width} height={props.height} image={props.image} aspectRatio={props.aspectRatio} />
            <Row align="center">
                <Typography variant="LabelSmallRegular" color="layout.onSurface.secondary">
                    {props.label}
                </Typography>
                <Column stretch></Column>
                <Row spacing="s">
                    <IconButton icon={<More size={20} />} size="small" variant="flat" />
                    <IconButton icon={<Download size={20} />} size="small" variant="flat" onClick={props.onDownload} />
                </Row>
            </Row>
        </Column>
    );
};
