import { Avatar } from '@hautechai/webui.avatar';
import { AvatarsProps } from './Avatars.types';
import S from './Avatars.styles';
import { Row } from '@hautechai/webui.row';

export const Avatars = (props: AvatarsProps) => {
    const avatars = props.images.slice(0, props.maxAmount);
    return (
        <Row>
            {avatars.length > 0 ? (
                avatars.map((image, index) => (
                    <S.AvatarContainer size={props.size ?? 40}>
                        <Avatar src={image} key={index} size={props.size} />
                    </S.AvatarContainer>
                ))
            ) : (
                <Avatar size={props.size} />
            )}
        </Row>
    );
};
