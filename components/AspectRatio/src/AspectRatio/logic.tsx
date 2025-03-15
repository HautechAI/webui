import { useTheme } from '@hautechai/webui.themeprovider';
import { useCallback, useRef, useState } from 'react';
import { AspectRatioProps } from '.';

export const aspectRatios: Record<string, { sliderOrder: number }> = {
    '1:1': { sliderOrder: 4 },

    '7:9': { sliderOrder: 0 },
    '13:19': { sliderOrder: 1 },
    '4:7': { sliderOrder: 2 },
    '5:12': { sliderOrder: 3 },

    '9:7': { sliderOrder: 8 },
    '19:13': { sliderOrder: 7 },
    '7:4': { sliderOrder: 6 },
    '12:5': { sliderOrder: 5 },
};
export type AspectRatios = keyof typeof aspectRatios;

export const getBoxSize = (aspectRatio: AspectRatios, maxPxSize: number) => {
    const [width, height] = aspectRatio.split(':').map(Number);
    return width >= height
        ? { width: maxPxSize, height: Math.round((maxPxSize / width) * height) }
        : { width: Math.round((maxPxSize / height) * width), height: maxPxSize };
};

const useLogic = (props: AspectRatioProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ left: 0, top: 0 });
    const [defaultRatios, setDefaultRatios] = useState<AspectRatios[]>(['7:9', '1:1', '9:7']);
    const selectedCustomRatio = useRef<AspectRatios>('1:1');
    const theme = useTheme();

    const onTabChange = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
            if (value === 'custom') {
                const rect = event.currentTarget.getBoundingClientRect();
                setModalPosition({
                    left: rect.right + theme.foundation.spacing.l,
                    top: rect.top - 420, // todo check how modal position can be dynamic according to screen size and position of the element
                });
                setIsModalOpen(true);
            } else {
                setIsModalOpen(false);
            }
            props.onChange?.(event, value);
        },
        [props.onChange, props.onAspectRatioChange, defaultRatios],
    );

    const onCloseModal = useCallback(() => {
        props.onAspectRatioChange(selectedCustomRatio.current);
        if (selectedCustomRatio.current === '1:1') {
            setIsModalOpen(false);
            return;
        }
        const [width, height] = selectedCustomRatio.current.split(':').map(Number);
        const landscapeRatio = width >= height ? selectedCustomRatio.current : `${height}:${width}`;
        const portraitRatio = width >= height ? `${height}:${width}` : selectedCustomRatio.current;

        const defaultRatios = [portraitRatio, '1:1', landscapeRatio];
        setIsModalOpen(false);
        setDefaultRatios(defaultRatios);
    }, [selectedCustomRatio, props.onAspectRatioChange]);

    return {
        defaultRatios,
        getBoxSize,
        onTabChange,
        modalPosition,
        isModalOpen,
        onCloseModal,
        selectedCustomRatio,
    };
};

export default useLogic;
