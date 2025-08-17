import * as Icons from '../../../components/Icon';
import type { SVGProps } from 'react';
import type { IconColorProp } from '../../../components/Icon/src/color';

export default {
    title: 'Icons/All Icons',
    parameters: {
        docs: {
            description: {
                component: 'A collection of icons from the UI library.',
            },
        },
    },
    tags: ['autodocs'],
};

// Base icon props interface
type IconProps = SVGProps<SVGSVGElement> & { 
    size?: number; 
    color?: IconColorProp;
    style?: 'outlined' | 'bold';
};

const AllIcons = () => {
    const items: { key: string; name: string; Comp: React.ComponentType<IconProps>; props?: Partial<IconProps> }[] = [];
    for (const [name, Comp] of Object.entries(Icons)) {
        if (typeof Comp !== 'function') continue;
        items.push({ key: `${name}-default`, name, Comp, props: {} });
        if ((Comp as React.ComponentType<IconProps> & { hasStyleVariant?: boolean }).hasStyleVariant) {
            items.push({ key: `${name}-style-bold`, name: `${name} (style=bold)`, Comp, props: { style: 'bold' } });
        }
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '70px',
                alignItems: 'center',
                textAlign: 'center',
                justifyItems: 'center',
            }}
        >
            {items.map(({ key, name, Comp, props }) => (
                <div key={key}>
                    <Comp {...props} />
                    <p>{name}</p>
                </div>
            ))}
        </div>
    );
};

export const Default = {
    render: () => <AllIcons />,
};
