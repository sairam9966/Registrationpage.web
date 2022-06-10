const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function checkLength(input,min,max){
  if(input.value.length<min)
  showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
  else if(input.value.length>max)
  showError(input,`${input.id} must be less than ${max} characters`);
  else
  showSuccess(input);

  if(input.value=='')
  checkRequired([input]);

}


function checkEmail(input)
{
  
  const re=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim()))
   showSuccess(input);
  else
   showError(input,'Email is not valid');
   if(input.value=='')
  checkRequired([email]);
  

}
function showError(input,message)
{
   const formControl=input.parentElement;
   formControl.className="form-control error";
   const small=formControl.querySelector('small');
   small.innerText=message;


}
function showSuccess(input)
{
  const formControl=input.parentElement;
   formControl.className="form-control success";

}
function getFieldName(input)
{
  
  if(input.id=='password2')
  return input.id.charAt(0).toUpperCase()+input.id.slice(1,input.id.length-1);
  else
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkRequired(inputArr)
{
inputArr.forEach(function(input){
  if(input.value.trim()==='')
  showError(input,`${getFieldName(input)} is required`);
  else
  {
    showSuccess(input);
  }
})
}
function checkPassword(password,password2)
{
if(password.value===password2.value)
   showSuccess(password2);
  else
  showError(password2,'passwords do not match');
  if(password2.value=='')
  checkRequired([password2]);
}
let arr=[username,email,password,password2];
form.addEventListener('submit',function(e)
{
   e.preventDefault();
   
checkRequired(arr);
  
  checkLength(username,3,15);
  checkLength(password,6,15);
  checkEmail(email);
  checkPassword(password,password2);
 
  let val=0;
  arr.forEach(function(element){
    
    if(element.parentElement.className=="form-control success")
    {
       val+=1;
    }
  
   
  }
  )
  console.log(val);
  if(val===arr.length)
  {
    let last=document.getElementById('last');
    last.style.visibility="visible";

  }
  
});


 

