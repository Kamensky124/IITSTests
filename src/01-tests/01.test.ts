import {multiPly, splitWords, sum} from "./01";

// Don't act like this
// let a: number = 1;
// let b: number = 200;
// let c: number = 3;

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 1;
    b = 200;
    c = 3;
})

const send1: string = "hi son";
const send2: string = "js good Lang!"

test('sum should be correct', () => {
    //data
    a = 100;
    //action
    const result = sum(a, b);
    expect(result).toEqual(3);
})

test('multiPly should be correct', () => {
    //data
    //action
    const result2 = multiPly(a, c);
    expect(result2).toEqual(3);
})

test('splitWords correct', () => {
    //data

    //action

    const result1 = splitWords(send1);
    const result2 = splitWords(send2);
    expect(result1.length).toBe(2);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("good");
    expect(result2[2]).toBe("lang");
});