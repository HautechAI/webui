import { ChipProps } from './Chip.types';
import S from './Chip.styles';
import { Row } from '@hautechai/webui.row';

export const Chip = (props: ChipProps) => {
    return (
        <S.Container>
            <Row align="center" spacing="s">
                {props.icon && <S.Icon>{props.icon}</S.Icon>}
                {props.image && <S.Image src={props.image} />}
                <S.Text color="layout.onSurface.primary" variant="LabelSmallRegular">
                    {props.label}
                </S.Text>
            </Row>
        </S.Container>
    );
};
