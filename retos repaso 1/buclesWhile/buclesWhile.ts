function hasEven(myNums) 
{
    for (let i = 0; i < myNums.length; i++) {
      if (myNums[i] % 2 === 0) {
        return true;
      }
    }
    return false;
  }

  



function startWithM(myNames) 

{
  for (let i = 0; i < myNames.length; i++) {
    if (myNames[i][0] !== 'M') {
      return false;
    }
  }
  return true;
}


