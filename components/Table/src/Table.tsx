import { ComponentProps } from 'react';
import * as S from './Table.styled';

export type TableRootProps = ComponentProps<typeof S.Root> & {
    testId?: string;
};

export const Root = (props: TableRootProps) => {
    const { testId, ...otherProps } = props;
    return <S.Root data-testid={testId} {...otherProps}></S.Root>;
};

export const Head = (props: ComponentProps<typeof S.Head>) => {
    return <S.Head {...props}></S.Head>;
};

export const HeadCell = (props: ComponentProps<typeof S.HeadCell>) => {
    return <S.HeadCell {...props}></S.HeadCell>;
};

export const Body = (props: ComponentProps<typeof S.Body>) => {
    return <S.Body {...props}></S.Body>;
};

export const Row = (props: ComponentProps<typeof S.Row>) => {
    return <S.Row {...props}></S.Row>;
};

export const Cell = (props: ComponentProps<typeof S.Cell>) => {
    return <S.Cell {...props}></S.Cell>;
};
