import { BadgeProps } from './Badge.types';
import S from './Badge.styles';

export const Badge = (props: BadgeProps) => {
    return (
        <S.Container badgeColor={props.color}>
            <S.Text badgeColor={props.color} variant="LabelSmallRegular">
                {props.label}
            </S.Text>
        </S.Container>
    );
};
