import { Sidebar } from '../../../components/Sidebar/src';
import { Logo } from '../../../components/Logo/src';
import { User } from '../../../components/User/src';
import { AppBar } from '../../../components/AppBar/src';

export default {
    title: 'Surfaces/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story: React.FC) => (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'flex-start' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        top: <>Top</>,
        bottom: <>Bottom</>,
    },
};

export const WithSomeComponents = {
    args: {
        top: (
            <>
                <Logo />
            </>
        ),
        bottom: (
            <>
                <User title="John Doe" />
            </>
        ),
    },
};

export const HierarchyLow = {
    args: {
        hierarchy: 'low',
        top: (
            <>
                <Logo />
            </>
        ),
        bottom: (
            <>
                <User title="John Doe" />
            </>
        ),
    },
};

export const WithHeader = {
    args: {
        header: (
            <>
                <AppBar hierarchy="low" />
            </>
        ),
    },
};
