/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 120);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {

	var unniverse = new Date('2020/12/25 21:56');
	var current = new Date();


	var total = (current - unniverse) / 1000;
	var day = parseInt(total / (24 * 60 * 60));//计算整数天数
	var afterDay = total - day * 24 * 60 * 60;//取得算出天数后剩余的秒数
	var hour = parseInt(afterDay / (60 * 60));//计算整数小时数
	var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数

	var min = parseInt(afterHour / 60);//计算整数分

	var afterMin = parseInt(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);//取得算出分后剩余的秒数

	var result = "第 <span class=\"digit\">" + day + "</span> 天 <span class=\"digit\">" + hour + "</span> 小时 <span class=\"digit\">" + min + "</span> 分钟 <span class=\"digit\">" + afterMin + "</span> 秒";
	$("#clock").html(result);
}
