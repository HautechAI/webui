import { styled } from '@hautechai/webui.themeprovider';

const Text1 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const Text2 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

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

const Text6 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

const Text7 = styled.div`
    color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
`;

const variants = {
    Text1,
    Text2,
    Text4,
    Text5,
    Text6,
    Text7,
};

export type TypographyProps = {
    variant: keyof typeof variants;
    children: React.ReactNode;
};

export const Typography = (props: TypographyProps) => {
    const Variant = variants[props.variant];

    return <Variant>{props.children}</Variant>;
};
