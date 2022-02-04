import { expect } from "@jest/globals";
import {sub} from "./sub.js"

//sub test

test ('subs 6 - 3 to equal 3', () =>{
    expect(
        sub(6,3)
    ).toBe(3);
})