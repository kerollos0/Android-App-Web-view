$(window).on("load",function()
{
    $(".loading .sk-circle,.loading .sk-circle .holder, .loading h1 ").fadeOut(5000,
  	function()
  	{
  		
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      }) ; 
});

