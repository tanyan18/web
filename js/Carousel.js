
var i=0;//全局变量
var timer;

$(function(){	
	$(".ig").eq(0).show().siblings().hide();
	ShowTimer();
	$(".tab").hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);//清除轮播

	},function(){
		ShowTimer();
});
$(".btn1").click(function(){
	clearInterval(timer);
	if(i==0)
	{
		i=5;
	}
	i--;
	Show();
	ShowTimer();
	
});



$(".btn2").click(function(){
	clearInterval(timer);
	if(i==4)
	{
		i=-1;
	}
	i++;
	Show();
	ShowTimer();
	
});
$(".list1>li")
		.mouseover(function() {
			$(this).find("ul").stop().slideDown(500);
		})
		.mouseout(function() {
			$(this).find("ul").stop().slideUp(500);
		});



});
function Show()
{
	$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function ShowTimer(){
	timer=setInterval(function(){
		i++;
		if(i==6)
		{
		i=0;		
		}
		Show();
	},4000);
		

}

/*zhuce
 * 
 */
function checkna(){

			na=form1.yourname.value;

		  	if( na.length <1 || na.length >12)  

	  		{  	

	  			divname.innerHTML='<font class="tips_false">长度是1~12个字符</font>';

	  		     

	  		}else{  

	  		    divname.innerHTML='<font class="tips_true">输入正确</font>';

	  		   

	  		}  

	  	

	  }

	  //验证密码 

		function checkpsd1(){    

			psd1=form1.yourpass.value;  

			var flagZM=false ;

			var flagSZ=false ; 

			var flagQT=false ;

			if(psd1.length<6 || psd1.length>12){   

				divpassword1.innerHTML='<font class="tips_false">长度错误</font>';

			}else

				{   

				  for(i=0;i < psd1.length;i++)   

					{    

						if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z')) 

						{   

							flagZM=true;

						}

						else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')    

						{ 

							flagSZ=true;

						}else    

						{ 

							flagQT=true;

						}   

					}   

					if(!flagZM||!flagSZ||flagQT){

					divpassword1.innerHTML='<font class="tips_false">密码必须是字母数字的组合</font>'; 

					 

					}else{

						

					divpassword1.innerHTML='<font class="tips_true">输入正确</font>';

					 

					}  

				 

				}	

		}

		//验证确认密码 

		function checkpsd2(){ 

				if(form1.yourpass.value!=form1.yourpass2.value) { 

				     divpassword2.innerHTML='<font class="tips_false">您两次输入的密码不一样</font>';

				} else { 

				     divpassword2.innerHTML='<font class="tips_true">输入正确</font>';

				}

		}

		//验证邮箱

		

		function checkmail(){

					apos=form1.youremail.value.indexOf("@");

					dotpos=form1.youremail.value.lastIndexOf(".");

					if (apos<1||dotpos-apos<2) 

					  {

					  	divmail.innerHTML='<font class="tips_false">输入错误</font>' ;

					  }

					else {

						divmail.innerHTML='<font class="tips_true">输入正确</font>' ;

					}

		}