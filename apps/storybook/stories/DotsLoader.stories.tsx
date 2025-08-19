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

export const FastSpeed = {
    args: {
        speed: 1,
    } as DotsLoaderProps,
};

export const SlowSpeed = {
    args: {
        speed: 5,
    } as DotsLoaderProps,
};

export const SpeedComparison = {
    render: () => (
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Fast (1s)</div>
                <DotsLoader speed={1} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Default (3s)</div>
                <DotsLoader />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px', fontSize: '12px' }}>Slow (5s)</div>
                <DotsLoader speed={5} />
            </div>
        </div>
    ),
    args: {},
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
