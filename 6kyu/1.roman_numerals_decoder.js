// 51b6249c4612257ac0000005
// 06.02.2023

const roman = "XIX"

function solution(roman) {
    let str = roman.toLowerCase()
    const vocabulary = {i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000}
    const negative = {iv: 4, ix: 9, xl: 40, xc: 90, cd: 400, cm: 900}
    let num = 0
    for (let number of Object.entries(negative)) {
        if(str.includes(number[0])) {
            str = str.replace(number[0], "")
            num += number[1]
        }
    }
    return str.split("").reduce((acc, item) => {
        return acc += vocabulary[item]
    }, num)
}

console.log(solution(roman))


