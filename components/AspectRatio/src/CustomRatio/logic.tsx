import { useCallback, useMemo, useState } from 'react';
import { CustomRatioProps } from '.';

const useLogic = (props: CustomRatioProps) => {
    const orderedRatios = useMemo(() => {
        return [...props.options].sort((a, b) => {
            const [widthA, heightA] = a.split(':').map(Number);
            const [widthB, heightB] = b.split(':').map(Number);
            return widthA / heightA - widthB / heightB;
        });
    }, [props.options]);

    const portraitOptions = useMemo(() => {
        return props.options
            .map((ratio) => {
                const [width, height] = ratio.split(':').map(Number);
                return [width, height] as const;
            })
            .filter(([width, height]) => {
                return height > width;
            })
            .sort(([widthA, heightA], [widthB, heightB]) => {
                return widthA / heightA - widthB / heightB;
            })
            .map(([width, height]) => [width, height].join(':'));
    }, [props.options]);

    const landscapeOptions = useMemo(() => {
        return props.options
            .map((ratio) => {
                const [width, height] = ratio.split(':').map(Number);
                return [width, height] as const;
            })
            .filter(([width, height]) => {
                return width > height;
            })
            .sort(([widthA, heightA], [widthB, heightB]) => {
                return widthB / heightB - widthA / heightA;
            })
            .map(([width, height]) => [width, height].join(':'));
    }, [props.options]);

    const [tmpSelected, setTmpSelected] = useState<string | undefined>(undefined);

    const selected = tmpSelected ?? props.value;

    const sliderValue = useMemo(() => {
        return orderedRatios.indexOf(selected);
    }, [orderedRatios, selected]);

    const onChangeSliderValue = useCallback(
        (value: number) => {
            props.onChange(orderedRatios[value]);
        },
        [orderedRatios],
    );

    const onClickAspectRatio = useCallback((value: string) => {
        props.onClose?.(value);
    }, []);

    return {
        portraitOptions,
        landscapeOptions,
        orderedRatios,
        selected,
        sliderValue,
        onChangeSliderValue,
        onClickAspectRatio,
        tmpSelected,
        setTmpSelected,
    };
};

export default useLogic;
