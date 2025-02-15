import { styled } from '@hautechai/webui.themeprovider';

export type AvatarProps = {
    src?: string;
};

export const Avatar = styled.div<AvatarProps>`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.layout.strokes};
    background-image: ${({ src }) => src && `url(${src})`};
    background-size: cover;
`;
