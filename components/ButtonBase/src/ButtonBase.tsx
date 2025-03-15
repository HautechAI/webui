import { styled } from '@hautechai/webui.themeprovider';
import { ComponentProps, PropsWithChildren } from 'react';

const StyledButton = styled.button<{ disabled?: boolean }>`
    all: unset;
    cursor: pointer;
    &:disabled {
        cursor: default;
    }

    display: inline-flex;
`;

export type ButtonBaseProps = PropsWithChildren<{
    className?: string;
    onClick?: ComponentProps<typeof StyledButton>['onClick'];
    disabled?: boolean;
}>;

export const ButtonBase = (props: ButtonBaseProps) => {
    return (
        <StyledButton
            {...props}
            className={[props.className, !props.disabled ? 'htch-webui-hoverable' : ''].join(' ')}
        />
    );
};
