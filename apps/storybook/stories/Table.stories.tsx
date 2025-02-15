import * as Table from '../../../components/Table/src';

export default {
    title: 'Data Display/Table',
    component: Table.Root,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Main = {
    args: {
        children: (
            <>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadCell>Header 1</Table.HeadCell>
                        <Table.HeadCell>Header 2</Table.HeadCell>
                        <Table.HeadCell>Header 3</Table.HeadCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </>
        ),
    },
};
