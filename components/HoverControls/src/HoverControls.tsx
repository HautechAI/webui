import { Checkbox } from '@hautechai/webui.checkbox';
import { styled } from '@hautechai/webui.themeprovider';
import React, { PropsWithChildren, useCallback } from 'react';

const StyledHoverControls = styled.div<HoverControlsProps>`
    cursor: pointer;
`;

const ControlsContainer = styled.div`
    position: absolute;
    padding: 12px;
`;

const StyledCheckbox = styled(Checkbox)`
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    *:hover > * > & {
        display: block;
    }
`;

export type HoverControlsProps = PropsWithChildren<{
    selected?: boolean;
    onChangeSelected?: (selected: boolean) => void;
}>;

export const HoverControls = (props: HoverControlsProps) => {
    const { children, onChangeSelected, ...rest } = props;
    const handleClick = useCallback(() => {
        onChangeSelected?.(!props.selected);
    }, [onChangeSelected, props.selected]);

    return (
        <StyledHoverControls className="htch-webui-hoverable" onClick={handleClick} {...rest}>
            <ControlsContainer>
                <StyledCheckbox checked={!!props.selected} />
            </ControlsContainer>
            {React.Children.map(props.children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        selected: props.selected,
                    } as any);
                }
                return child;
            })}
        </StyledHoverControls>
    );
};
