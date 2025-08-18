import * as React from 'react';
import type { SVGProps } from 'react';
import type { IconColorProp } from '@hautechai/webui.themeprovider';
import Small from './Small';
import SmallBold from './SmallBold';

export type SkipToEndIconStyle = 'outlined' | 'bold';
export type SkipToEndIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: SkipToEndIconStyle;
};

const SkipToEndIcon: React.FC<SkipToEndIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(SkipToEndIcon as React.FC<SkipToEndIconProps> & { hasStyleVariant: true }).hasStyleVariant = true;

export default SkipToEndIcon;
