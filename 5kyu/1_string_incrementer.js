// ID: 54a91a4883a7de5d7800009c
// Date: 27.01.2023


console.log(incrementString("foobar000", "foobar001"))
console.log(incrementString("foobar999", "foobar1000"))
console.log(incrementString("foobar00999", "foobar01000"))
console.log(incrementString("foo", "foo1"))
console.log(incrementString("1", "2"))

function incrementString(str, res) {
    const num = str.match(/[0-9]+$/g) || [""]
    const text = str.slice(0,str.length-num[0].length)
    const incremented = (+num) + 1
    return num[0].charAt(0) === "0" ? text + ("0".repeat(num[0].length) + incremented).slice(-num[0].length) : text + incremented
}