import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

export type FolderIconStyle = 'outlined' | 'bold';
export type FolderIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: FolderIconStyle;
};

const FolderIcon: React.FC<FolderIconProps> & { hasStyleVariant: boolean } = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
FolderIcon.hasStyleVariant = true;

export default FolderIcon;
