import { LockIcon } from '@hautechai/webui.icon';
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
} from '../styles';
import { AspectRatioProps } from '../AspectRatio';
import { AspectRatios, aspectRatios, getBoxSize } from '../AspectRatio/logic';
import useLogic from './logic';

export const maxPxSize = 320;

export type CustomRatioProps = AspectRatioProps & {
    selectedCustomRatio: React.RefObject<AspectRatios>;
};

const CustomRatio = (props: CustomRatioProps) => {
    const {
        sliderValue,
        defaultChecked,
        onClickAspectRatio,
        selectedRatio,
        temporaryRatio,
        setTemporaryRatio,
        onChangeSliderValue,
        onClickDefaultCheckbox,
    } = useLogic(props);

    const renderOption = (option: AspectRatios, description?: string) => (
        <Ratio
            selected={selectedRatio === option}
            onClick={() => onClickAspectRatio(option)}
            onMouseEnter={() => setTemporaryRatio(option as AspectRatios)}
            onMouseLeave={() => setTemporaryRatio(selectedRatio)}
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
            {Object.keys(aspectRatios)
                .filter((ratio) => {
                    const [width, height] = ratio.split(':').map(Number);
                    return portrait ? height > width : width > height;
                })
                .filter((ratio) => ratio !== '1:1')
                .map((ratio) => renderOption(ratio as AspectRatios))}
        </Column>
    );

    const renderLeftColumn = () => {
        return (
            <Column>
                <AspectRatioBoxContainer>
                    <RatioBox {...getBoxSize(temporaryRatio, maxPxSize)}>
                        <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                            {temporaryRatio}
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
    };

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
            {props.onPressCustomRatio && (
                <CustomRatioContainer onClick={props.onPressCustomRatio}>
                    <Typography variant="LabelSmallRegular" color="layout.onSurface.primary">
                        Custom
                    </Typography>
                    <LockIcon size={20} color="layout.onSurface.secondary" />
                </CustomRatioContainer>
            )}
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
