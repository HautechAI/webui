import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';
import { Divider } from '../../../components/Divider/src';
import { Panel } from '../../../components/Panel/src';

export default {
    title: 'Data Display/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story: React.FC) => (
            <Panel>
                <Column>
                    <Button label="Button" />
                    <Story />
                    <Button label="Button" />
                </Column>
            </Panel>
        ),
    ],
};

export const Main = {
    args: {},
};
