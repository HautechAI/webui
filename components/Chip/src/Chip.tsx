import { ChipProps } from './Chip.types';
import S from './Chip.styles';
import { Row } from '@hautechai/webui.row';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export const Chip = (props: ChipProps) => {
    return (
        <S.Container>
            <Row align="center" spacing="s">
                <S.Image src={props.image} />
                <Typography color="layout.onSurface.primary" variant="LabelSmallRegular">
                    {props.label}
                </Typography>
            </Row>
        </S.Container>
    );
};
