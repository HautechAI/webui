import { css } from '@linaria/core';
import { themeVars } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const baseButtonStyles = css`
    all: unset;
    cursor: pointer;
    display: inline-flex;
    
    &:disabled {
        cursor: default;
    }
`;

const stretchStyles = css`
    flex-grow: 1;
`;

export type ButtonBaseProps = PropsWithChildren<{
    id?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    stretch?: boolean;
}>;

export const ButtonBase = (props: ButtonBaseProps) => {
    const { stretch, className, disabled, ...rest } = props;
    
    const buttonClassName = [
        baseButtonStyles,
        stretch && stretchStyles,
        className,
        !disabled ? 'htch-webui-hoverable' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            {...rest}
            className={buttonClassName}
            disabled={disabled}
        />
    );
};
