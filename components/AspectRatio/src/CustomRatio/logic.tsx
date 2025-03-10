import { useCallback, useState } from 'react';
import { aspectRatios, AspectRatios } from '../AspectRatio/logic';
import { CustomRatioProps } from '.';

const useLogic = (props: CustomRatioProps) => {
    const [temporaryRatio, setTemporaryRatio] = useState<AspectRatios>(props.selectedCustomRatio.current);
    const [selectedRatio, setSelectedRatio] = useState<AspectRatios>(props.selectedCustomRatio.current);
    const [sliderValue, setSliderValue] = useState(aspectRatios[props.selectedCustomRatio.current].sliderOrder);
    const [defaultChecked, setDefaultChecked] = useState(false);

    const onChangeSliderValue = useCallback(
        (value: number) => {
            setSliderValue(value);
            const aspectRatio = Object.keys(aspectRatios).find(
                (key) => aspectRatios[key].sliderOrder === value,
            ) as AspectRatios;
            setSelectedRatio(aspectRatio);
            setTemporaryRatio(aspectRatio);
            props.selectedCustomRatio.current = aspectRatio;
        },
        [props.selectedCustomRatio],
    );

    const onClickAspectRatio = useCallback(
        (value: AspectRatios) => {
            setSelectedRatio(value);
            setSliderValue(aspectRatios[value].sliderOrder);
            props.selectedCustomRatio.current = value;
        },
        [props.selectedCustomRatio],
    );

    const onClickDefaultCheckbox = useCallback(
        (checked: boolean) => {
            setDefaultChecked(checked);
            props.onCheckAsDefault?.(selectedRatio, checked);
        },
        [props.onCheckAsDefault, selectedRatio],
    );

    return {
        temporaryRatio,
        setTemporaryRatio,
        selectedRatio,
        sliderValue,
        defaultChecked,
        onChangeSliderValue,
        onClickAspectRatio,
        onClickDefaultCheckbox,
    };
};

export default useLogic;
