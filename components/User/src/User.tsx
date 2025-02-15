import { Avatar } from '@hautechai/webui.avatar';
import { styled } from '@hautechai/webui.themeprovider';

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
                <span>{props.title}</span>
                <span>{props.subtitle}</span>
            </LabelsContainer>
        </Container>
    );
};
