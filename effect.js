$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(3500);
			if(i==54){
				$("p:nth-child(53)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
					$('#wish').fadeIn('slow'); // hiện button Wish
				});
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
	$('#wish').click(function(){
    	$('#wish-box').fadeIn('slow');
	});

	$('#close-wish').click(function(){
		$('#wish-box').fadeOut('slow');
	});

	function startFireworks() {
		const canvas = document.getElementById("fireworks");
		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.style.display = "block";

		let particles = [];

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}

		function createFirework(x, y) {
			let count = 100;
			while (count--) {
				particles.push({
					x: x,
					y: y,
					speed: random(2, 6),
					angle: random(0, Math.PI * 2),
					radius: 2,
					alpha: 1,
					decay: random(0.015, 0.03),
					color: `hsl(${random(0, 360)},100%,50%)`
				});
			}
		}

		function loop() {
			ctx.fillStyle = "rgba(0,0,0,0.2)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p, i) => {
				let vx = Math.cos(p.angle) * p.speed;
				let vy = Math.sin(p.angle) * p.speed + 0.1;
				p.x += vx;
				p.y += vy;
				p.alpha -= p.decay;

				if (p.alpha <= 0) {
					particles.splice(i, 1);
				} else {
					ctx.globalAlpha = p.alpha;
					ctx.fillStyle = p.color;
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
					ctx.fill();
				}
			});

			requestAnimationFrame(loop);
		}

		// tạo pháo hoa ngẫu nhiên liên tục
		setInterval(() => {
			createFirework(random(100, canvas.width - 100), random(50, canvas.height / 2));
		}, 500);

		loop();
	}


	$('#send-wish').click(function(){
		let wishText = $('#wish-input').val();
		if(wishText.trim() === ""){
			alert("Vui lòng nhập lời điều ước của cậu vào đây nha 💌");
		} else {
			// Ẩn popup nhập điều ước
			$('#wish-box').fadeOut('fast', function(){
				// Bật pháo hoa ngay lập tức
				// Hiện thông báo cùng lúc
				alert("✨ Điều ước của bạn đang được thực hiện. Đừng bỏ cuộc nha!!! ✨");
			});

			// Sau 5 giây: tắt pháo hoa + đổi nút
			$('#wish').hide();
			$('#blow_candle').fadeIn('slow');
		}
	});

	function extinguishCandle() {
		$('.fuego').fadeOut('slow', function(){
			// Có thể thêm hiệu ứng khói nếu bạn muốn
			$('#wish_message').fadeOut('slow', function(){
				$('#after_message').fadeIn('slow').text("🎉 Nến đã được thổi tắt!");
			});
		});
	}
	// Sự kiện bấm nút thổi nến (cho phần tử tạo động)
	// Sự kiện bấm nút thổi nến
	$(document).on('click', '#blow_candle', function () {
		// Ẩn pháo hoa nếu đang hiện
		$('#fireworks').hide();
		$('#final-message').hide();

		// Gọi hàm tắt nến ngay lập tức
		extinguishCandle();

		// Hiện nút kết màn
		$('#blow_candle').hide();
		$('#end_scene_btn').fadeIn();
	});

	$(document).on('click', '#end_scene_btn', function () {
		$(this).fadeOut();

		// Hiện pháo hoa
		$('#fireworks').fadeIn();

		// Gọi hàm pháo hoa
		startFireworks();

		// Sau 7 giây thì dừng pháo hoa và hiện nút nhận quà
		// setTimeout(function () {
		// 	// Ẩn pháo hoa
		// 	$('#fireworks').fadeOut();

		// 	// Hiện nút nhận quà
		// 	$('#gift').fadeIn();

			
		// 	// Khi bấm nút thì qua trang input.html
		// 	$('#gift').on('click', function () {
		// 		window.location.href = 'input.html';
		// 	});
		// }, 10000); // 7000 ms = 7 giây
	});








});




//alert('hello');