import * as React from 'react';
import type { SVGProps } from 'react';
import Small from './Small';
import SmallBold from './SmallBold';

// style prop controls visual style; outlined is default.
export type WorkflowIconStyle = 'outlined' | 'bold';

export type WorkflowIconProps = Omit<SVGProps<SVGSVGElement> & { size?: number; color?: any }, 'style'> & {
    style?: WorkflowIconStyle;
};

const WorkflowIcon: React.FC<WorkflowIconProps> = ({ style = 'outlined', ...rest }) => {
    if (style === 'bold') return <SmallBold {...rest} />;
    return <Small {...rest} />;
};

// mark style variants support for docs
(WorkflowIcon as any).hasStyleVariant = true;

export default WorkflowIcon;