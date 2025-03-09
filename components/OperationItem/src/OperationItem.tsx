import { Previews } from '@hautechai/webui.previews';
import { Badge } from '@hautechai/webui.badge';
import { Chip } from '@hautechai/webui.chip';
import { OperationItemProps } from './OperationItem.types';
import S from './OperationItem.styles';
import { Row } from '@hautechai/webui.row';
import { Typography } from '@hautechai/webui.typography';

export const OperationItem = (props: OperationItemProps) => {
    return (
        <S.Container>
            <S.TopContainer>
                <Row align="center" justify="space-between" spacing="s">
                    <Row align="center" spacing="s">
                        {props.unread && <S.UnreadIndicator />}
                        <Typography color="layout.onSurface.secondary" variant="LabelMediumRegular">
                            {props.title}
                        </Typography>
                    </Row>
                    <Previews {...props.previews} images={props.previews.images.slice(0, 4)} />
                    <Badge {...props.badge} />
                </Row>
                <Typography color="layout.onSurface.tertiary" variant="LabelSmallRegular">
                    {props.date}
                </Typography>
            </S.TopContainer>
            {props.chips && (
                <Row spacing="m" wrap>
                    {props.chips.map((chip, i) => (
                        <Chip key={i} {...chip} maxWidth={100} />
                    ))}
                </Row>
            )}
        </S.Container>
    );
};
