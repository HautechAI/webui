import { fn } from '@storybook/test';
import { AppBarMobile } from '../../../components/AppBarMobile/src';
import { Box } from '../../../components/Box/src';
import { Button } from '../../../components/Button/src';
import { Row } from '../../../components/Row/src';
import { SegmentedControl } from '../../../components/SegmentedControl/src';
import { IconButton } from '../../../components/IconButton/src';
import { Logo } from '../../../components/Logo/src';
import { BurgerIcon } from '../../../components/Icon/src';

export default {
    title: 'Surfaces/AppBarMobile',
    component: AppBarMobile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        top: <>Top</>,
        center: <>Center</>,
        bottom: <>Bottom</>,
    },
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Mid = {};

export const MidWithSomeComponents = {
    args: {
        top: (
            <>
                <IconButton
                    onClick={fn()}
                    variant="outlined"
                    icon={<BurgerIcon color="layout.onSurface.secondary" />}
                />
                <Logo />
            </>
        ),
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
    },
};
