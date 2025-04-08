import React, { ReactNode, useRef, useState, useCallback, useEffect } from 'react';
import { Badge } from '@hautechai/webui.badge';
import { Divider } from '@hautechai/webui.divider';
import { Row } from '@hautechai/webui.row';
import { Column } from '@hautechai/webui.column';
import { CloseIcon } from '@hautechai/webui.icon';
import { IconButton } from '@hautechai/webui.iconbutton';
import { BottomSheet } from '@hautechai/webui.bottomsheet';
import { styled, ThemeType } from '@hautechai/webui.themeprovider';

export type ContextMenuProps = {
    heading?: {
        data: ReactNode;
        badge?: string;
    };
    menus?: ReactNode[];
    children: React.ReactNode;
    variation?: 'menu' | 'bottomSheet';
    isLeftClick?: boolean;
};

const Container = styled.div<{
    isOpen?: boolean;
    top: number;
    left: number;
    spacing?: keyof ThemeType['foundation']['spacing'];
}>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, spacing }) => (spacing ? theme.foundation.spacing[spacing] : 0)}px;
    position: absolute;
    z-index: 1;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;

    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.foundation.animation.duration.fast}s
        ${({ theme }) => theme.foundation.animation.timing.easeOut};

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.s}px;
    min-width: 200px;
`;

const MobileContainer = styled(Column)`
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.s}px;
`;

const Heading = styled(Row)`
    padding: 0 ${({ theme }) => theme.foundation.spacing.ml}px;
`;

export const ContextMenu = ({ menus, heading, children, variation = 'menu', isLeftClick }: ContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isLeftClick) {
            e.preventDefault();
        }
        const targetRect = e.currentTarget.getBoundingClientRect();
        setIsOpen(true);
        requestAnimationFrame(() => {
            if (menuRef.current) {
                const rect = menuRef.current.getBoundingClientRect();

                let leftPos = 0;
                let topPos = 0;

                if (isLeftClick) {
                    leftPos = targetRect.left;
                    topPos = targetRect.bottom + 4;

                    if (leftPos + rect.width > window.innerWidth) {
                        leftPos = window.innerWidth - rect.width - 4;
                    }
                    if (topPos + rect.height > window.innerHeight) {
                        topPos = targetRect.top - rect.height - 4;
                    }
                } else {
                    leftPos = e.clientX;
                    topPos = e.clientY;

                    if (e.pageX + rect.width > window.innerWidth) {
                        leftPos = window.innerWidth - rect.width - 4;
                    }
                    if (e.pageY + rect.height > window.innerHeight) {
                        topPos = window.innerHeight - rect.height - 4;
                    }
                }

                setPosition({ x: leftPos, y: topPos });
            }
        });
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isOpen) {
            timeoutId = setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 0);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            onContextMenu={!isLeftClick ? handleOpen : undefined}
            onClick={isLeftClick ? handleOpen : undefined}
            style={{ display: 'inline-block' }}
        >
            {children}
            {isOpen &&
                (variation === 'bottomSheet' ? (
                    <BottomSheet open onClose={handleClose}>
                        <MobileContainer spacing="m" stretch>
                            <Row justify="flex-end">
                                <IconButton icon={<CloseIcon />} onClick={handleClose} variant="flat" size="small" />
                            </Row>
                            {heading && (
                                <>
                                    <Heading spacing="l" align="center">
                                        {heading.data}
                                        {heading.badge && <Badge color="info" label={heading.badge} />}
                                    </Heading>
                                    <Divider />
                                </>
                            )}
                            {menus?.map((component, index) => (
                                <React.Fragment key={index}>
                                    {component}
                                    {index < menus.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}
                        </MobileContainer>
                    </BottomSheet>
                ) : (
                    <Container isOpen={isOpen} top={position.y} left={position.x} spacing="m" ref={menuRef}>
                        {heading && (
                            <>
                                <Heading spacing="l" align="center">
                                    {heading.data}
                                    {heading.badge && <Badge color="info" label={heading.badge} />}
                                </Heading>
                                <Divider />
                            </>
                        )}
                        {menus?.map((component, index) => (
                            <React.Fragment key={index}>
                                {component}
                                {index < menus.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Container>
                ))}
        </div>
    );
};
