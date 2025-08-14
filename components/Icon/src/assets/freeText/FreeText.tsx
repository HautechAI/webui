import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type FreeTextIconStyle = 'outlined' | 'bold';
export type FreeTextIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: FreeTextIconStyle;
};

const FreeTextIcon: React.FC<FreeTextIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(FreeTextIcon as any).hasStyleVariant = true;

export default FreeTextIcon;
