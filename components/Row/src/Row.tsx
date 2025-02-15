import { styled, ThemeType } from '@hautechai/webui.themeprovider';

const Container = styled.div<Required<Pick<DataListProps, 'spacing'>>>`
    display: flex;
    flex-direction: row;
    gap: ${({ theme, spacing }) => theme.foundation.spacing[spacing]}px;
`;

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
    spacing?: keyof ThemeType['foundation']['spacing'];
};

export const Row = (props: DataListProps) => {
    const { spacing = 'm' } = props;
    return (
        <Container spacing={spacing} className={props.className}>
            {props.children}
        </Container>
    );
};
