import '@testing-library/jest-dom';

// Mock IntersectionObserver for components that use it (with required fields)
class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];
    constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
}
(globalThis as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;

// Mock ResizeObserver for components that use it
global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
} as typeof ResizeObserver;

// Minimal PointerEvent polyfill for JSDOM (provides clientX/clientY + common fields)
interface PointerEventInitExtended extends MouseEventInit {
    pointerId?: number;
    width?: number;
    height?: number;
    pressure?: number;
    tangentialPressure?: number;
    tiltX?: number;
    tiltY?: number;
    twist?: number;
    pointerType?: string;
    isPrimary?: boolean;
}

const globalRecord: Record<string, unknown> = globalThis as unknown as Record<string, unknown>;
if (typeof globalRecord.PointerEvent === 'undefined') {
    class MockPointerEvent extends MouseEvent {
        pointerId: number;
        width: number;
        height: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        pointerType: string;
        isPrimary: boolean;
        constructor(type: string, params: PointerEventInitExtended = {}) {
            super(type, params);
            this.pointerId = params.pointerId ?? 1;
            this.width = params.width ?? 0;
            this.height = params.height ?? 0;
            this.pressure = params.pressure ?? 0;
            this.tangentialPressure = params.tangentialPressure ?? 0;
            this.tiltX = params.tiltX ?? 0;
            this.tiltY = params.tiltY ?? 0;
            this.twist = params.twist ?? 0;
            this.pointerType = params.pointerType ?? 'mouse';
            this.isPrimary = params.isPrimary !== false; // default true
        }
    }
    globalRecord.PointerEvent = MockPointerEvent as unknown;
}
