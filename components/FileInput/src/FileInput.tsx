import { Button } from '@hautechai/webui.button';
import { UploadSmall } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileInputContainer = styled.div`
    display: flex;
    width: 400px;
    height: 200px;
    padding: ${({ theme }) => theme.foundation.spacing.xxxl}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.xl}px;
    flex-shrink: 0;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-style: dashed;
    border-width: ${({ theme }) => theme.foundation.stroke.thick}px;
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
};

export const FileInput: React.FC<FileInputProps> = (props) => {
    const {
        label = 'Drag and drop your file here', //
        labelDragActive = 'Drop your file here',
    } = props;

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            props.onChange(acceptedFiles);
        }
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept, fileRejections } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: props.maxFiles,
        maxSize: props.maxSize,
    });

    return (
        <FileInputContainer {...getRootProps({})}>
            <input {...getInputProps()} />
            <Typography variant="H1" color="layout.onSurface.primary">
                {isDragActive ? labelDragActive : label}
            </Typography>
            <Button label="Open file" leadingIcon={<UploadSmall />} />
            {/* {isDragActive && <p>Drop here...</p>}
            {isDragReject && <p>Rejected...</p>}
            {isDragAccept && <p>Accepted...</p>}
            {fileRejections && JSON.stringify(fileRejections)} */}
        </FileInputContainer>
    );
};
