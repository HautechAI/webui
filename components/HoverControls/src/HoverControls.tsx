import { Checkbox } from '@hautechai/webui.checkbox';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { PropsWithChildren, useCallback } from 'react';

const StyledHoverControls = styled.div<HoverControlsProps>`
    cursor: pointer;
    position: relative;
`;

const ControlsContainer = styled.div`
    position: absolute;
    padding: 12px;
`;

const StyledCheckbox = styled(Checkbox)<{ hoverDisabled?: boolean }>`
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    ${({ hoverDisabled }) =>
        !hoverDisabled
            ? css`
                  *:hover > * > & {
                      display: block;
                  }
              `
            : ''}
`;

export type HoverControlsProps = PropsWithChildren<{
    selected?: boolean;
    onChangeSelected?: (selected: boolean) => void;
    hoverDisabled?: boolean;
}>;

export const HoverControls = (props: HoverControlsProps) => {
    const { children, onChangeSelected, ...rest } = props;
    const handleClick = useCallback(() => {
        onChangeSelected?.(!props.selected);
    }, [onChangeSelected, props.selected]);

    return (
        <StyledHoverControls className="htch-webui-hoverable" onClick={handleClick} {...rest}>
            <ControlsContainer>
                <StyledCheckbox checked={!!props.selected} readOnly hoverDisabled={props.hoverDisabled} />
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
