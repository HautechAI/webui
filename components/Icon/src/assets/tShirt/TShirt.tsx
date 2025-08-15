import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type TShirtIconStyle = 'outlined' | 'bold';
export type TShirtIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: TShirtIconStyle;
};

const TShirtIcon: React.FC<TShirtIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(TShirtIcon as any).hasStyleVariant = true;

export default TShirtIcon;
