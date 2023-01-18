module.exports = function check(str, bracketsConfig) {
    let string = str.split('')

    let i = 0

    while (i < str.length) {
        bracketsConfig.forEach((item) => {
            if(item[1] === string[i] && item[0] === string[i-1]) {
                string.splice(i-1, 2)
                i = 0
            }
        })
        i++
    }


    return !string.length
}
