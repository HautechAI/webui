import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

export type BatchIconStyle = 'outlined' | 'bold';
export type BatchIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: BatchIconStyle;
};

const BatchIcon: React.FC<BatchIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(BatchIcon as any).hasStyleVariant = true;

export default BatchIcon;
