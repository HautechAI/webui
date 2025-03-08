import { SegmentedControl, SegmentedControlProps } from '@hautechai/webui.segmentedcontrol';
import { ArrowAltRightIcon } from '@hautechai/webui.icon';
import { useTheme } from '@hautechai/webui.themeprovider';
import { useCallback, useState } from 'react';
import { Modal } from '@hautechai/webui.modal';
import CustomRatio from './CustomRatio';
import { SmallRatioBox } from './styles';

export type AspectRatioProps = SegmentedControlProps & {
    calculateBoxSize: (aspectRatio: string) => { width: number; height: number };
    onAspectRatioChange: (aspectRation: string) => void;
    onPressCustomRatio?: () => void;
    onCheckAsDefault?: (aspectRation: string, checked: boolean) => void;
};

const aspectRatios = ['1:1', '2:3', '12:5'];

export const AspectRatio = (props: AspectRatioProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ left: 0, top: 0 });
    const theme = useTheme();

    const onTabChange = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
            if (index === 3) {
                const rect = event.currentTarget.getBoundingClientRect();
                setModalPosition({
                    left: rect.right + theme.foundation.spacing.l,
                    top: rect.top - 420, // todo check how modal position can be dynamic according to screen size and position of the element
                });
                setIsModalOpen(true);
            } else {
                setIsModalOpen(false);
                props.onAspectRatioChange(aspectRatios[index]);
            }
            props.onTabChange?.(event, index);
        },
        [props.onTabChange],
    );

    return (
        <>
            <SegmentedControl
                {...props}
                options={[
                    { label: aspectRatios[0], leadingIcon: <SmallRatioBox width={16} height={16} /> },
                    { label: aspectRatios[1], leadingIcon: <SmallRatioBox width={12} height={16} /> },
                    { label: aspectRatios[2], leadingIcon: <SmallRatioBox width={16} height={12} /> },
                    { leadingIcon: <ArrowAltRightIcon /> },
                ]}
                whitespace="m"
                onTabChange={onTabChange}
            />
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                backdropStyle={{ backgroundColor: 'transparent' }}
                contentPosition={{ left: modalPosition.left, top: modalPosition.top }}
            >
                <CustomRatio {...props} />
            </Modal>
        </>
    );
};
