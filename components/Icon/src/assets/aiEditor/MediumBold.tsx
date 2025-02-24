import * as React from 'react';
import type { SVGProps } from 'react';
import { type ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import { DeepKeys } from '../../types';
import { get } from 'lodash';
const SvgMedium = (
    props: SVGProps<SVGSVGElement> & {
        color?: DeepKeys<ThemeType['palette']> | 'currentColor' | 'currentColor' | `#${string}` | `rgba(${string})`;
    },
) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                fillRule="evenodd"
                d="M16.195 7.805a2.75 2.75 0 0 0-3.888 0l-9.253 9.253a2.749 2.749 0 1 0 3.887 3.887l9.254-9.253a2.75 2.75 0 0 0 0-3.887m-3.085.802a1.614 1.614 0 0 1 2.282 2.283l-1.199 1.2-2.282-2.283zM6.139 20.143l7.25-7.25-2.281-2.283-7.251 7.252a1.613 1.613 0 1 0 2.282 2.28Z"
                clipRule="evenodd"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="m6.139 20.143 7.25-7.25-2.281-2.283-7.251 7.252a1.613 1.613 0 1 0 2.282 2.28Zm16.957-2.871-.987-.293a2.52 2.52 0 0 1-1.734-1.733l-.294-.986c-.106-.347-.666-.347-.773 0l-.293.986a2.52 2.52 0 0 1-1.735 1.733l-.987.293c-.16.053-.293.213-.293.373s.107.32.293.373l.988.294a2.52 2.52 0 0 1 1.734 1.732l.293.986c.053.16.213.294.373.294s.32-.107.374-.294l.293-.986a2.52 2.52 0 0 1 1.734-1.732l.987-.294c.16-.053.294-.213.294-.373s-.08-.32-.267-.373m-3.388 2.319a3.4 3.4 0 0 0-1.92-1.92 3.4 3.4 0 0 0 1.92-1.918 3.4 3.4 0 0 0 1.92 1.919 3.4 3.4 0 0 0-1.92 1.919"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M19.708 19.591a3.4 3.4 0 0 0-1.92-1.92 3.4 3.4 0 0 0 1.92-1.918 3.4 3.4 0 0 0 1.92 1.919 3.4 3.4 0 0 0-1.92 1.919M22.746 4.11l-.938-.278a2.4 2.4 0 0 1-1.649-1.647l-.279-.938c-.101-.33-.634-.33-.735 0l-.28.938a2.4 2.4 0 0 1-1.648 1.647l-.938.279c-.152.05-.279.203-.279.355s.101.304.279.354l.938.28c.812.227 1.42.86 1.649 1.646l.279.938c.05.152.203.279.355.279a.37.37 0 0 0 .355-.279l.28-.938A2.4 2.4 0 0 1 21.782 5.1l.938-.279c.152-.05.279-.202.279-.354s-.076-.305-.254-.355Zm-3.22 2.206a3.23 3.23 0 0 0-1.827-1.825 3.23 3.23 0 0 0 1.826-1.825c.33.837.99 1.495 1.826 1.825a3.23 3.23 0 0 0-1.826 1.825Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M19.525 6.316A3.23 3.23 0 0 0 17.7 4.49a3.23 3.23 0 0 0 1.826-1.825c.33.837.99 1.495 1.826 1.825a3.23 3.23 0 0 0-1.826 1.825ZM8.101 5.274l-.988-.293a2.52 2.52 0 0 1-1.735-1.734l-.294-.987c-.106-.347-.667-.347-.774 0l-.293.987A2.52 2.52 0 0 1 2.28 4.981l-.987.293c-.16.054-.294.214-.294.374s.107.32.294.373l.987.294c.855.24 1.495.907 1.736 1.734l.293.987c.054.16.214.293.374.293s.32-.107.374-.293l.293-.987a2.52 2.52 0 0 1 1.736-1.734l.987-.294c.16-.053.294-.213.294-.373s-.08-.32-.267-.374Zm-3.39 2.321a3.4 3.4 0 0 0-1.922-1.92A3.4 3.4 0 0 0 4.71 3.753a3.4 3.4 0 0 0 1.922 1.92A3.4 3.4 0 0 0 4.71 7.595Z"
            />
            <path
                fill={
                    get(
                        theme.palette,
                        props.color as keyof ThemeType['palette'],
                        props.color ?? 'currentColor',
                    ) as string
                }
                d="M4.71 7.595a3.4 3.4 0 0 0-1.921-1.92A3.4 3.4 0 0 0 4.71 3.753a3.4 3.4 0 0 0 1.922 1.92A3.4 3.4 0 0 0 4.71 7.595"
            />
        </svg>
    );
};
export default SvgMedium;
