import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DATA =
    'UEsDBBQAAAAIACm9a1pui9GOWwAAAGYAAAANAAAAbWFuaWZlc3QuanNvbqtWKkstKs7Mz1OyUjJS0lFKT81LLUosyS8C8h1S8kty8ktKMlP14SzdrGIHAz1LPQPdpNSSRD1DY6CexLzM3MQSoBnFSlbR1UqZKUC9vomZeQrByUDTlGpjawFQSwMEFAAAAAgAKb1rWuqJTZ/1AwAAGC0AABEAAABhL01haW4gU2NlbmUuanNvbu2aTW/bOBCG/0rAM6MlRVKkfNrbngos0L0ZPmgTpfHGH4GkblsY/u99ZyTKUuoUaYIgSMEgsaTR8J3h8OtB4IPYbcVCfKjWu4uPV/WuFlJcX1+LhZLiVix0HqT4Mly3dVeJxUF8QoM/N/uuW9c3603d/nHV1FW3by50Zm2mxFGKTfWtblqxWB5E900srOzDOKi3DeRw6TjG/h5PocDdGncUFLFvqk1bQ2SHJoWfZPQvRMinaj9U7d3oWO3ZfIeAB8Ep4oMMSEArmxXK5MFqxHF57qTO86zMnS+9CUH5orQrpBwbD+28kvzLr2CYvFMwIdmZd5k5a8oyhGCUK6yXZZ4Zr7QL2uvCIRAJoesPdNp5umRCZyYWrdSR/G6r+/pUUPGpQVliOU4l4yr/1ew/319oOKxR5NiivX28xd9Vd8sNYMfYjIXsUziIK7Homs/wXkNveYnyaXnpMxfKlVwqqfAJY6GNvNSZUma0so/kBqONPcgG/9HIknPFXnCu1weVM70+JGwnvRVXcTkLOI93TudswDOJDQEf9GBIbd7Xs0WZlg+Z/k+Zhiz3AUaTBRXIx2ah8PLSKEwsMvANDPyCDOyKeNSSchue4+PgP7oPgqNeH3CMRzLTR3YvT+59IqhY1OtTPcWLz2M+scUp4yh66lQfNfZ6dcRMj7O1e3y2fuya/V3N83WDmZnj8h9fthvean5cQLyHTWwOFrRkC813XiXc7CtcMo1CCWTBd3DFrB/eBGOGN7jrN40l7ssgVZYXaIaelQXGX9D2Rr15vqrLdQG94K3DxReh6GWR/EtkjdU59KwyJann3vWy+oXpGu0pXVsqknfGY8KzLlxeQ9e+Uh3caw2bJd2fTphCHbEG4hLoaIt/cJrRBvLjWYUpLvH3tKMq4GBCeL74lxxKaBsz3T6+WP9p1tsLOl9aXrD1TMdSQaP0mYWYGyxnrjDuZrW3PtbelzrW/uyys2XUwPk/0/B21LD5oGFsmXlteyXDUmT2+SDOQ/RwAAIs6Ks+wme9ozM0liaCj30G+BAsvQB8eICxP/M4n502v4Y4BdBOqXL8CbJgbkpMk5gmMc3bMw3tj4lpEtMkpnljpil/C6Yh2RnTQG3ONOYZTENtEtMkpklMk5jmCUxDJ1BimsQ0iWnelmkc4cj7ZxpKbcY0POWnTJM/g2n4PE5Mk5gmMU1imsQ0iWkS07wLpqGyvX+mocYzpuGhnjINdf0XmcYkpklMk5gmMc0TmYZ2wcQ0iWkS07wx09AX294/01CBZkzj6A77unCZxxeMpbhBkc1AMhOOqdq27kgf7tuquYvfQb6KHITKLgocy2jOufAL+qcPvXBIv3+zOn4HUEsBAhQAFAAAAAgAKb1rWm6L0Y5bAAAAZgAAAA0AAAAAAAAAAAAAAAAAAAAAAG1hbmlmZXN0Lmpzb25QSwECFAAUAAAACAApvWta6olNn/UDAAAYLQAAEQAAAAAAAAAAAAAAAACGAAAAYS9NYWluIFNjZW5lLmpzb25QSwUGAAAAAAIAAgB6AAAAqgQAAAAA';

export type ProgressProps = {
    size?: number;
    testId?: string;
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
            data={base64ToArrayBuffer(DATA)}
            loop
            autoplay
            {...{ style: props.size ? { width: props.size, height: props.size } : undefined }}
        />
    );
};

export default Progress;
