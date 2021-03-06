import { InvalidOperationException } from "../../src/index"
import { asAsync, expectAsync, itAsync, itEnumerableAsync, itParallel } from "../TestHelpers"

describe("minAsync", () => {

    itEnumerableAsync("MinPredicate Empty Error", async (asEnumerable) => {
        const expect = await expectAsync(asEnumerable([] as number[]).minAsync(async (x) => x * x))
        expect.toThrowError(InvalidOperationException)
    })

    itAsync("MinPredicate Empty Error Async", async () => {
        const expectMin = await expectAsync(asAsync([] as number[]).minAsync(async (x) => x * x))
        expectMin.toThrowError(InvalidOperationException)
    })

    itParallel("MinPredicate Empty Error Parallel", async (asParallel) => {
        const expectMin = await expectAsync(asParallel([]).minAsync(async (x) => x * x))
        expectMin.toThrowError(InvalidOperationException)
    })

    itEnumerableAsync("Min Predicate", async (asEnumerable) => {
        const expect = await expectAsync(asEnumerable([1, 2, 3, -7]).minAsync(async (x) => Math.abs(x)))
        expect.toBe(1)
    })

    itAsync("Min Predicate Async", async () => {
        const expectMin = await expectAsync(asAsync([1, 2, 3, -7]).min(Math.abs))
        expectMin.toBe(1)
    })

    itParallel("Min Predicate Parallel", async (asParallel) => {
        const expectMin = await expectAsync(asParallel([1, 2, 3, -7]).minAsync(async (x) => Math.abs(x)))
        expectMin.toBe(1)
    })

    itEnumerableAsync("empty exception with selector", async (asEnumerable) => {
        const expect = await expectAsync(asEnumerable([]).minAsync(async (x) => x))
        expect.toThrowError(InvalidOperationException)
    })

    //#region Infinity Test

    itEnumerableAsync("Infinity Test", async (asEnumerable) => {
        const min = await asEnumerable([ Number.POSITIVE_INFINITY ])
            .minAsync(async (x) => x)
        expect(min).toBe(Number.POSITIVE_INFINITY)
    })

    itAsync("Infinity Test", async () => {
        const min2 = await asAsync([ Number.POSITIVE_INFINITY ])
            .minAsync(async (x) => x)
        expect(min2).toBe(Number.POSITIVE_INFINITY)
    })

    itParallel("Infinity Test", async (asParallel) => {
        const min = await asParallel([ Number.POSITIVE_INFINITY ])
            .minAsync(async (x) => x)
        expect(min).toBe(Number.POSITIVE_INFINITY)
    })

    //#endregion
})
