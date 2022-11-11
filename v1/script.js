$(document).ready(function () {
	var large = 1200,
		medium = 900,
		small = 600,
		highlighted = "overlaid";

	function changeNewsArticleClass() {
		var width = $(window).outerWidth();

		$(".news .post").removeClass(highlighted);

		if (width > large) {
			$(
				".news .post:nth-child(1), .news .post:nth-child(4), .news .post:nth-child(6)"
			).addClass(highlighted);
		} else if (width > medium && width <= large) {
			$(".news .post:nth-child(1), .news .post:nth-child(5)").addClass(
				highlighted
			);
		} else if (width > small && width <= medium) {
			$(".news .post:nth-child(1), .news .post:nth-child(4)").addClass(
				highlighted
			);
		} else if (width <= small) {
			$(".news .post").addClass(highlighted);
		}
	}

	changeNewsArticleClass();

	$(window).on("load resize", function () {
		changeNewsArticleClass();
	});
});

fetch("https://inshorts.deta.dev/news?category=business")
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		//console.log(data.data);
		art = "";
		for (i = 0; i < 25; i++) {
			n = i;
			sart =
				'<article class="post"><div class="media" style="background-image: url(' +
				data.data[n].imageUrl +
				');"></div><div class="caption"><h1 class="title">' +
				data.data[n].title +
				'</h1><div class="content">' +
				data.data[n].content +
				"</div></div></article>";
			art += sart;
		}
		document.getElementById("newsctr").innerHTML = art;

		//document.querySelector('p').innerHTML = data.data[n].content;
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});


var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function () {
		var a = objToday;
		if (/1/.test(parseInt((a + "").charAt(0)))) return "";
		a = parseInt((a + "").charAt(1));
		return 1 == a //? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th"
	}(),
	dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear();
var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;

document.getElementById("today").innerHTML = today;




$('.accordion .item .heading').click(function () {

	var a = $(this).closest('.item');
	var b = $(a).hasClass('open');
	var c = $(a).closest('.accordion').find('.open');

	if (b != true) {
		$(c).find('.content').slideUp(200);
		$(c).removeClass('open');
	}

	$(a).toggleClass('open');
	$(a).find('.content').slideToggle(200);

});
