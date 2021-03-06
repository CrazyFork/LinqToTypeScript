import { ArgumentOutOfRangeException } from "../../src/index"
import { asAsync, expectAsync, itAsync, itEnumerable, itParallel } from "../TestHelpers"

describe("elementAt", () => {
    itEnumerable("Basic", (asEnumerable) => {
        expect(asEnumerable([1]).elementAt(0)).toBe(1)
        expect(asEnumerable([1, 2]).elementAt(1)).toBe(2)
    })

    itAsync("BasicAsync", async () => {
        expect(await asAsync([1]).elementAt(0)).toBe(1)
        expect(await asAsync([1, 2]).elementAt(1)).toBe(2)
    })

    itParallel("BasicParallel", async (asParallel) => {
        expect(await asParallel([1]).elementAt(0)).toBe(1)
        expect(await asParallel([1, 2]).elementAt(1)).toBe(2)
    })

    itEnumerable("empty array throws exception", (asEnumerable) =>
        expect(() => asEnumerable([]).elementAt(0)).toThrowError(ArgumentOutOfRangeException))

    itAsync("empty array throws exception async", async () => {
        const expect = await expectAsync(asAsync([]).elementAt(0))
        expect.toThrowError(ArgumentOutOfRangeException)
    })

    itParallel("empty array throws exception parallel", async (asParallel) => {
        const expect = await expectAsync(asParallel([]).elementAt(0))
        expect.toThrowError(ArgumentOutOfRangeException)
    })
})
