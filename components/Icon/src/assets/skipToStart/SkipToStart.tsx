import * as React from 'react';
import type { SVGProps } from 'react';
import type { IconColorProp } from '@hautechai/webui.themeprovider';
import Small from './Small';
import SmallBold from './SmallBold';

export type SkipToStartIconStyle = 'outlined' | 'bold';
export type SkipToStartIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: SkipToStartIconStyle;
};

const SkipToStartIcon: React.FC<SkipToStartIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(SkipToStartIcon as React.FC<SkipToStartIconProps> & { hasStyleVariant: true }).hasStyleVariant = true;

export default SkipToStartIcon;
