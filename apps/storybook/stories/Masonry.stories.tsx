import { Masonry } from '../../../components/Masonry/src';

export default {
    title: 'Layout/Masonry',
    component: Masonry,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

const images = [
    'https://images.unsplash.com/photo-1605763240000-7e93b172d754',
    'https://images.unsplash.com/photo-1592246031359-5a5a6eeb777b',
    'https://images.unsplash.com/photo-1494578379344-d6c710782a3d',
    'https://images.unsplash.com/photo-1605763269552-4705d8c8e301',
    'https://images.unsplash.com/photo-1713357831333-8b93263edadd',
    'https://images.unsplash.com/photo-1600074249296-cf0175062aca',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    'https://images.unsplash.com/photo-1617687445812-f21eff24d53c',
    'https://images.unsplash.com/photo-1643490744955-b3726bd60bb5',
    'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb',
];

export const Main = {
    args: {
        children: images.map((image, i) => <img key={i} src={image} style={{ width: '100%', display: 'block' }} />),
        columnsCount: 4,
        gutter: 'm',
    },
};
