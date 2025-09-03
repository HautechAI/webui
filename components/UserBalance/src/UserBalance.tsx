import { Button } from '@hautechai/webui.button';
import { DataItem } from '@hautechai/webui.dataitem';
import { Panel } from '@hautechai/webui.panel';
import { Row } from '@hautechai/webui.row';

export type UserBalanceProps = {
    balance: string;
    buttonLabel?: string;
    label?: string;
    onTopUpClick?: () => void;
    testId?: string;
};

export const UserBalance = (props: UserBalanceProps) => {
    const { label = 'Balance', buttonLabel = 'Top up' } = props;
    return (
        <Panel hierarchy="high" data-testid={props.testId}>
            <Row spacing="ml" stretch>
                <DataItem label={label} value={props.balance} size="small" stretch />
                <Button label={buttonLabel} size="small" onClick={props.onTopUpClick} />
            </Row>
        </Panel>
    );
};
