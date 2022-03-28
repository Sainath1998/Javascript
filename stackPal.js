var letters = []
var rword = ""
var word = "racecar"
for(var i = 0 ; i < word.length ; i++)
{
    letters.push(word[i]) 
}
for(var i = 0 ; i < word.length ; i++)
{
    rword += letters.pop();
}
if(rword == word)
{
    console.log("The given string is a palindrome")
}
else
{
    console.log("No the given string is not palidrome")
}