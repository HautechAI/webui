import React, { ReactNode } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export type AvatarProps =
    | { src: string; initials?: never; icon?: never }
    | { initials: string; src?: never; icon?: never }
    | { icon: ReactNode; src?: never; initials?: never };

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.actions.primary};
    color: ${({ theme }) => theme.palette.actions.onPrimary};
    text-overflow: ellipsis;
`;

const AvatarImage = styled.div<{ src?: string }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-image: ${({ src }) => src && `url(${src})`};
    background-size: cover;
`;

export const Avatar = (props: AvatarProps) => {
    return (
        <AvatarContainer>
            {props.src ? (
                <AvatarImage src={props.src} />
            ) : (
                React.Children.map(props.icon, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            size: 20,
                        } as any);
                    }
                    return child;
                }) || <Typography variant="H1">{props.initials}</Typography>
            )}
        </AvatarContainer>
    );
};
