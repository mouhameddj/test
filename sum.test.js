const sum = require("./sum")

describe(
    'test sum',()=>{
        test('test 2-1 = 1', () => {
            expect(sum(2,1)).toBe(1)
         })
    }
)
