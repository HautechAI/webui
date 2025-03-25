import { fn } from '@storybook/test';
import { AppBarMobile } from '../../../components/AppBarMobile/src';
import { Box } from '../../../components/Box/src';
import { Button } from '../../../components/Button/src';
import { Row } from '../../../components/Row/src';
import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { Typography } from '../../../components/Typography/src';

export default {
    title: 'Surfaces/AppBarMobile',
    component: AppBarMobile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onBurgerClick: fn() as any,
    },
    decorators: [
        (Story: any) => (
            <Box width={390}>
                <Story />
            </Box>
        ),
    ],
};

export const Mid = {
    args: {
        center: <>Center</>,
        bottom: <>Bottom</>,
    },
};

export const MidWithSomeComponents = {
    args: {
        center: (
            <>
                <SegmentedControl
                    options={[
                        { label: 'All', value: 'all' },
                        { label: 'Classic', value: 'classic' },
                        { label: 'Batch', value: 'batch' },
                    ]}
                    whitespace="xl"
                />
            </>
        ),
        bottom: (
            <Row stretch justify="space-between">
                <Button variant="outlined" label="New folder" size="small" hierarchy="secondary" />
                <Button variant="outlined" label="Select" size="small" hierarchy="secondary" />
            </Row>
        ),
    },
};

export const Low = {
    args: {
        hierarchy: 'low',
        center: <>Center</>,
        bottom: <>Bottom</>,
    },
};
