//1.Roman to Integer//
var romanToInt = function(s) {
    let num = 0;
    let objRoman = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }

    for(let i=0; i<s.length; i++){
         if(objRoman[s[i]] < objRoman[s[i+1]]){
             num=num-objRoman[s[i]]
         }else{
              num=num+objRoman[s[i]]
         }
    }
    return num
};
console.log(romanToInt("XL"))


//2.Longest Common Prefix//

var longestCommonPrefix = function(strs) {

   if (strs.length === 0) return "";
let prefix = strs[0];
for (let i = 1; i < strs.length; i++) {
  while (strs[i].indexOf(prefix) !== 0) {
    prefix = prefix.substring(0, prefix.length - 1);
    if (prefix === "") return "";
  }
}
return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))


//3. Valid Parentheses//
var isValid = function(s) {
  const stack = [];
const pairs = {
  "(": ")",
  "{": "}",
  "[": "]"
};

for (let i = 0; i < s.length; i++) {
  const char = s[i];
  if (pairs[char]) {
    stack.push(char);
  } else if (char === ")" || char === "}" || char === "]") {
    const last = stack.pop();
    if (pairs[last] !== char) {
      return false;
    }
  }
}

return stack.length === 0;
};

const s = "()[]{}";
const isValidParentheses = isValid(s);
console.log(isValidParentheses);


// 4.Find the Index of First Occurrence in a String//

var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
  if (haystack.substring(i, i + needle.length) === needle) {
    return i;
  }
}
return -1;
};


//5.Length of Last Word//

var lengthOfLastWord = function(s) {
  let length = 0;
let foundLastWord = false;

for (let i = s.length - 1; i >= 0; i--) {
 if (s[i] !== " ") {
   foundLastWord = true;
   length++;
 } else if (foundLastWord) {
   break;
 }
}

return length;
};