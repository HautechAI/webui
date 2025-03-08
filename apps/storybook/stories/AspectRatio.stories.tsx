import { AspectRatio } from '../../../components/AspectRatio/src';

export default {
    title: 'Compositions/Aspect Ratio',
    component: AspectRatio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Main = {
    args: {
        onTabChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedTab: number) =>
            console.log('Selected tab:', selectedTab),
    },
};
