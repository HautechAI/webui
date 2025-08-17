import * as React from 'react';
import type { SVGProps } from 'react';
import type { IconColorProp } from '@hautechai/webui.themeprovider';
import Small from './Small';
import SmallBold from './SmallBold';

export type PlayIconStyle = 'outlined' | 'bold';
export type PlayIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: PlayIconStyle;
};

const PlayIcon: React.FC<PlayIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(PlayIcon as React.FC<PlayIconProps> & { hasStyleVariant: true }).hasStyleVariant = true;

export default PlayIcon;
