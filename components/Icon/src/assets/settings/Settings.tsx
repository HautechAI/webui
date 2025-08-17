import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

export type SettingsIconStyle = 'outlined' | 'bold';
export type SettingsIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: SettingsIconStyle;
};

const SettingsIcon: React.FC<SettingsIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(SettingsIcon as any).hasStyleVariant = true;

export default SettingsIcon;
