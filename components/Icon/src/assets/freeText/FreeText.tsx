import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

export type FreeTextIconStyle = 'outlined' | 'bold';
export type FreeTextIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: FreeTextIconStyle;
};

const FreeTextIcon: React.FC<FreeTextIconProps> & { hasStyleVariant: boolean } = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
FreeTextIcon.hasStyleVariant = true;

export default FreeTextIcon;
