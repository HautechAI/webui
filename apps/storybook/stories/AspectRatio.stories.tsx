import { AspectRatio } from '../../../components/AspectRatio/src';

export default {
    title: 'Compositions/Aspect Ratio',
    component: AspectRatio,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [
        (Story: any) => (
            <div style={{ display: 'flex', width: 'auto', marginTop: '500px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Main = {
    args: {
        onTabChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedTab: number) =>
            console.log('Selected tab:', selectedTab),
        onAspectRatioChange: (aspectRatio: string) => console.log('Selected aspect ratio:', aspectRatio),
        onCheckAsDefault: (aspectRatio: string, checked: boolean) =>
            console.log('Set as default:', aspectRatio, checked),
        calculateBoxSize: (aspectRatio: string) => {
            const [width, height] = aspectRatio.split(':').map(Number); // '7:9' => [7, 9]
            const ratio = width / height;
            const maxSide = 1024;

            if (width >= height) {
                return {
                    width: maxSide,
                    height: Math.round(maxSide / ratio),
                };
            } else {
                return {
                    width: Math.round(maxSide * ratio),
                    height: maxSide,
                };
            }
        },
    },
};
