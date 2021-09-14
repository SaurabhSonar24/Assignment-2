function display() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mobile = document.getElementById("mobile").value;
    
    var expMobile=/[0-9]{10}$/;
    let expname=/^[a-zA-Z]{2,100}$/;
    if (fname == "" || lname=="") {
      alert("Name must be filled out.");
    //   return false;
    }
     else if(!(expname.test(fname))||!(expname.test(lname))){
         alert("Name must not have digits or special characters.");
     }
    //  else if(!(expname.test(fname))||!(expname.test(lname))){
    //     alert("Name must not have digits or special characters.");
    // }

     else if((expname.test(mobile))){
       alert("Mobile number must not have alphabets or special characters")
     }
     else if(!(expMobile.test(mobile))){
        alert("Enter Valid Mobile Number")
      }
      else{
          alert("Succesfully Registered !!!")
      }
 }