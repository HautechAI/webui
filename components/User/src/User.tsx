import { Avatar } from '@hautechai/webui.avatar';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${themeVars.spacing.m};
    align-items: center;
    flex: 1;
`;

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${themeVars.spacing.ml};
    align-items: center;
    flex: 1;
`;

const LabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${themeVars.spacing.xs};
`;

export type UserProps = {
    avatar?: string;
    title?: string;
    subtitle?: string;
    actions?: React.ReactNode;
    testId?: string;
};

export const User = (props: UserProps) => {
    return (
        <Container data-testid={props.testId || testId}>
            <UserContainer>
                <Avatar src={props.avatar!} initials={props?.title?.substring(0, 1)!} />
                <LabelsContainer>
                    <Typography variant="LabelMediumEmphasized" color="layout.onSurface.primary">
                        {props.title}
                    </Typography>
                    <Typography variant="LabelSmallEmphasized" color="layout.onSurface.tertiary">
                        {props.subtitle}
                    </Typography>
                </LabelsContainer>
            </UserContainer>
            {props.actions}
        </Container>
    );
};
