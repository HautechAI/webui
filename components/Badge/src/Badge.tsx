import { BadgeProps } from './Badge.types';
import S, { containerClasses, textClasses } from './Badge.styles';

export const Badge = (props: BadgeProps) => {
    return (
        <S.Container className={`${containerClasses.base} ${containerClasses[props.color]}`}>
            <S.Text className={`${textClasses.base} ${textClasses[props.color]}`} variant="LabelSmallRegular">
                {props.label}
            </S.Text>
        </S.Container>
    );
};
