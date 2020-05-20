declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type StatsIndexFunc = <T>(input: Array<T>, comparator: Comparator<T>) => number;
    type StatsElementFunc = <T>(input: Array<T>, comparator: Comparator<T>) => T;

    export const getMaxIndex: StatsIndexFunc;
    export const getMinIndex: StatsIndexFunc;
    export const getMedianIndex: StatsIndexFunc;

    export const getMaxElement: StatsElementFunc;
    export const getMinElement: StatsElementFunc;
    export const getMedianElement: StatsElementFunc;
    export const getAverageValue: <T, U extends keyof T>(input: Array<T>, getValue: (obj: T) => T[U]) => number;
}

/*declare module 'stats' {
    export function getMaxIndex<T>(input: Array<T>, comparator: (a: T, b: T) => number): number;

    export function getMaxElement<T>(input: Array<T>, comparator: (a: T, b: T) => number): T;

    export function getMinIndex<T>(input: Array<T>, comparator: (a: T, b: T) => number): number;

    export function getMinElement<T>(input: Array<T>, comparator: (a: T, b: T) => number): T;

    export function getMedianIndex<T>(input: Array<T>, comparator: (a: T, b: T) => number): number;

    export function getMedianElement<T>(input: Array<T>, comparator: (a: T, b: T) => number): T;

    export function getAverageValue<T, U extends keyof T>(input: Array<T>, getValue: (obj: T) => T[U]): number;
}*/
