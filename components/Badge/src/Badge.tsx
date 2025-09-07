import { BadgeProps } from './Badge.types';
import S from './Badge.styles';
import { Typography } from '@hautechai/webui.typography';

export const Badge = (props: BadgeProps) => {
    const textColor =
        props.color === 'success'
            ? 'actions.success'
            : props.color === 'error'
              ? 'actions.error'
              : 'layout.onSurface.secondary';
    return (
        <S.Container data-color={props.color} data-testid={props.testId}>
            <Typography color={textColor} variant="LabelSmallRegular">
                {props.label}
            </Typography>
        </S.Container>
    );
};
