$(function(){
       $('#emails').focus(function(){
             
            $('#emails').css("boxShadow","1px 1px 1px 1px #24B2A5"); 
 
        });
        $('#emails').blur(function(){

            $('#emails').css("boxShadow","0 0 0 0 #fff");   
          
        });
        $('#passwords').focus(function(){
             
            $('#passwords').css("boxShadow","1px 1px 1px 1px #24B2A5");   
              
        });
        $('#passwords').blur(function(){
             
            $('#passwords').css("boxShadow","0 0 0 0 #fff");   
              
        });
        $('#cpassword').focus(function(){
             
            $('#cpassword').css("boxShadow","1px 1px 1px 1px #24B2A5");   
              
        });
        $('#cpassword').blur(function(){
             
            $('#cpassword').css("boxShadow","0 0 0 0 #fff");   
              
        });
        $('#vali').focus(function(){
             
            $('#vali').css("boxShadow","1px 1px 1px 1px #24B2A5");   
              
        });
        $('#vali').blur(function(){
             
            $('#vali').css("boxShadow","0 0 0 0 #fff");   
              
        });

    
        $('#f4').validate({
           
              submitHandler:function(form){
                 alert("提交成功");
              },

              errorElement: "p",
              errorPlacement:function(error,element){
                  error.appendTo(element.next("p"));
              },
              
              success:function(p){
                  p.html('<i class="icon-ok-sign i3"></i>输入正确！').addClass('valid');
              },

              rules:{
                     
                     emails:{
                           required:true,
                           email:true
                     },

                     passwords:{
                     	   required:true,
                     	   minlength:5,
                     	   maxlength:15
                     },

                     cpassword:{
                     	   required:true,
                     	   minlength:5,
                     	   equalTo: "#passwords"
                     }
              },

              messages:{

              	     emails:{
              	     	  required:'<i class="icon-remove-sign i3"></i>请输入电子邮件地址',
              	     	  email:'<i class="icon-remove-sign i3"></i>请输入正确的电子邮件地址',
              	     },

              	     passwords:{
                          required:'<i class="icon-remove-sign i3"></i>请输入密码',
                          minlength:'<i class="icon-remove-sign i3"></i>密码至少5位',
                          maxlength:'<i class="icon-remove-sign i3"></i>密码超过16位',
              	     },

              	     cpassword:{
                          
                          required:'<i class="icon-remove-sign i3"></i>请确认密码',
                          minlength:'<i class="icon-remove-sign i3"></i>密码至少5位',
                          equalTo:'<i class="icon-remove-sign i3"></i>密码不相同',
              	     }
              }

        });
});
