const palindromes = function (word) {
    let myWord = word.toLowerCase()
    if (myWord.includes("!")) {
        let newword = myWord.replace("!", "");
        sWord = newword.split("").reverse().join("");
        if(newword == sWord){
            return true
        }
    } else
        if (myWord != myWord.includes("!")) {
            let pWord = myWord.split("").reverse().join("");
            if (myWord == pWord) {
                return true
            } else {return false}
        }
};

// Do not edit below this line
module.exports = palindromes;

