let password = `starfish123!`
let passwordArr = password.split('')
let condition1 = false
let condition2 = false
let condition3 = false

if(passwordArr.length >= 10)
{
    //console.log(`password is atleast 10 characters long`)
    condition1 = true
}
else
{
    console.log(`password is not 10 characters`)
}
for(let i=0; i < passwordArr.length; i++)
{
    if (passwordArr[i].match(/[a-z]/i))
    {
    //console.log("Password contains a character")
    condition2 = true
    }
    else if (passwordArr[i].match(/[0-9]/i))
    {
        //console.log("Password contains a number")
        condition3 = true
    }
}
if (condition1 && condition2 && condition3)
{
console.log("Strong Password")
}
else
{
    console.log("Weak Password")
}


