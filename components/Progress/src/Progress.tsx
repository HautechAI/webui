import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { data } from './data.lottie.json';

export type ProgressProps = {
    size?: number;
};

function base64ToArrayBuffer(base64: string) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export const Progress = (props: ProgressProps) => {
    return (
        <DotLottieReact
            data={base64ToArrayBuffer(data)}
            loop
            autoplay
            {...{ style: props.size ? { width: props.size, height: props.size } : undefined }}
        />
    );
};

export default Progress;
