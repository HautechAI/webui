import { DotsLoader, type DotsLoaderProps } from '../../../components/DotsLoader/src';

export default {
    title: 'Data Display/DotsLoader',
    component: DotsLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {} as DotsLoaderProps,
};

export const CustomClass = {
    args: {
        className: 'custom-loader',
    } as DotsLoaderProps,
};

export const Multiple = {
    render: () => (
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Default</div>
                <DotsLoader />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Loading...</div>
                <DotsLoader />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Processing</div>
                <DotsLoader />
            </div>
        </div>
    ),
    args: {},
};
