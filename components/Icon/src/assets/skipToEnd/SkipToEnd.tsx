import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type SkipToEndIconStyle = 'outlined' | 'bold';
export type SkipToEndIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: SkipToEndIconStyle;
};

const SkipToEndIcon: React.FC<SkipToEndIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(SkipToEndIcon as any).hasStyleVariant = true;

export default SkipToEndIcon;