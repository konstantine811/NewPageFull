/*
* @Author: Admin
* @Date:   2017-07-19 19:43:56
* @Last Modified by:   Admin
* @Last Modified time: 2017-07-20 15:28:53
*/

'use strict';
$(document).ready(function() {


	$("#submit-button-form-search").on('click', function() {
			$.each($('input.validate'), function(key, value) {
				var val = $(this).val();
				if (val == '') {
					$(this).siblings('.form-label').css("color", "red");
					
				} else {
					$(this).siblings('.form-label').css("color", "black");
				}
			})
	});

	$('#button-sort-by').on('click', function() {
		var w_popup = $('#sort-popup');
		var h = w_popup.height();
		console.log(h);
		if (h === 0) {
            w_popup.animate({
                "height": "134px"
            },);
		} else {
            w_popup.animate({
                "height": "0"
            });
		}


	});

});