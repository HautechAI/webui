import { LockIcon } from '@hautechai/webui.icon';
import { useCallback, useState } from 'react';
import { Typography } from '@hautechai/webui.typography';
import { Column } from '@hautechai/webui.column';
import { Divider } from '@hautechai/webui.divider';
import { Box } from '@hautechai/webui.box';
import { Row } from '@hautechai/webui.row';
import { Slider } from '@hautechai/webui.slider';
import { Checkbox } from '@hautechai/webui.checkbox';
import {
    Ratio,
    OptionLabel,
    ModalContentContainer,
    AspectRatioBoxContainer,
    RatioBox,
    Sizes,
    CustomRatioContainer,
    CheckAsDefault,
} from './styles';
import { AspectRatioProps } from './AspectRatio';

export const maxSize = 320;

const aspectRatios: Record<string, { width: number; height: number; sliderOrder: number; portrait?: boolean }> = {
    '1:1': { width: maxSize, height: maxSize, sliderOrder: 4 },

    '7:9': { width: Math.round((maxSize / 9) * 7), height: maxSize, portrait: true, sliderOrder: 0 },
    '13:19': { width: Math.round((maxSize / 19) * 13), height: maxSize, portrait: true, sliderOrder: 1 },
    '4:7': { width: Math.round((maxSize / 7) * 4), height: maxSize, portrait: true, sliderOrder: 2 },
    '5:12': { width: Math.round((maxSize / 12) * 5), height: maxSize, portrait: true, sliderOrder: 3 },

    '9:7': { width: maxSize, height: Math.round((maxSize / 9) * 7), portrait: false, sliderOrder: 8 },
    '19:13': { width: maxSize, height: Math.round((maxSize / 19) * 13), portrait: false, sliderOrder: 7 },
    '7:4': { width: maxSize, height: Math.round((maxSize / 7) * 4), portrait: false, sliderOrder: 6 },
    '12:5': { width: maxSize, height: Math.round((maxSize / 12) * 5), portrait: false, sliderOrder: 5 },
};

type AspectRatios = keyof typeof aspectRatios;

const CustomRatio = (props: AspectRatioProps) => {
    const [ratio, setRatio] = useState<AspectRatios>('1:1');
    const [selectedRatio, setSelectedRatio] = useState<AspectRatios>('1:1');
    const [sliderValue, setSliderValue] = useState(5);
    const [defaultChecked, setDefaultChecked] = useState(false);

    const onChangeSliderValue = useCallback(
        (value: number) => {
            setSliderValue(value);
            const aspectRatio = Object.keys(aspectRatios).find(
                (key) => aspectRatios[key].sliderOrder === value,
            ) as AspectRatios;
            setSelectedRatio(aspectRatio);
            setRatio(aspectRatio);
            props.onAspectRatioChange(aspectRatio);
        },
        [props.onAspectRatioChange],
    );

    const onClickAspectRatio = useCallback(
        (option: AspectRatios) => {
            setSelectedRatio(option);
            setSliderValue(aspectRatios[option].sliderOrder);
            props.onAspectRatioChange(option);
        },
        [props.onAspectRatioChange],
    );

    const onClickDefaultCheckbox = useCallback(
        (checked: boolean) => {
            setDefaultChecked(checked);
            props.onCheckAsDefault?.(selectedRatio, checked);
        },
        [props.onCheckAsDefault, selectedRatio],
    );

    const renderOption = (option: AspectRatios, description?: string) => (
        <Ratio
            selected={selectedRatio === option}
            onClick={() => onClickAspectRatio(option)}
            onMouseEnter={() => setRatio(option as AspectRatios)}
            onMouseLeave={() => setRatio(selectedRatio)}
            key={option}
        >
            <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                {option}
            </Typography>
            {description && (
                <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                    {description}
                </Typography>
            )}
        </Ratio>
    );

    const renderOptions = (label: string, portrait: boolean) => (
        <Column>
            <OptionLabel>
                <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                    {label}
                </Typography>
            </OptionLabel>
            {Object.entries(aspectRatios)
                .filter(([_, value]) => (portrait ? value.portrait : !value.portrait))
                .filter(([option]) => option !== '1:1')
                .map(([option]) => renderOption(option as AspectRatios))}
        </Column>
    );

    const renderLeftColumn = () => (
        <Column>
            <AspectRatioBoxContainer>
                <RatioBox width={aspectRatios[ratio].width} height={aspectRatios[ratio].height}>
                    <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                        {ratio}
                    </Typography>
                </RatioBox>
            </AspectRatioBoxContainer>
            <Box paddingTop="xl" paddingBottom="l">
                <Slider
                    min={0}
                    max={Object.keys(aspectRatios).length - 1}
                    value={sliderValue}
                    onChange={onChangeSliderValue}
                />
            </Box>
            <Sizes>
                <Row spacing="m">
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                        Width
                    </Typography>
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                        {props.calculateBoxSize(selectedRatio).width}px
                    </Typography>
                </Row>
                <Row spacing="m">
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                        Height
                    </Typography>
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                        {props.calculateBoxSize(selectedRatio).height}px
                    </Typography>
                </Row>
            </Sizes>
        </Column>
    );

    const renderRightColumn = () => (
        <Column>
            <Row spacing="m">
                {renderOptions('Portrait', true)}
                {renderOptions('Landscape', false)}
            </Row>
            <Box paddingBottom="ml" paddingTop="ml">
                <Divider />
            </Box>
            <Box paddingBottom="xs">{renderOption('1:1', '(Square)')}</Box>
            <CustomRatioContainer onClick={props.onPressCustomRatio}>
                <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                    Custom
                </Typography>
                <LockIcon size={20} color="layout.onSurface.secondary" />
            </CustomRatioContainer>
            <CheckAsDefault>
                <Checkbox checked={defaultChecked} onChange={onClickDefaultCheckbox} />
                <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                    Set as default
                </Typography>
            </CheckAsDefault>
        </Column>
    );

    return (
        <ModalContentContainer>
            {renderLeftColumn()}
            {renderRightColumn()}
        </ModalContentContainer>
    );
};

export default CustomRatio;
