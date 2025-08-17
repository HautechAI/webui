import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type PauseIconStyle = 'outlined' | 'bold';
export type PauseIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: PauseIconStyle;
};

const PauseIcon: React.FC<PauseIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(PauseIcon as any).hasStyleVariant = true;

export default PauseIcon;
