import { PreviewsProps } from './Previews.types';
import S from './Previews.styles';
import { Row } from '@hautechai/webui.row';

export const Previews = (props: PreviewsProps) => (
    <Row>
        {props.images.map((image, index) => (
            <S.PreviewContainer key={index}>
                <S.Preview src={image} />
            </S.PreviewContainer>
        ))}
    </Row>
);
