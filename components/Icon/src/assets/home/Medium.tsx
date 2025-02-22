import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <path
            fill={props.color ?? '#656565'}
            fillRule="evenodd"
            d="M12 2.4c-.632 0-1.206.181-1.83.484-.602.293-1.299.725-2.168 1.264L6.156 5.294c-.821.511-1.481.92-1.988 1.308-.526.402-.93.813-1.222 1.346-.291.532-.421 1.098-.485 1.767-.06.647-.06 1.44-.06 2.434v1.44c0 1.7 0 3.043.136 4.092.14 1.076.434 1.945 1.098 2.632.668.69 1.516 1 2.568 1.145 1.018.142 2.32.142 3.96.142h3.675c1.64 0 2.942 0 3.96-.142 1.051-.146 1.9-.455 2.568-1.145.664-.687.958-1.556 1.099-2.632.135-1.049.135-2.391.135-4.092v-1.44c0-.994 0-1.786-.06-2.434-.063-.67-.194-1.235-.485-1.767-.292-.533-.697-.943-1.222-1.346-.507-.389-1.166-.797-1.989-1.308l-1.846-1.146c-.868-.539-1.565-.971-2.168-1.264C13.208 2.58 12.633 2.4 12 2.4M8.678 5.306c.907-.563 1.545-.958 2.078-1.217.52-.253.887-.35 1.244-.35.358 0 .726.097 1.244.35.534.259 1.172.654 2.078 1.217l1.787 1.108c.858.533 1.46.907 1.91 1.252.437.335.688.61.86.925s.274.684.326 1.249c.055.578.056 1.308.056 2.342v1.358c0 1.76-.002 3.015-.125 3.968-.122.936-.351 1.479-.732 1.875-.38.392-.896.625-1.79.749-.916.127-2.125.128-3.828.128h-3.572c-1.704 0-2.91-.001-3.827-.128-.894-.125-1.41-.357-1.789-.75-.382-.395-.612-.938-.732-1.874-.125-.953-.126-2.207-.126-3.968v-1.358c0-1.034 0-1.764.055-2.342.053-.565.154-.934.326-1.249.173-.314.424-.59.861-.925.45-.345 1.052-.719 1.91-1.252z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgMedium;
