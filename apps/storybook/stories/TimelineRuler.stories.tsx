import { TimelineRuler } from '../../../components/TimelineRuler/src';

export default {
    title: 'Visual Editor/TimelineRuler',
    component: TimelineRuler,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        scale: { control: 'number' },
        length: { control: 'number' },
        numberedGraduationsDistance: { control: 'number' },
    },
};

export const Default = {
    args: {
        scale: 50,
        length: 10,
        numberedGraduationsDistance: 100,
    },
};

export const HighScale = {
    args: {
        scale: 100,
        length: 5,
        numberedGraduationsDistance: 100,
    },
};

export const LowScale = {
    args: {
        scale: 20,
        length: 20,
        numberedGraduationsDistance: 100,
    },
};

export const ShortTimeline = {
    args: {
        scale: 200,
        length: 2,
        numberedGraduationsDistance: 50,
    },
};

export const LongTimeline = {
    args: {
        scale: 10,
        length: 100,
        numberedGraduationsDistance: 200,
    },
};

export const DenseGraduations = {
    args: {
        scale: 100,
        length: 10,
        numberedGraduationsDistance: 50,
    },
};

export const SparseGraduations = {
    args: {
        scale: 50,
        length: 10,
        numberedGraduationsDistance: 200,
    },
};

export const PartialGraduations = {
    args: {
        scale: 50,
        length: 14,
        numberedGraduationsDistance: 500,
    },
};
