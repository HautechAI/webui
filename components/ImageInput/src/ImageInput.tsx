import { FileInput, FileInputProps } from '@hautechai/webui.fileinput';

export type ImageInputProps = FileInputProps;

export const ImageInput = (props: ImageInputProps) => {
    const {
        accept = { 'image/*': ['.jpg', '.jpeg', '.png', '.webp'] }, //
        label = 'Drag and drop your image here',
        labelDragActive = 'Drop your image here',
        labelButton = 'Open image',
        ...rest
    } = props;
    return <FileInput {...{ accept, label, labelDragActive, labelButton }} {...rest} />;
    testId?: string;
};
