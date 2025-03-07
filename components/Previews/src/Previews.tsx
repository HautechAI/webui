import { PreviewsProps } from './Previews.types';
import S from './Previews.styles';
import { Row } from '@hautechai/webui.row';

export const Previews = (props: PreviewsProps) => (
    <Row>
        {props.images.map((image, index) => (
            <S.PreviewContainer>
                <S.Preview src={image} key={index} />
            </S.PreviewContainer>
        ))}
    </Row>
);
