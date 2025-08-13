import { Box } from '@hautechai/webui.box';
import { Column } from '@hautechai/webui.column';
import { Divider } from '@hautechai/webui.divider';
import { Row } from '@hautechai/webui.row';
import { Slider } from '@hautechai/webui.slider';
import { Typography } from '@hautechai/webui.typography';
import { Modal } from '@hautechai/webui.modal';

import { getBoxSize } from '../AspectRatio/logic';
import { AspectRatioBoxContainer, ModalContentContainer, OptionLabel, Ratio, RatioBox, Sizes } from '../styles';
import useLogic from './logic';

export const maxPxSize = 320;

export type CustomRatioProps = {
    open?: boolean;
    onClose?: (value?: string) => void;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    sizeForRatio: (aspectRatio: string) => { width: number; height: number };
    position?: { left: number; top: number };
};

const CustomRatio = (props: CustomRatioProps) => {
    const {
        sliderValue, //
        onClickAspectRatio,
        onChangeSliderValue,
        selected,
        setTmpSelected,
        portraitOptions,
        landscapeOptions,
    } = useLogic(props);

    const renderOption = (option: string, description?: string) => (
        <Ratio
            data-selected={selected === option}
            onClick={() => onClickAspectRatio(option)}
            onMouseEnter={() => setTmpSelected(option)}
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

    const renderOptions = (label: string, options: string[]) => (
        <Column>
            <OptionLabel>
                <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                    {label}
                </Typography>
            </OptionLabel>
            {options.map((option) => renderOption(option))}
        </Column>
    );

    const renderLeftColumn = () => {
        return (
            <Column>
                <AspectRatioBoxContainer>
                    {(() => {
                        const sz = getBoxSize(selected, maxPxSize);
                        return (
                            <RatioBox style={{ width: sz.width, height: sz.height }}>
                                <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                                    {selected}
                                </Typography>
                            </RatioBox>
                        );
                    })()}
                </AspectRatioBoxContainer>
                <Box paddingTop="xl" paddingBottom="l">
                    <Slider
                        min={0}
                        max={Object.keys(props.options).length - 1}
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
                            {props.sizeForRatio(selected).width}px
                        </Typography>
                    </Row>
                    <Row spacing="m">
                        <Typography variant="LabelSmallRegular" color="layout.onSurface.tertiary">
                            Height
                        </Typography>
                        <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                            {props.sizeForRatio(selected).height}px
                        </Typography>
                    </Row>
                </Sizes>
            </Column>
        );
    };

    const renderRightColumn = () => (
        <div onMouseLeave={() => setTmpSelected(undefined)}>
            <Column>
                <Row spacing="m">
                    {renderOptions('Portrait', portraitOptions)}
                    {renderOptions('Landscape', landscapeOptions)}
                </Row>

                <Box paddingBottom="ml" paddingTop="ml">
                    <Divider />
                </Box>
                <Box paddingBottom="xs">{renderOption('1:1', '(Square)')}</Box>
                {/* {props.onPressCustomRatio && (
                <CustomRatioContainer onClick={props.onPressCustomRatio}>
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                        Custom
                    </Typography>
                    <LockIcon size={20} color="layout.onSurface.secondary" />
                </CustomRatioContainer>
            )} */}
                {/* <CheckAsDefault>
                <Checkbox checked={defaultChecked} onChange={onClickDefaultCheckbox} />
                <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                    Set as default
                </Typography>
            </CheckAsDefault> */}
            </Column>
        </div>
    );

    return (
        <Modal
            open={props.open}
            onClose={() => props.onClose?.(selected)}
            backdropStyle={{ backgroundColor: 'transparent' }}
            contentPosition={{ left: props.position?.left, top: props.position?.top }}
        >
            <ModalContentContainer>
                {renderLeftColumn()}
                {renderRightColumn()}
            </ModalContentContainer>
        </Modal>
    );
};

export default CustomRatio;
