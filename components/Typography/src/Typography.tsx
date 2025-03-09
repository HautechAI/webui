import { styled, ThemeType } from '@hautechai/webui.themeprovider';
import { Paths } from 'type-fest';
import { get } from 'lodash';

type TextAlign = 'left' | 'right' | 'center' | 'inherit';

const BaseText = styled.div<{ textAlign?: TextAlign }>`
    font-family: Inter;
    color: ${({ theme, color }) => (color ? get(theme.palette, color) : 'currentColor')};
    text-align: ${({ textAlign }) => textAlign ?? 'inherit'};
`;

// Heading

const H1 = styled(BaseText)`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`;

const H2 = styled(BaseText)`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const H3 = styled(BaseText)`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

// Label

const LabelMediumButton = styled(BaseText)`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

const LabelMediumEmphasized = styled(BaseText)`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const LabelMediumRegular = styled(BaseText)`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

const LabelSmallEmphasized = styled(BaseText)`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;

const LabelSmallRegular = styled(BaseText)`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

// Body

const Body = styled(BaseText)`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

// Caption

const CaptionEmphasized = styled(BaseText)`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

const CaptionRegular = styled(BaseText)`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

// Link

const LinkSmall = styled(BaseText)`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;

const LinkExtraSmall = styled(BaseText)`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;

const variants = {
    H1,
    H2,
    H3,
    LabelMediumButton,
    LabelMediumEmphasized,
    LabelMediumRegular,
    LabelSmallEmphasized,
    LabelSmallRegular,
    Body,
    CaptionEmphasized,
    CaptionRegular,
    LinkSmall,
    LinkExtraSmall,
};

export type TypographyProps = {
    className?: string;
    variant: keyof typeof variants;

    children: React.ReactNode;
    color?: Paths<ThemeType['palette'], { leavesOnly: true }>;
    textAlign?: TextAlign;
};

export const Typography = (props: TypographyProps) => {
    const { variant, ...rest } = props;

    const Variant = variants[props.variant];

    return <Variant {...rest} />;
};
