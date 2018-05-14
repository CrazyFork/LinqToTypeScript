import { IAsyncParallel, IComparer, IEqualityComparer, IGrouping, InferType, ITuple, OfType } from "../shared/shared";
import { IAsyncEqualityComparer } from "./../shared/IAsyncEqualityComparer";
import { IAsyncEnumerable } from "./IAsyncEnumerable";
import { IOrderedAsyncEnumerable } from "./IOrderedAsyncEnumerable";
/**
 * The class behind IAsyncEnumerable<T>
 * @private
 */
export declare class BasicAsyncEnumerable<TSource> implements IAsyncEnumerable<TSource> {
    private readonly iterator;
    constructor(iterator: () => AsyncIterableIterator<TSource>);
    asParallel(): IAsyncParallel<TSource>;
    aggregate(func: (x: TSource, y: TSource) => TSource): Promise<TSource>;
    aggregate<TAccumulate>(seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate): Promise<TAccumulate>;
    aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (x: TAccumulate, y: TSource) => TAccumulate, resultSelector: (x: TAccumulate) => TResult): Promise<TResult>;
    all(predicate: (x: TSource) => boolean): Promise<boolean>;
    allAsync(predicate: (x: TSource) => Promise<boolean>): Promise<boolean>;
    any(predicate?: (x: TSource) => boolean): Promise<boolean>;
    anyAsync(predicate: (x: TSource) => Promise<boolean>): Promise<boolean>;
    average(this: IAsyncEnumerable<number>): Promise<number>;
    average(selector: (x: TSource) => number): Promise<number>;
    averageAsync(selector: (x: TSource) => Promise<number>): Promise<number>;
    concat(second: IAsyncEnumerable<TSource>): IAsyncEnumerable<TSource>;
    contains(value: TSource, comparer?: IEqualityComparer<TSource>): Promise<boolean>;
    containsAsync(value: TSource, comparer: IAsyncEqualityComparer<TSource>): Promise<boolean>;
    count(predicate?: (x: TSource) => boolean): Promise<number>;
    countAsync(predicate: (x: TSource) => Promise<boolean>): Promise<number>;
    distinct(comparer?: IEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    distinctAsync(comparer: IAsyncEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    elementAt(index: number): Promise<TSource>;
    elementAtOrDefault(index: number): Promise<TSource | null>;
    each(action: (x: TSource) => void): IAsyncEnumerable<TSource>;
    eachAsync(action: (x: TSource) => Promise<void>): IAsyncEnumerable<TSource>;
    except(second: IAsyncEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    exceptAsync(second: IAsyncEnumerable<TSource>, comparer: IAsyncEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    first(predicate?: (x: TSource) => boolean): Promise<TSource>;
    firstAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource>;
    firstOrDefault(predicate?: (x: TSource) => boolean): Promise<TSource | null>;
    firstOrDefaultAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource | null>;
    groupBy(keySelector: (x: TSource) => number): IAsyncEnumerable<IGrouping<number, TSource>>;
    groupBy(keySelector: (x: TSource) => string): IAsyncEnumerable<IGrouping<string, TSource>>;
    groupBy<TKey>(keySelector: (x: TSource) => TKey, comparer: IEqualityComparer<TKey>): IAsyncEnumerable<IGrouping<TKey, TSource>>;
    groupByWithSel<TElement>(keySelector: ((x: TSource) => number), elementSelector: (x: TSource) => TElement): IAsyncEnumerable<IGrouping<number, TElement>>;
    groupByWithSel<TElement>(keySelector: ((x: TSource) => string), elementSelector: (x: TSource) => TElement): IAsyncEnumerable<IGrouping<string, TElement>>;
    groupByWithSel<TKey, TElement>(keySelector: ((x: TSource) => TKey), elementSelector: (x: TSource) => TElement, comparer: IEqualityComparer<TKey>): IAsyncEnumerable<IGrouping<TKey, TElement>>;
    intersect(second: IAsyncEnumerable<TSource>, comparer?: IEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    joinByKey<TInner, TKey, TResult>(inner: IAsyncEnumerable<TInner>, outerKeySelector: (x: TSource) => TKey, innerKeySelector: (x: TInner) => TKey, resultSelector: (x: TSource, y: TInner) => TResult, comparer?: IEqualityComparer<TKey>): IAsyncEnumerable<TResult>;
    last(predicate?: (x: TSource) => boolean): Promise<TSource>;
    lastAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource>;
    lastOrDefault(predicate?: (x: TSource) => boolean): Promise<TSource | null>;
    lastOrDefaultAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource | null>;
    max(this: IAsyncEnumerable<number>): Promise<number>;
    max(selector: (x: TSource) => number): Promise<number>;
    maxAsync(selector: (x: TSource) => Promise<number>): Promise<number | never>;
    min(this: IAsyncEnumerable<number>): Promise<number | never>;
    min(selector: (x: TSource) => number): Promise<number | never>;
    minAsync(selector: (x: TSource) => Promise<number>): Promise<number | never>;
    ofType<TType extends OfType>(type: TType): IAsyncEnumerable<InferType<TType>>;
    orderBy<TKey>(predicate: (x: TSource) => TKey, comparer?: IComparer<TKey>): IOrderedAsyncEnumerable<TSource>;
    orderByAsync<TKey>(predicate: (x: TSource) => Promise<TKey>, comparer?: IComparer<TKey>): IOrderedAsyncEnumerable<TSource>;
    orderByDescending<TKey>(predicate: (x: TSource) => TKey, comparer?: IComparer<TKey>): IOrderedAsyncEnumerable<TSource>;
    orderByDescendingAsync<TKey>(predicate: (x: TSource) => Promise<TKey>, comparer?: IComparer<TKey>): IOrderedAsyncEnumerable<TSource>;
    reverse(): IAsyncEnumerable<TSource>;
    select<OUT>(selector: (x: TSource) => OUT): IAsyncEnumerable<OUT>;
    selectAsync<OUT>(selector: (x: TSource) => OUT): IAsyncEnumerable<OUT>;
    selectAsync<TKey extends keyof TSource, TResult>(this: IAsyncEnumerable<{
        [key: string]: Promise<TResult>;
    }>, selector: TKey): IAsyncEnumerable<TResult>;
    selectMany<TBindedSource extends {
        [key: string]: Iterable<TOut>;
    }, TOut>(this: IAsyncEnumerable<TBindedSource>, selector: keyof TBindedSource): IAsyncEnumerable<TOut>;
    selectMany<Y>(selector: (x: TSource) => Iterable<Y>): IAsyncEnumerable<Y>;
    selectManyAsync<Y>(selector: (x: TSource) => Promise<Iterable<Y>>): IAsyncEnumerable<Y>;
    sequenceEquals(second: AsyncIterable<TSource>, comparer?: IEqualityComparer<TSource>): Promise<boolean>;
    sequenceEqualsAsync(second: AsyncIterable<TSource>, comparer: IAsyncEqualityComparer<TSource>): Promise<boolean>;
    single(predicate?: (x: TSource) => boolean): Promise<TSource>;
    singleAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource>;
    singleOrDefault(predicate?: (x: TSource) => boolean): Promise<TSource | null>;
    singleOrDefaultAsync(predicate: (x: TSource) => Promise<boolean>): Promise<TSource | null>;
    skip(count: number): IAsyncEnumerable<TSource>;
    skipWhile(predicate: (x: TSource, index: number) => boolean): IAsyncEnumerable<TSource>;
    skipWhileAsync(predicate: (x: TSource, index: number) => Promise<boolean>): IAsyncEnumerable<TSource>;
    sum(this: IAsyncEnumerable<number>): Promise<number>;
    sum(selector: (x: TSource) => number): Promise<number>;
    sumAsync(selector: (x: TSource) => Promise<number>): Promise<number>;
    take(amount: number): IAsyncEnumerable<TSource>;
    takeWhile(predicate: (x: TSource, index: number) => boolean): IAsyncEnumerable<TSource>;
    takeWhileAsync(predicate: (x: TSource, index: number) => Promise<boolean>): IAsyncEnumerable<TSource>;
    toArray(): Promise<TSource[]>;
    toMap<TKey>(selector: (x: TSource) => TKey): Promise<Map<TKey, TSource[]>>;
    toMapAsync<TKey>(selector: (x: TSource) => Promise<TKey>): Promise<Map<TKey, TSource[]>>;
    toSet(): Promise<Set<TSource>>;
    union(second: AsyncIterable<TSource>, comparer?: IEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    unionAsync(second: AsyncIterable<TSource>, comparer: IAsyncEqualityComparer<TSource>): IAsyncEnumerable<TSource>;
    where(predicate: (x: TSource) => boolean): IAsyncEnumerable<TSource>;
    where(predicate: (x: TSource, index: number) => boolean): IAsyncEnumerable<TSource>;
    whereAsync(predicate: (x: TSource, index: number) => Promise<boolean>): IAsyncEnumerable<TSource>;
    zip<TSecond, TResult>(second: AsyncIterable<TSecond>, resultSelector: (x: TSource, y: TSecond) => TResult): IAsyncEnumerable<TResult>;
    zip<TSecond>(second: AsyncIterable<TSecond>): IAsyncEnumerable<ITuple<TSource, TSecond>>;
    zipAsync<TSecond, TResult>(second: AsyncIterable<TSecond>, resultSelector: (x: TSource, y: TSecond) => Promise<TResult>): IAsyncEnumerable<TResult>;
    [Symbol.asyncIterator](): AsyncIterableIterator<TSource>;
}
