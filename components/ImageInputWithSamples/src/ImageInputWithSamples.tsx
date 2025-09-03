import { ButtonBase } from '@hautechai/webui.buttonbase';
import { Column } from '@hautechai/webui.column';
import { ImageInput, ImageInputProps } from '@hautechai/webui.imageinput';
import { Row } from '@hautechai/webui.row';
import { Tile } from '@hautechai/webui.tile';
import { Typography } from '@hautechai/webui.typography';
import React from 'react';

export type Sample = { id: string; image: string };

export type ImageInputWithSamplesProps = {
    onUpload: ImageInputProps['onChange'];
    onSelectSample?: (sample: Sample) => void;
    imageInputProps?: Omit<ImageInputProps, 'onChange' data-testid={props.testId || testId}>;
    labelSamples?: string;
    samples: Sample[];
    testId?: string;
};

export const ImageInputWithSamples = (props: ImageInputWithSamplesProps) => {
    const {
        imageInputProps, //
        labelSamples = 'Or choose one of the samples',
    } = props;
    return (
        <Column spacing="xxl" align="center">
            <ImageInput onChange={props.onUpload} {...imageInputProps} />
            <Column spacing="l">
                <Typography variant="H2" color="layout.onSurface.primary" textAlign="center">
                    {labelSamples}
                </Typography>
                <Row wrap justify="center" spacing="ml">
                    {props.samples?.map((sample) => (
                        <ButtonBase key={sample.id} onClick={() => props.onSelectSample?.(sample)}>
                            <Tile src={sample.image}></Tile>
                        </ButtonBase>
                    ))}
                </Row>
            </Column>
        </Column>
    );
};
