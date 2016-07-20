//  Food2Fork api key: c9209e6b24af2211c9202baba072e23b




$(function() {

  $(".header-img").css("background-image", "url(" + recipe.heroImage + ")")

  $(".post-title-text").text(recipe.title.toUpperCase())



  $("#blog").append(
    '<div class="row">' +
      '<div class="col-md-10 col-md-push-1 post-head text-center">' +
        '<h1 class="title-text">' + recipe.title + '</h1>' +
        '<p class="step-body">' + recipe.foreword + '</p>' +
      '</div>' +
    '</div>' +
    '<hr  class="col-md-10 col-md-push-1" />'
  )
  $("#blog").append("<div class='row'> <div class='col-md-6 col-md-push-3 text-center'><ul id='ingredients'><span class='ingredients-title'>What You'll Need:</span></ul> </div> </div><hr  class='col-md-10 col-md-push-1' />")

  $.each(recipe.ingredients, function(i, ingredient) {
    $("#ingredients").append("<li class='ingredient'>" + ingredient + "</li>");
  })

  function carouselImages(cImages) {
    var str = "";
    for (var image in cImages) {
      str += "<li><img src='" + cImages[image] + "' /></li>"
    };
    return str
  }

  function ifNotes(stepNotes) {
    var str = "";
    if (stepNotes.length) {
      str += '<div class="image-sticky"><span class="sticky-default"><i class="fa fa-commenting-o fa-2x"></i></span>' +
        '<div class="sticky-text">' +
          stepNotes +
        '</div>' +
      '</div>'
    };
    return str
  }

  function ifInstructions(instructions) {
    var str = "";
    if(instructions.length > 100) {
      str += '<p class="step-body">' + instructions + '</p>';
    } else if (instructions.length) {
      str += '<p class="step-body text-center">' + instructions + '</p>';
    }
    return str;
  }

  $.each(recipe.steps, function(i, step) {
    // create function to determine if there needs to be a sticky
    var step = recipe.steps[i];
    console.log(step.instructions.length);
    $("#blog").append(
      '<div class="row">' +
        '<div class="col-md-8 col-md-push-2 post-head">' +
          '<p class="step-head text-center">' + step.head + '</p>' +
          // '<p class="step-body">' + step.instructions + '</p>' +
          ifInstructions(step.instructions) +
        '</div>' +
      '</div>' +
      '<hr class="col-md-10 col-md-push-1" />' +
      '<div class="row">' +
        '<div class="col-md-10 col-md-push-1 segment">' +
          // '<img class="img-responsive prep-image" src="' + step.imageSrc + '"/>' +
          '<div class="my-slider">' +
            '<ul>' +
              carouselImages(step.imageSrc) +
            '</ul>' +
          '</div>' +
          // '<div class="image-sticky"><span class="sticky-default"><i class="fa fa-commenting-o fa-2x"></i></span>' +
          //   '<div class="sticky-text">' +
          //     step.notes +
          //   '</div>' +
          // '</div>' +
          ifNotes(step.notes) +
        '</div>' +
      '</div>' +
      '<hr class="col-md-10 col-md-push-1"/>'
    )
  })

  $(".image-sticky").click(function() {
    var $self = $(this);
    $(this).toggleClass("clicked")
    // $(this).html(recipe.notes[0])
    if ($(this).hasClass("clicked")) {
      $self.find(".sticky-default").text("");
      $self.find(".sticky-text").fadeIn("slow", function() {

      });
    } else {
      $self.find(".sticky-text").fadeOut("slow", function() {
        // $self.find(".sticky-default").text("Click for more details!");
        $self.find(".sticky-default").append("<i class='fa fa-commenting-o fa-2x'></i>");
      });
    }
    // if ( $(this).width() < $(this).parent().width() * .8 ) {
    //   $(this).find("sticky-default").text("");
    // } else {
    //   $(this).find("sticky-default").text("Click for more details!")
    // }
  })

  $(".my-slider").unslider({
    infinite: true,
    autoplay: false,
    arrows: {
    //  Unslider default behaviour
    prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left"></i></a>',
    next: '<a class="unslider-arrow next"><i class="fa fa-chevron-right"></i></a>'
    }
  });

  function greedyJumbotron() {
    var HEIGHT_CHANGE_TOLERANCE = 105; // Approximately URL bar height in Chrome on tablet

    var jumbotron = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        jumbotron.css('height', viewportHeight + 'px');
    }

    update();
}

$('.header-img').each(greedyJumbotron);



var folder = "images/";

var imageArray = [];

$.ajax({
  url: folder
  }).done(function(data) {
    $(data).find("a").attr("href", function (i, val) {
      if( val.match(/\.(jpe?g|png|gif)$/) ) {
          if (val.indexOf("0.") > -1){
            imageArray.push(val)
          }
      }
      console.log(imageArray)
  });
})



})
