import React, { ReactNode, useRef, useState, useCallback, useEffect } from 'react';
import { Badge } from '@hautechai/webui.badge';
import { Divider } from '@hautechai/webui.divider';
import { Row } from '@hautechai/webui.row';
import { Column } from '@hautechai/webui.column';
import { styled } from '@hautechai/webui.themeprovider';

export type ContextMenuProps = {
    heading?: {
        data: ReactNode;
        badge?: string;
    };
    menus?: ReactNode[];
    children: React.ReactNode;
};

const Container = styled(Column)<{ top: number; left: number }>`
    position: absolute;
    z-index: 1;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.s}px;
    min-width: 200px;
`;

const Heading = styled(Row)`
    padding: 0 ${({ theme }) => theme.foundation.spacing.ml}px;
`;

export const ContextMenu = ({ menus, heading, children }: ContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setPosition({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        isOpen
            ? document.addEventListener('click', handleClickOutside)
            : document.removeEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div onContextMenu={handleOpen} style={{ display: 'inline-block' }}>
            {children}
            {isOpen && (
                <div ref={menuRef}>
                    <Container top={position.y} left={position.x} spacing="m">
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
                </div>
            )}
        </div>
    );
};
