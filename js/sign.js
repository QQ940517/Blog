
$(function(){

           $('[data-toggle="tooltip"]').tooltip();
           var t=$('ul').children('li').children('a');     //去除一些样式
           t.click(function(){
               t.css('background','none');
           });
           

           // $('#myCarousel').carousel({                  //控制定时器2S一次
           //      interval:2000
           // });
           
           move($('.t1'),0);                                      //调用函数
           move($('.t2'),1);
           move($('.t3'),2);
           move($('.t4'),3);

           function move(t,num){
                t.hover(function(){                           //控制鼠标滑过函数
                $('#myCarousel').carousel(num);
                  });
           }

          
          
          var u6=$('.u9').children('li');
          var a6=u6.children('a');

          u6.click(function(){

               u6.toggleClass("c");

          });

          a6.click(function(){

               a6.toggleClass("ccc");

          });
         
        $('#email').focus(function(){
             
            $('#email').css("boxShadow","1px 1px 1px 1px #24B2A5"); 
 
        });
        $('#email').blur(function(){

            $('#email').css("boxShadow","0 0 0 0 #fff");   
        
          
        });
        
        $('#password').focus(function(){
             
            $('#password').css("boxShadow","1px 1px 1px 1px #24B2A5");   
              
        });
        $('#password').blur(function(){
             
            $('#password').css("boxShadow","0 0 0 0 #fff");   
              
        });


        
        // $('#email').focus(function(){
        //         $('#email').val('');
        // });
        // $('#email').blur(function(){
        //         $('#email').val('请输入邮箱');
        // });


        // $('#password').focus(function(){
        //         $('#password').val('');
        //         $("#password").attr({
        //      type:'password'

         
        //  });
        // });
        // $('#password').blur(function(){
        //         $('#password').val('请输入密码');
        //         $("#password").attr({
        //         type:'text'
         
        //  });
        // });
                  
      
           //登录框验证部分
         
         $('#f3').validate({

               submitHandler:function(form){
                  alert("登录成功");   
                 
                },

                errorElement: "p",
                errorPlacement: function(error, element){

                   error.appendTo(element.next('p'));

                },
                
                success: function(p) {
                          p.html('<i class="icon-ok-sign i3"></i>输入正确!').addClass("valid");
                         },
                

                rules:{

                email:{
                    required:true,
                    email:true
                },

                password:{

                     required:true,
                     minlength:5

                },

              },

               messages:{

                email:{

                    required:'<i class="icon-remove-sign i3"></i>请输入邮箱',

                    email:'<i class="icon-remove-sign i3"></i>你的邮箱有错，请重新输入！'

                },

                password:{

                     required:'<i class="icon-remove-sign i3"></i>请输入密码',
                     
                     minlength:'<i class="icon-remove-sign i3" ></i>密码至少5位！'
                     


                },


                },


          });

       
         

  });
