import { styled } from '@hautechai/webui.themeprovider';
import { PropsWithChildren } from 'react';

const StyledButtonBase = styled('button')`
    all: unset;
    cursor: pointer;
    display: inline-flex;

    &:disabled {
        cursor: default;
    }

    &[data-stretch='true'] {
        flex-grow: 1;
    }
`;

export type ButtonBaseProps = PropsWithChildren<{
    id?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    stretch?: boolean;
    style?: React.CSSProperties;
}>;

export const ButtonBase = (props: ButtonBaseProps) => {
    const { stretch, className, disabled, style, ...rest } = props;

    const buttonClassName = [className, !disabled ? 'htch-webui-hoverable' : ''].filter(Boolean).join(' ');

    return (
        <StyledButtonBase
            {...rest}
            className={buttonClassName}
            disabled={disabled}
            data-stretch={stretch ? 'true' : undefined}
            style={style}
        />
    );
};
