import { Paths } from 'type-fest';

export type DeepKeys<T> = Exclude<Paths<T>, keyof T>;
