import * as Icons from '../../../components/Icon';

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

const AllIcons = () => (
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
        {Object.entries(Icons).map(([name, Icon]) => (
            <div key={name}>
                <Icon />
                <p>{name}</p>
            </div>
        ))}
    </div>
);

export const Default = {
    render: () => <AllIcons />,
};
