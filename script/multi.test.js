import {multi} from "./multi"

//sub test

test ('multiplies 20 * 4 to equal 80', () =>{
    expect(
        multi(20,4)
    ).toBe(80);
})