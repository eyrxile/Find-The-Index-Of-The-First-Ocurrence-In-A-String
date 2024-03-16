var strStr = function(haystack, needle) {
    if(needle === "") return 0;

    for(let i=0; i<= haystack.length; i++){
        if(haystack.substring(i, i+needle.length) === needle){
            return i;
        }
    }

    return -1;
};

//Example usage
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));