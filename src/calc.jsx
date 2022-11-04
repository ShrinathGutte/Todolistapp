
function addd(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let sub=a-b;
    return sub;
}

function mult(a,b){
    let mult=a*b;
    return mult;
}

function div(a,b){
    let div=a/b;
    div = div.toFixed(2);
    return div;
}



export {addd,sub,mult,div};



/*
function add(x,y){ 
    return(x+y);
  }
  function subtract(x,y) {
     return(x-y);
  }
  function multiply(x,y){
    return(x*y);
  }
  function division(x,y){
    return(x/y);
  }
  

  return(
    <>
      <ol>
         <li>The sum of two no is {addd(2,3)} </li>
         <li>The subtraction of two no is {sub(2,3)} </li>
         <li>The multiplication of two no is {mult(2,3)} </li>
         <li>The division of two no is {div(2,3)} </li>
     </ol>
   </>
  );
  */