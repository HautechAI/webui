import React, { ReactNode } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

export type AvatarProps = {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    gradient?: [string, string];
};

const Container = styled('div')<{ $size: 'small' | 'medium' | 'large'; $gradient?: [string, string] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $size }) => ($size === 'small' ? '24px' : $size === 'large' ? '60px' : '40px')};
    height: ${({ $size }) => ($size === 'small' ? '24px' : $size === 'large' ? '60px' : '40px')};
    border-radius: 50%;
    background: ${({ $gradient }) =>
        $gradient ? `linear-gradient(180deg, ${$gradient[0]} 0%, ${$gradient[1]} 100%)` : themeVars.actions.primary};
    color: ${themeVars.actions.onPrimary};
    text-overflow: ellipsis;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-size: cover;
`;

export const Avatar = (props: AvatarProps) => {
    const { size = 'medium', gradient, src, icon, initials } = props;

    // Dynamic icon size based on Avatar size
    const iconSize = size === 'small' ? 12 : size === 'large' ? 30 : 20;

    // Dynamic typography variant based on Avatar size
    const typographyVariant = size === 'small' ? 'CaptionEmphasized' : size === 'large' ? 'H1' : 'H2';

    return (
        <Container $size={size} $gradient={gradient}>
            {src ? (
                <Image style={{ backgroundImage: `url(${src})` }} />
            ) : (
                React.Children.map(icon, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            size: iconSize,
                        } as Partial<{ size: number }>);
                    }
                    return child;
                }) || <Typography variant={typographyVariant}>{initials}</Typography>
            )}
        </Container>
    );
};
