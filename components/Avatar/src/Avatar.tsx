import { styled } from '@hautechai/webui.themeprovider';

export type AvatarProps = {
    src?: string;
    size?: number;
};

export const Avatar = styled.div<AvatarProps>`
    display: flex;
    width: ${({ size }) => size ?? 40}px;
    height: ${({ size }) => size ?? 40}px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.layout.strokes};
    background-image: ${({ src }) => src && `url(${src})`};
    background-size: cover;
`;
