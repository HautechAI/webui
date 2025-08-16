import * as React from 'react';
import type { SVGProps } from 'react';
import { resolveIconColor, type IconColorProp } from '../../color';
const SvgSmall = (
    props: SVGProps<SVGSVGElement> & {
        size?: number;
        color?: IconColorProp;
    },
) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: props.size ?? '24px', height: props.size ?? '24px' }}
            viewBox="0 0 20 20"
            
            fill="none"
            {...props}
        >
            <path
                fill={resolveIconColor(props.color)}
                d="M8.56745 0.593234C9.35844 -0.197745 10.6416 -0.197745 11.4325 0.593234L19.4068 8.56737C20.1977 9.35835 20.1977 10.6415 19.4068 11.4324L11.4325 19.4066L11.2783 19.546C10.5359 20.1513 9.46413 20.1513 8.72173 19.546L8.56745 19.4066L0.59324 11.4324C-0.197747 10.6415 -0.197747 9.35835 0.59324 8.56737L8.56745 0.593234ZM10.4297 1.59606C10.1924 1.35877 9.80758 1.35876 9.57029 1.59606L1.59607 9.5702C1.35878 9.80749 1.35878 10.1923 1.59607 10.4296L9.57029 18.4038C9.80758 18.6411 10.1924 18.6411 10.4297 18.4038L18.4039 10.4296C18.6412 10.1923 18.6412 9.80749 18.4039 9.5702L10.4297 1.59606Z"
            />
        </svg>
    );
};
export default SvgSmall;
