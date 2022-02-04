import { expect } from "@jest/globals";
import {divide} from "./divide"

//sub test

test ('divides 100 / 4 to equal 25', () =>{
    expect(
        divide(100,4)
    ).toBe(25);
})