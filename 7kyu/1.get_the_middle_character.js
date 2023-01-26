// ID: 56747fd5cb988479af000028
// Date: 26.01.2023

const s = "abcde"

console.log(getMiddle(s))

function getMiddle(s) {
    return s.length % 2 === 0 ? s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2) : s.charAt(Math.ceil(s.length / 2 - 1))
}