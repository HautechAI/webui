import { SegmentedControl, SegmentedControlProps } from '@hautechai/webui.segmentedcontrol';
import { ArrowAltRightIcon } from '@hautechai/webui.icon';
import { styled } from '@linaria/react';

import CustomRatio from '../CustomRatio';
import { RatioBoxContainer, SmallRatioBox } from '../styles';
import useLogic from './logic';

const Container = styled.div`
    display: flex;
`;

export type AspectRatioProps = {
    options: string[];
    defaultOptions: [string, string, string];
    sizeForRatio: (aspectRatio: string) => { width: number; height: number };
    value?: string;
    onChange?: (aspectRatio: string) => void;
};

export const AspectRatio = (props: AspectRatioProps) => {
    const {
        ref, //
        selected,
        onTabChange,
        getBoxSize,
        modalPosition,
        onCloseModal,
        isModalOpen,
        modalSelected,
        setModalSelected,
        displayOptions,
    } = useLogic(props);

    return (
        <Container ref={ref}>
            <SegmentedControl
                {...props}
                options={[
                    ...displayOptions.map((option) => ({
                        value: option,
                        label: option,
                        leadingIcon: (
                            <RatioBoxContainer>
                                <SmallRatioBox {...getBoxSize(option, 16)} />
                            </RatioBoxContainer>
                        ),
                    })),
                    { value: 'custom', leadingIcon: <ArrowAltRightIcon /> },
                ]}
                value={selected}
                whitespace="s"
                onChange={onTabChange}
            />

            <CustomRatio
                open={isModalOpen}
                onClose={onCloseModal}
                options={props.options}
                value={modalSelected}
                onChange={setModalSelected}
                sizeForRatio={props.sizeForRatio}
                position={{ left: modalPosition.left, top: modalPosition.top }}
            />
        </Container>
    );
};
