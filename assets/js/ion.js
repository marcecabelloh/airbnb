$(function () {

	$("#range").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 520,
		max: 50000,
		type: 'double',
		step: 1,
		prefix: "$ / "
	});
});