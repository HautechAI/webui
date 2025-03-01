import { Button } from '@hautechai/webui.button';
import { DataItem } from '@hautechai/webui.dataitem';
import { Panel } from '@hautechai/webui.panel';
import { Row } from '@hautechai/webui.row';

export type UserBalanceProps = {
    balance: string;
    label?: string;
};

export const UserBalance = (props: UserBalanceProps) => {
    const { label = 'Balance' } = props;
    return (
        <Panel hierarchy="high">
            <Row spacing="ml" stretch>
                <DataItem label={label} value={props.balance} size="small" stretch />
                <Button label="Top up" size="small" />
            </Row>
        </Panel>
    );
};
