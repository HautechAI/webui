import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

export type AiEditorIconStyle = 'outlined' | 'bold';
export type AiEditorIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: AiEditorIconStyle;
};

const AiEditorIcon: React.FC<AiEditorIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(AiEditorIcon as any).hasStyleVariant = true;

export default AiEditorIcon;
