import { DataItem } from '../../../components/DataItem/src';
import { DataList } from '../../../components/DataList/src';

export default {
    title: 'Data Display/DataList',
    component: DataList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        children: (
            <>
                <DataItem label="Current plan" value="Basic" />
                <DataItem label="Current plan" value="Basic" />
                <DataItem label="Current plan" value="Basic" />
            </>
        ),
    },
};
