import React from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

// Icons and images from design (hosted locally)
const diamondIcon = 'http://localhost:3845/assets/bd8dfa3282ef581c6a706165733b314c730c6645.svg';
const wIcon = 'http://localhost:3845/assets/efc9dd0167698ef7bada03862c157b0ad9906db4.svg';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;

const NumberInputSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.m};
    width: 100%;
`;

const ContentAndButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${themeVars.spacing.s};
    height: 28px; /* h-7 */
`;

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${themeVars.spacing.s};
    height: 100%;
    /* px-2 py-1 from Figma */
    padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
    border-radius: ${themeVars.cornerRadius.m};
    background: ${themeVars.layout.surfaceLow};

    &:after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: ${themeVars.cornerRadius.m};
        border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
        pointer-events: none;
    }
`;

const Leading = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.xs};
`;

const WidthIcon = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    overflow: hidden;
`;

const Trailing = styled.div`
    display: flex;
    align-items: center;
`;

const UnitLabel = styled.div`
    width: 36px; /* w-9 */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: ${themeVars.spacing.s}; /* pr-1 */
`;

const KeyframeButton = styled.button`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;
`;

export type InputWithSelectProps = {
    value: number | string;
    unit?: string; // e.g., 'PX'
    onChange?: (value: string) => void;
    onToggleKeyframe?: () => void;
    disabled?: boolean;
};

export const InputWithSelect: React.FC<InputWithSelectProps> = ({
    value,
    unit = 'PX',
    onChange,
    onToggleKeyframe,
    disabled,
}) => {
    return (
        <Root data-name="InputWithSelect" data-node-id="10064:20598">
            <NumberInputSmall data-name="NumberInputSmall" id="node-I10064_20598-10062_18153">
                <ContentAndButton data-name="Content and button" id="node-I10064_20598-10062_18153-9984_4532">
                    <Content data-name="Content" id="node-I10064_20598-10062_18153-9984_4533">
                        <Leading data-name="leading element+value" id="node-I10064_20598-10062_18153-9984_4534">
                            <WidthIcon data-name="width" id="node-I10064_20598-10062_18153-9988_16129">
                                <img alt="W" src={wIcon} style={{ position: 'absolute', inset: '20.04% 7.57%' }} />
                            </WidthIcon>
                            <Typography variant="LabelSmallRegular" color={'layout.onSurface.primary'}>
                                {String(value)}
                            </Typography>
                        </Leading>
                        <Trailing data-name="trailing element" id="node-I10064_20598-10062_18153-10011_40276">
                            <UnitLabel data-name="placeholder" id="node-I10064_20598-10062_18153-10011_40277">
                                <Typography variant="CaptionRegular" color={'layout.onSurface.tertiary'} textAlign="right">
                                    {unit}
                                </Typography>
                            </UnitLabel>
                        </Trailing>
                    </Content>
                    <div data-name="KeyframeToggle" id="node-I10064_20598-10062_18153-9984_12496">
                        <KeyframeButton onClick={onToggleKeyframe} disabled={disabled} aria-label="keyframe-toggle">
                            <img alt="diamond" src={diamondIcon} width={16} height={16} />
                        </KeyframeButton>
                    </div>
                </ContentAndButton>
            </NumberInputSmall>
        </Root>
    );
};
