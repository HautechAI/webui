import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type RewindForwardIconStyle = 'outlined' | 'bold';
export type RewindForwardIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: RewindForwardIconStyle;
};

const RewindForwardIcon: React.FC<RewindForwardIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(RewindForwardIcon as any).hasStyleVariant = true;

export default RewindForwardIcon;
