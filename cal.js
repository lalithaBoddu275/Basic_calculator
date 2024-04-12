let ar=document.querySelectorAll(".btn");
let input=document.getElementById('inputBox');
let curstring="";
let er=document.getElementById('er');
for (let i = 0; i < ar.length; i++) {
    ar[i].addEventListener('click',()=>{
           newstr=ar[i].innerHTML;
       if(newstr=='='){
         curstring=eval(curstring);
         input.value=curstring;

       }
       else if(newstr=='AC')
       {   
          curstring="";
          input.value=curstring;
       }
       else if(newstr=='del'){ 
        curstring = curstring.substring(0, curstring.length-1);
        input.value=curstring
             }

       else{
             curstring +=newstr;
                input.value = curstring;
            }      

    })
    
  }

  input.addEventListener('keypress',() =>{
    er.innerHTML="*input from keyboard is not allowed*"
     er.style.color="red";
     
     
     
  })