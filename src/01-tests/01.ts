export const sum = (a: number, b: number) => a + b;
export const multiPly = (a: number, b: number) => a * b;

export const splitWords = (sentence: string) => {
    const words = sentence
        .toLocaleLowerCase()
        .split(" ");
    return words.filter(w => w !== "")
        .map(w => w.replace("!", ""));
}