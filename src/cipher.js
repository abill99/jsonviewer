export default function Cipher(word) {
  this.word = word;
}

function reverse(firstLetter, lastLetter){
  return lastLetter + firstLetter;
}

function internal_reverseWord(str){
  let reverse = [];
  for (var i = str.length; i >= 0; i--) {
    let letter = str.charAt(i);
    reverse.push(letter);
    
  }
  let final = "";
    for (var a in reverse)
    {
        var l = reverse[a];
        if (l !=",") {
        final = final + l;
      }
    }
  return(final);

}

function internal_cipher(word){
    let firstLetter = word[0];
    let lastLetter = word[word.length-1];

    let cipher = word + reverse(firstLetter,lastLetter).toUpperCase();
    return(cipher);
}

Cipher.prototype.cipher = function(){
  return(internal_reverseWord(internal_cipher(this.word)));
}
