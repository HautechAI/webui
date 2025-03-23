import { Row } from '@hautechai/webui.row';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { OperationItemProps } from './OperationItem.types';

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
    padding: ${({ theme }) => theme.foundation.spacing.s}px;
    min-width: 310px;
    flex-grow: 1;
`;

const UnreadIndicator = styled('div')`
    background-color: ${({ theme }) => theme.palette.actions.primary};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    height: 6px;
    width: 6px;
`;

const TopContainer = styled('div')`
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

const Progress = styled('div')<{ value: number }>`
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.actions.primary};
    width: ${({ value }) => value * 100}%;
`;

export const OperationItem = (props: OperationItemProps) => {
    return (
        <Container>
            <TopContainer>
                <Row align="center" justify="space-between" spacing="s">
                    <Row align="center" spacing="s">
                        {props.unread && <UnreadIndicator />}
                        <Typography color="layout.onSurface.secondary" variant="LabelMediumRegular">
                            {props.title}
                        </Typography>
                    </Row>
                    {props.previews}
                    {props.badge}
                </Row>
                <Typography color="layout.onSurface.tertiary" variant="LabelSmallRegular">
                    {props.date}
                </Typography>
            </TopContainer>
            {props.chips && (
                <Row spacing="m" wrap>
                    {props.chips}
                </Row>
            )}
            {props.progress !== undefined && <Progress value={props.progress} />}
        </Container>
    );
};
