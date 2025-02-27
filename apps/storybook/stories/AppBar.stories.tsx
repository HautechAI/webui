import { AppBar } from '../../../components/AppBar/src';
import { Logo } from '../../../components/Logo/src';
import { Typography } from '../../../components/Typography/src';
import { User } from '../../../components/User/src';

export default {
    title: 'Surfaces/AppBar',
    component: AppBar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Mid = {
    args: {
        left: <>Left</>,
        center: <>Center</>,
        right: <>Right</>,
    },
};

export const MidWithSomeComponents = {
    args: {
        left: (
            <>
                <Typography variant="H3">Left</Typography>
            </>
        ),
        center: (
            <>
                <Logo />
            </>
        ),
        right: (
            <>
                <User title="John Doe" />
            </>
        ),
    },
};

export const Low = {
    args: {
        hierarchy: 'low',
        left: <>Left</>,
        center: <>Center</>,
        right: <>Right</>,
    },
};
