//type checkString below
function checkString(str){
  if(str.length > 7 && str.length < 21){
    console.log("hey");
    return str;
  }
  else{
    throw new Error("Password Not Correct Length");
  }
}
//type getString below
function getString(str){
  try{
    str = checkString(str);
  }
  catch(e){
    console.log(e.message);
    getString("passsssword");
  }
}

getString("yes");
