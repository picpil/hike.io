(function() {
	var initMasonry = function() {
		$(".photo-thumb-list").imagesLoaded(function() {
			var gutterWidth = 10;
			var maxColumnWidth = 340;
			$(".photo-thumb-list").fadeIn("fast");
			$(".photo-thumb-list").masonry({
				itemSelector: ".photo-thumb",
				gutterWidth: gutterWidth,
				isAnimated: false,
				columnWidth: function(containerWidth) {
					var boxes = Math.ceil(containerWidth / maxColumnWidth);
					var box_width = Math.floor((containerWidth - (boxes - 1) * gutterWidth) / boxes);
					$(".photo-thumb").width(box_width);
					return box_width;
				}
			});
		});
	};

	var initFancybox = function() {
		$(".fancybox-thumbs").fancybox({
			padding: 10,
			nextEffect : "none",
			prevEffect : "none",
			closeEffect : "none",
			closeBtn : true,
			arrows : false,
			keys : true,
			nextClick : true
		});
	};

	$(document).ready(function() {
		if ($(".entry-page").length) {
			initMasonry();
			initFancybox();
		}
	});
}
)();