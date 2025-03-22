import { css, styled } from '@hautechai/webui.themeprovider';
import { ComponentProps, PropsWithChildren } from 'react';

const StyledButton = styled.button<Pick<ButtonBaseProps, 'stretch' | 'disabled'>>`
    all: unset;
    cursor: pointer;
    &:disabled {
        cursor: default;
    }

    display: inline-flex;

    ${({ stretch }) =>
        stretch &&
        css`
            flex-grow: 1;
        `}
`;

export type ButtonBaseProps = PropsWithChildren<{
    className?: string;
    onClick?: ComponentProps<typeof StyledButton>['onClick'];
    disabled?: boolean;
    stretch?: boolean;
}>;

export const ButtonBase = (props: ButtonBaseProps) => {
    return (
        <StyledButton
            {...props}
            className={[props.className, !props.disabled ? 'htch-webui-hoverable' : ''].join(' ')}
        />
    );
};
