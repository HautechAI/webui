import React, { ReactNode } from 'react';
import { css } from '@linaria/core';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export type AvatarProps = { src?: string; initials?: string; icon?: ReactNode };

const avatarContainerStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${themeVars.actions.primary};
    color: ${themeVars.actions.onPrimary};
    text-overflow: ellipsis;
`;

const avatarImageStyles = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-size: cover;
`;

export const Avatar = (props: AvatarProps) => {
    return (
        <div className={avatarContainerStyles}>
            {props.src ? (
                <div 
                    className={avatarImageStyles}
                    style={{ backgroundImage: `url(${props.src})` }}
                />
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
        </div>
    );
};
