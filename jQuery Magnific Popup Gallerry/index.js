$(document).ready(function(){
    $(".button").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")

        var filter = $(this).attr("data-filter")

        if(filter == "all"){
            $(".itembox ").show().addClass("show");
        }else{
            $(".itembox ").not("."+filter).hide();
            $(".itembox ").filter("."+filter).show().addClass("show");
        }
    });
    $('.items-container').magnificPopup({
        delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

    });
});
