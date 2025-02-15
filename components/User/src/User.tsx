import { Avatar } from '@hautechai/webui.avatar';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.foundation.spacing.ml}px;
    align-items: center;
`;

const LabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.xs}px;
`;

export type UserProps = {
    avatar?: string;
    title?: string;
    subtitle?: string;
};

export const User = (props: UserProps) => {
    return (
        <Container>
            <Avatar src={props.avatar} />
            <LabelsContainer>
                <Typography variant="Text5">{props.title}</Typography>
                <Typography variant="Text4">{props.subtitle}</Typography>
            </LabelsContainer>
        </Container>
    );
};
