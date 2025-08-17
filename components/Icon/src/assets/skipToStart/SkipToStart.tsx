import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type SkipToStartIconStyle = 'outlined' | 'bold';
export type SkipToStartIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: SkipToStartIconStyle;
};

const SkipToStartIcon: React.FC<SkipToStartIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(SkipToStartIcon as any).hasStyleVariant = true;

export default SkipToStartIcon;