import { Checkbox } from '@hautechai/webui.checkbox';
import { styled } from '@hautechai/webui.themeprovider';
import React, { PropsWithChildren, useCallback } from 'react';

const StyledHoverControls = styled.div`
    cursor: pointer;
    position: relative;
`;

const ControlsContainer = styled.div`
    position: absolute;
    padding: 12px;
`;

const CheckboxWrapper = styled.div`
    position: absolute;
    display: none;

    &[data-selected='true'] {
        display: block;
    }

    .htch-webui-hoverable:hover &:not([data-hover-disabled='true']) {
        display: block;
    }
`;

export type HoverControlsProps = PropsWithChildren<{
    selected?: boolean;
    onChangeSelected?: (selected: boolean) => void;
    hoverDisabled?: boolean;
}>;

export const HoverControls = (props: HoverControlsProps) => {
    const { children, onChangeSelected, selected, hoverDisabled } = props;
    const handleClick = useCallback(() => {
        onChangeSelected?.(!selected);
    }, [onChangeSelected, selected]);

    return (
        <StyledHoverControls className="htch-webui-hoverable" onClick={handleClick}>
            <ControlsContainer>
                <CheckboxWrapper data-selected={!!selected} data-hover-disabled={!!hoverDisabled}>
                    <Checkbox checked={!!selected} readOnly />
                </CheckboxWrapper>
            </ControlsContainer>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        selected,
                    } as any);
                }
                return child;
            })}
        </StyledHoverControls>
    );
};
