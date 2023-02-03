const palindromes = function (word) {
    let lowcap = word.toLowerCase()
    let newWord = lowcap.replace(/[^A-Za-z0-9]/g,"");
    let revWord = newWord.split("").reverse().join("");
    if(newWord == revWord){
        return true
    }else{return false}
}

// Do not edit below this line
module.exports = palindromes;

