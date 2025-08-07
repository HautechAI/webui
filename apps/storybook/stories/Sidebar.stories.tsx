import { Sidebar, SidebarSection } from '../../../components/Sidebar/src';
import { Logo } from '../../../components/Logo/src';
import { User } from '../../../components/User/src';
import { AppBar } from '../../../components/AppBar/src';
import { Column } from '../../../components/Column/src';

export default {
    title: 'Surfaces/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story: React.FC) => (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = (args: any) => (
    <Sidebar
        {...args} //
        header={<SidebarSection>Top</SidebarSection>}
        footer={<SidebarSection>Bottom</SidebarSection>}
    />
);

export const WithSomeComponents = (args: any) => (
    <Sidebar
        {...args} //
        header={
            <SidebarSection>
                <Logo />
            </SidebarSection>
        }
        footer={
            <SidebarSection>
                <User title="John Doe" />
            </SidebarSection>
        }
    />
);

export const HierarchyLow = (args: any) => (
    <Sidebar
        {...args} //
        hierarchy="low"
        header={
            <SidebarSection>
                <Logo />
            </SidebarSection>
        }
        footer={
            <SidebarSection>
                <User title="John Doe" />
            </SidebarSection>
        }
    />
);

export const WithHeader = (args: any) => <Sidebar {...args} header={<AppBar hierarchy="low" />} />;

export const WithScroll = (args: any) => (
    <Sidebar
        {...args}
        header={<AppBar hierarchy="low" />}
        content={
            <SidebarSection>
                <Column>
                    {Array(30)
                        .fill(null)
                        .map((_, idx) => {
                            return <Logo key={idx} />;
                        })}
                </Column>
            </SidebarSection>
        }
        footer={
            <SidebarSection>
                <User title="John Doe" />
            </SidebarSection>
        }
    />
);

export const Right = (args: any) => (
    <Sidebar
        {...args}
        side="right"
        header={<SidebarSection>Top</SidebarSection>}
        footer={<SidebarSection>Bottom</SidebarSection>}
    />
);
Right.decorators = [
    (Story: React.FC) => (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'flex-end' }}>
            <Story />
        </div>
    ),
];
