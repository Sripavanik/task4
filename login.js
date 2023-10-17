function validateform(){
    let x=document.forms['myform']['username'].value;
    
    let y=document.forms['myform']['password'].value;
    if(x==''){
        alert("Enter valid username");
        return false;
    }
    else if(y.length<6){
        alert('enter valid password');
        return false;
    }
}