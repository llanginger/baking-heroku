$(function(){function s(s){var e="";for(var i in s)e+="<li><img src='"+s[i]+"' /></li>";return e}function e(s){var e="";return s.length&&(e+='<div class="image-sticky"><span class="sticky-default"><i class="fa fa-commenting-o fa-2x"></i></span><div class="sticky-text">'+s+"</div></div>"),e}function i(s){var e="";return s.length>100?e+='<p class="step-body">'+s+"</p>":s.length&&(e+='<p class="step-body text-center">'+s+"</p>"),e}function t(){function s(){i.css("height",t+"px")}var e=105,i=$(this),t=$(window).height();$(window).resize(function(){Math.abs(t-$(window).height())>e&&(t=$(window).height(),s())}),s()}$(".header-img").css("background-image","url("+recipe.heroImage+")"),$(".post-title-text").text(recipe.title.toUpperCase()),$("#blog").append('<div class="row"><div class="col-md-10 col-md-push-1 post-head text-center"><h1 class="title-text">'+recipe.title+'</h1><p class="step-body">'+recipe.foreword+'</p></div></div><hr  class="col-md-10 col-md-push-1" />'),$("#blog").append("<div class='row'> <div class='col-md-6 col-md-push-3 text-center'><ul id='ingredients'><span class='ingredients-title'>What You'll Need:</span></ul> </div> </div><hr  class='col-md-10 col-md-push-1' />"),$.each(recipe.ingredients,function(s,e){$("#ingredients").append("<li class='ingredient'>"+e+"</li>")}),$.each(recipe.steps,function(t,c){var c=recipe.steps[t];console.log(c.instructions.length),$("#blog").append('<div class="row"><div class="col-md-8 col-md-push-2 post-head"><p class="step-head text-center">'+c.head+"</p>"+i(c.instructions)+'</div></div><hr class="col-md-10 col-md-push-1" /><div class="row"><div class="col-md-10 col-md-push-1 segment"><div class="my-slider"><ul>'+s(c.imageSrc)+"</ul></div>"+e(c.notes)+'</div></div><hr class="col-md-10 col-md-push-1"/>')}),$(".image-sticky").click(function(){var s=$(this);$(this).toggleClass("clicked"),$(this).hasClass("clicked")?(s.find(".sticky-default").text(""),s.find(".sticky-text").fadeIn("slow",function(){})):s.find(".sticky-text").fadeOut("slow",function(){s.find(".sticky-default").append("<i class='fa fa-commenting-o fa-2x'></i>")})}),$(".my-slider").unslider({infinite:!0,autoplay:!1,arrows:{prev:'<a class="unslider-arrow prev"><i class="fa fa-chevron-left"></i></a>',next:'<a class="unslider-arrow next"><i class="fa fa-chevron-right"></i></a>'}}),$(".header-img").each(t);var c="images/",a=[];$.ajax({url:c}).done(function(s){$(s).find("a").attr("href",function(s,e){e.match(/\.(jpe?g|png|gif)$/)&&e.indexOf("0.")>-1&&a.push(e),console.log(a)})})});