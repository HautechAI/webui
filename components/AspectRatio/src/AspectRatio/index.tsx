import { SegmentedControl, SegmentedControlProps } from '@hautechai/webui.segmentedcontrol';
import { ArrowAltRightIcon } from '@hautechai/webui.icon';
import { Modal } from '@hautechai/webui.modal';
import CustomRatio from '../CustomRatio';
import { SmallRatioBox } from '../styles';
import useLogic from './logic';

export type AspectRatioProps = SegmentedControlProps & {
    calculateBoxSize: (aspectRatio: string) => { width: number; height: number };
    onAspectRatioChange: (aspectRation: string) => void;
    onPressCustomRatio?: () => void;
    onCheckAsDefault?: (aspectRation: string, checked: boolean) => void;
};

export const AspectRatio = (props: AspectRatioProps) => {
    const {
        onTabChange,
        getBoxSize,
        defaultRatios,
        modalPosition,
        isModalOpen,
        onCloseModal,
        selectedCustomRatio,
        segmentedControlTab,
    } = useLogic(props);

    return (
        <>
            <SegmentedControl
                {...props}
                options={[
                    ...defaultRatios.map((label) => ({
                        label,
                        leadingIcon: <SmallRatioBox {...getBoxSize(label, 16)} />,
                    })),
                    { leadingIcon: <ArrowAltRightIcon /> },
                ]}
                selectedTab={segmentedControlTab}
                whitespace="m"
                onTabChange={onTabChange}
            />
            {isModalOpen && (
                <Modal
                    open
                    onClose={onCloseModal}
                    backdropStyle={{ backgroundColor: 'transparent' }}
                    contentPosition={{ left: modalPosition.left, top: modalPosition.top }}
                >
                    <CustomRatio {...props} selectedCustomRatio={selectedCustomRatio} />
                </Modal>
            )}
        </>
    );
};
