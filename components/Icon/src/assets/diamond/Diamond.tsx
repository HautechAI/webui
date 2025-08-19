import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

// style prop controls visual style; outlined is default.
export type DiamondIconStyle = 'outlined' | 'bold';

export type DiamondIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: DiamondIconStyle;
};

const DiamondIcon: React.FC<DiamondIconProps> & { hasStyleVariant: boolean } = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
DiamondIcon.hasStyleVariant = true;

export default DiamondIcon;
