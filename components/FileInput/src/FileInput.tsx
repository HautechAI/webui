import { Button } from '@hautechai/webui.button';
import { UploadIcon } from '@hautechai/webui.icon';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileInputContainer = styled.div<Pick<FileInputProps, 'stretch'>>`
    display: flex;
    width: 320px;
    height: 120px;
    padding: ${themeVars.spacing.xxxl};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${themeVars.spacing.xl};
    flex-shrink: 0;
    background-color: transparent;
    border-radius: ${themeVars.cornerRadius.l};
    border-color: ${themeVars.layout.strokes};
    border-style: dashed;
    border-width: ${themeVars.stroke.thick};

    &[data-accept='true'] {
        background-color: ${themeVars.actions.onSuccess};
        border-color: ${themeVars.actions.success};
    }
    &[data-reject='true'] {
        background-color: ${themeVars.actions.onError};
        border-color: ${themeVars.actions.error};
    }
    &[data-active='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
`;

const ButtonFileInput = styled.div<Pick<FileInputProps, 'stretch'>>`
    display: flex;
`;

export type FileInputProps = {
    /** Callback function that is called when files are selected */
    onChange: (files: File[]) => void;

    /** Set accepted file types. Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276) */
    accept?: Record<string, string[]>;

    /** @property Maximum number of files that can be selected */
    maxFiles?: number;

    /** @property Maximum file size (in bytes) */
    maxSize?: number;

    /** @property Label for the file input */
    label?: string;

    /** @property Optional label to display when files are being dragged over the input */
    labelDragActive?: string;

    /** @property Optional label to display when files are being dragged over the input */
    labelDragRejected?: string;

    /** @property Optional label to display when files are being dragged over the input */
    labelDragRejectedButton?: string;

    /** @property Optional label for upload button */
    labelButton?: string;

    variant?: 'dropzone' | 'button';
    stretch?: boolean;
};

export const FileInput: React.FC<FileInputProps> = (props) => {
    const {
        label = 'Drag and drop your file here', //
        labelDragActive = 'Drop here',
        labelButton = 'Open file',
        labelDragRejected = 'Uploading error',
        labelDragRejectedButton = 'Uploading again',
    } = props;

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            props.onChange(acceptedFiles);
        }
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        isDragAccept,
        fileRejections: _fileRejections,
    } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: props.maxFiles,
        maxSize: props.maxSize,
    });

    const [delayedAccept, setDelayedAccept] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedAccept(isDragAccept);
        }, 300);

        return () => clearTimeout(timer);
    }, [isDragAccept]);

    const renderLabel = (label: string, color: TypographyProps['color']) => (
        <Typography variant="H1" color={color}>
            {label}
        </Typography>
    );

    const renderContent = () => {
        if (delayedAccept) {
            return renderLabel(labelDragActive, 'actions.success');
        }

        if (isDragActive) {
            return renderLabel(labelDragActive, 'layout.onSurface.primary');
        }

        if (isDragReject) {
            return (
                <>
                    {renderLabel(labelDragRejected, 'actions.error')}
                    <Button label={labelDragRejectedButton} leadingIcon={<UploadIcon size={20} />} />
                </>
            );
        }

        return (
            <>
                {renderLabel(label, 'layout.onSurface.primary')}
                <Button label={labelButton} leadingIcon={<UploadIcon size={20} />} />
            </>
        );
    };

    return props.variant === 'button' ? (
        <ButtonFileInput {...getRootProps({})}>
            <input {...getInputProps()} />
            <Button label={labelButton} leadingIcon={<UploadIcon size={20} />} stretch={props.stretch} />
        </ButtonFileInput>
    ) : (
        <FileInputContainer
            data-reject={isDragReject}
            data-accept={delayedAccept}
            data-active={isDragActive}
            {...getRootProps({})}
        >
            <input {...getInputProps()} />
            {renderContent()}
        </FileInputContainer>
    );
};
