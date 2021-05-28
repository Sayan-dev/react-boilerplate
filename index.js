"use strict"
module.exports = function tinyString(string){
    if(typeof string!=="string"){
        throw new TypeError("It requires a string")
    }
    return string.replace(/\s/g,"")
}