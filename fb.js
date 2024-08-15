$(document).ready(function() {
  $("#signup-form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 4,
        maxlength:6

      },
      sname:{
        required:true,
        minlength: 4,
        maxlength:6
      },        
      emailaddress:{
        required:true,
        email:true

      } ,
      password:{
        minlength:6

      },
      day:{
        required:true
      }

    }
  })
})

 


   
