const sum = require("./sum")

describe(
    'test sum',()=>{
        test('test 2+2 = 4', () => {
            expect(sum(2,2)).toBe(4)
         })
    }
)
