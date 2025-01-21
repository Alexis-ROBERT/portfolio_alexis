import type {DragEventBase, DragInfoDocument} from './bases.type';

export function baseEventHandler<E, M extends Function>(event: E, props: M | undefined): void {
    if (props !== undefined) {
        const Dipatchprops = props as Function;
        Dipatchprops(event);

        console.log('Hello World');
    }
}

export function baseInitObject<T extends object>(object: T, value: unknown): T {
    if (typeof object === 'object') {
        Object.entries(object as object).forEach((obj) => {
            if (typeof obj === typeof value) {
                // @ts-ignore
                object[obj[1]] = value;
                return;
            }

            throw new Error('');
        });
    }

    return object;
}

export function baseDragInfoDocumentHandler<E extends HTMLElement>(drag: DragEventBase<E>): DragInfoDocument | undefined {
    const items = drag.dataTransfer.items;

    if (items) {
        for (let i = 0; i <= items.length; i++) {
            if (items[i].kind === 'file') {
                return {
                    type: items[i].getAsFile()?.type,
                    name: items[i].getAsFile()?.name
                };
            }
        }
    }
}

export default {
    baseEventHandler,
    baseDragInfoDocumentHandler
};
