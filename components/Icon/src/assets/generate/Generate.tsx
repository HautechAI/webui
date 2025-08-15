import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type GenerateIconStyle = 'outlined' | 'bold';
export type GenerateIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: GenerateIconStyle;
};

const GenerateIcon: React.FC<GenerateIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(GenerateIcon as any).hasStyleVariant = true;

export default GenerateIcon;
