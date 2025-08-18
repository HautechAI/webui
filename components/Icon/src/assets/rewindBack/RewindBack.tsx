import * as React from 'react';
import type { SVGProps } from 'react';
import type { IconColorProp } from '@hautechai/webui.themeprovider';
import Small from './Small';
import SmallBold from './SmallBold';

export type RewindBackIconStyle = 'outlined' | 'bold';
export type RewindBackIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: RewindBackIconStyle;
};

const RewindBackIcon: React.FC<RewindBackIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(RewindBackIcon as React.FC<RewindBackIconProps> & { hasStyleVariant: true }).hasStyleVariant = true;

export default RewindBackIcon;
