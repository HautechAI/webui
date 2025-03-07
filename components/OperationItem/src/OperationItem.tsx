import { Avatars } from '@hautechai/webui.avatars';
import { Badge } from '@hautechai/webui.badge';
import { OperationItemProps } from './OperationItem.types';
import S from './OperationItem.styles';
import { Row } from '@hautechai/webui.row';
import { Typography } from '@hautechai/webui.typography';

export const OperationItem = (props: OperationItemProps) => {
    return (
        <S.Container>
            <Row align="center" justify="space-between" spacing="s">
                <Row align="center" spacing="s">
                    {props.unread && <S.UnreadIndicator />}
                    <Typography color="layout.onSurface.secondary" variant="LabelMediumRegular">
                        {props.title}
                    </Typography>
                </Row>
                <Avatars {...props.avatars} />
                <Badge {...props.badge} />
            </Row>
            <Typography color="layout.onSurface.tertiary" variant="LabelSmallRegular">
                {props.date}
            </Typography>
        </S.Container>
    );
};
