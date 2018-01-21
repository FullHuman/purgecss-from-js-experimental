import purgejs from "./../index.js"
import { TEST_1_CONTENT, TEST_1_CLASSNAMES } from "./data"

describe("purgehtml", () => {
    it("finds the classnames", () => {
        const received = purgejs.extract(TEST_1_CONTENT)
        for (let item of TEST_1_CLASSNAMES) {
            expect(received.includes(item)).toBe(true)
        }
    })

})
