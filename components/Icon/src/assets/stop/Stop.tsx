import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type StopIconStyle = 'outlined' | 'bold';
export type StopIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: StopIconStyle;
};

const StopIcon: React.FC<StopIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

(StopIcon as any).hasStyleVariant = true;

export default StopIcon;
