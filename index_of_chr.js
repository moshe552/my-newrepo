function getIndexOfChar(str, chr) {
    for (let index = 0; index < str.length; index++) {
        if (str[index] === chr) {
            return index
        }
    }
    return -1
}

console.log(getIndexOfChar("Hello world", "w"));
