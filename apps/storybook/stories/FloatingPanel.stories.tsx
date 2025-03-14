import { Badge } from '../../../components/Badge/src';
import { Box } from '../../../components/Box/src';
import { FloatingPanel } from '../../../components/FloatingPanel/src';
import { OperationItem } from '../../../components/OperationItem/src';

export default {
    title: 'Data Display/FloatingPanel',
    component: FloatingPanel as any,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story: any) => (
            <div style={{ width: '500px', height: '500px', border: 'dashed red 1px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Main = {
    args: {
        children: (
            <Box paddingLeft="m" paddingRight="m">
                <OperationItem
                    badge={<Badge color="info" label="In progress" />}
                    date="5 seconds ago"
                    previews={null}
                    title="Operation"
                />
            </Box>
        ),
        width: 330,
        title: 'Results',
    },
};

export const Collapsed = {
    args: {
        children: (
            <OperationItem
                badge={<Badge color="info" label="In progress" />}
                date="5 seconds ago"
                previews={null}
                title="Operation"
            />
        ),
        title: 'Results',
        width: 330,
        collapsed: true,
    },
};

export const CollapsedWithProgress = {
    args: {
        children: (
            <OperationItem
                badge={<Badge color="info" label="In progress" />}
                date="5 seconds ago"
                previews={null}
                title="Operation"
            />
        ),
        title: 'Results',
        width: 330,
        collapsed: true,
        showProgress: true,
    },
};
