function toTop(){
       window.location.href="/jnc.html#";
}
$(window).scroll(function(){
                        if(!($(window).scrollTop() >= 200)){
                                $(".top").hide();
                        }else{
                                $(".top").show();
                        }
                });

