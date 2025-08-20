import * as React from 'react';
import type { SVGProps } from 'react';
import type { IconColorProp } from '@hautechai/webui.themeprovider';
import Small from './Small';
import SmallBold from './SmallBold';

export type PlayCircleIconStyle = 'outlined' | 'bold';
export type PlayCircleIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: PlayCircleIconStyle;
};

const PlayCircleIcon: React.FC<PlayCircleIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(PlayCircleIcon as React.FC<PlayCircleIconProps> & { hasStyleVariant: true }).hasStyleVariant = true;

export default PlayCircleIcon;
