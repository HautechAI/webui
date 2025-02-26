import { styled } from '@hautechai/webui.themeprovider';
import { ComponentProps, PropsWithChildren } from 'react';

const StyledButton = styled.button`
    all: unset;
    cursor: pointer;

    display: inline-flex;
`;

export type ButtonBaseProps = PropsWithChildren<{
    className?: string;
    onClick?: ComponentProps<typeof StyledButton>['onClick'];
}>;

export const ButtonBase = (props: ButtonBaseProps) => {
    return <StyledButton {...props} className={[props.className, 'htch-webui-hoverable'].join(' ')} />;
};
