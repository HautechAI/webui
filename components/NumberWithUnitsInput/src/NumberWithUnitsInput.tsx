import { TextInput } from '../../TextInput/src';
import { Dropdown } from '@hautechai/webui.dropdown';
import { ToggleIconButton } from '@hautechai/webui.toggleiconbutton';
import { Typography } from '@hautechai/webui.typography';
import { WorkflowIcon } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { useCallback } from 'react';

const TrailingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.s};
`;

const UnitsContainer = styled.div`
    min-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export type NumberWithUnitsInputProps = {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    value: string;
    units: string;
    availableUnits: string[];
    onChange?: (value: string) => void;
    onChangeUnits?: (units: string) => void;
    onToggleWorkflow?: () => void;
    hasError?: boolean;
    variation?: 'filled' | 'outlined';
    size?: 'medium' | 'small';
};

export const NumberWithUnitsInput = (props: NumberWithUnitsInputProps) => {
    const handleUnitsChange = useCallback(
        (newUnits: string) => {
            props.onChangeUnits?.(newUnits);
        },
        [props.onChangeUnits],
    );

    const unitsOptions = props.availableUnits.map((unit) => ({
        label: unit,
        value: unit,
    }));

    const renderTrailingHoverContent = () => {
        return (
            <TrailingContainer>
                <ToggleIconButton
                    variant="flat"
                    size="xsmall"
                    icon={<WorkflowIcon size={16} />}
                    onClick={props.onToggleWorkflow}
                    disabled={props.disabled}
                />
                <Dropdown
                    size="xsmall"
                    collapsed={true}
                    value={props.units}
                    options={unitsOptions}
                    onChange={handleUnitsChange}
                    disabled={props.disabled}
                />
            </TrailingContainer>
        );
    };

    const renderTrailingIcon = () => {
        return (
            <UnitsContainer>
                <Typography variant="CaptionRegular" color="layout.onSurface.tertiary">
                    {props.units}
                </Typography>
            </UnitsContainer>
        );
    };

    return (
        <TextInput
            className={props.className}
            type="text"
            placeholder={props.placeholder}
            disabled={props.disabled}
            leadingIcon={props.leadingIcon}
            trailingIcon={renderTrailingIcon()}
            trailingHoverContent={renderTrailingHoverContent()}
            value={props.value}
            onChange={(e) => props.onChange?.(e.target.value)}
            hasError={props.hasError}
            variation={props.variation}
            size={props.size}
        />
    );
};
