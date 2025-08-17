import * as React from 'react';
import type { SVGProps } from 'react';
import { type IconColorProp } from '../../color';
import Small from './Small';
import SmallBold from './SmallBold';

// style prop controls visual style; outlined is default.
export type WorkflowIconStyle = 'outlined' | 'bold';

export type WorkflowIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: IconColorProp }, 'style'> & {
    style?: WorkflowIconStyle;
};

const WorkflowIcon: React.FC<WorkflowIconProps> & { hasStyleVariant: boolean } = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
WorkflowIcon.hasStyleVariant = true;

export default WorkflowIcon;
