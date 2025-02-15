import { styled } from '@hautechai/webui.themeprovider';

const Text4 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const Text5 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`;

const variants = {
    Text4,
    Text5,
};

export type TypographyProps = {
    variant: keyof typeof variants;
    children: React.ReactNode;
};

export const Typography = (props: TypographyProps) => {
    const Variant = variants[props.variant];

    return <Variant>{props.children}</Variant>;
};
