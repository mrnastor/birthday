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
			// $('#play').fadeIn('slow');
			$('#play').click();
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
			// $('#bannar_coming').fadeIn('slow');
			$('#bannar_coming').click();
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			// $('#balloons_flying').fadeIn('slow');
			$('#balloons_flying').click();
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
		$('.balloons').show()
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
			// $('#cake_fadein').fadeIn('slow');
			$('#cake_fadein').click();
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			// $('#light_candle').fadeIn('slow');
			$('#light_candle').click();
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			// $('#wish_message').fadeIn('slow');
			$('#wish_message').click();
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		// $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		numBlns = $('.balloons').length
		startXpos = 50
		xStep = ($(window).width() - (2 * startXpos))/numBlns
		
		$('.balloons').stop();
		$('.balloons').each(function(index, balloon){
			newIndex = (index + 1 + "").repeat(2)
			curXPos = (index - parseInt(numBlns/2)) * 60 - 50
			$(balloon).attr('id','b' + newIndex).animate({top:220, left: vw + curXPos},500);
		})

		// $('#b1').attr('id','b11');
		// $('#b2').attr('id','b22')
		// $('#b3').attr('id','b33')
		// $('#b4').attr('id','b44')
		// $('#b5').attr('id','b55')
		// $('#b6').attr('id','b66')
		// $('#b7').attr('id','b77')
		// $('#b11').animate({top:240, left: vw-350},500);
		// $('#b22').animate({top:240, left: vw-250},500);
		// $('#b33').animate({top:240, left: vw-150},500);
		// $('#b44').animate({top:240, left: vw-50},500);
		// $('#b55').animate({top:240, left: vw+50},500);
		// $('#b66').animate({top:240, left: vw+150},500);
		// $('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			// $('#story').fadeIn('slow');
			$('#story').click();
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function loadCarousel() {
			var audio = $('.song')[0];
			audio.pause();

			$('#overlay').show()
			
			var videoIDs = [
				'fRy7YPHjl-I',
				'hXAd3F3UEG0',
				'udGaDiHAUR4',
				'ioMP4yFQTd0',
				'xxOviBI-8fc',
				'aF7ulsNkPXk'
			]; //the formatted string passed from the first file
			var player, currentVideoId = 0;
			function onYouTubeIframeAPIReady() {
				player = new YT.Player('player', {
					height: '350',
					width: '425',
					playerVars: {
						rel: 0,
						showinfo: 0,
						controls: 0,
						modestbranding: 1,
						fs: 0
					},
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
			}
			function onPlayerReady(event) {
				event.target.loadVideoById(videoIDs[currentVideoId]);
			}
			function onPlayerStateChange(event) {
				if (event.data == YT.PlayerState.ENDED) {
					currentVideoId++;
					if (currentVideoId < videoIDs.length) {
						player.loadVideoById(videoIDs[currentVideoId]);
					} else {
						$('#player').fadeOut('fast')
						$('#overlay').fadeOut('fast')
					}
				}
			}
			onYouTubeIframeAPIReady()
		}

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				if(!$("p:nth-child("+i+")").length){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						// $('.cake').fadeIn('fast');
						loadCarousel()
					});
				} else {
					$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
					msgLoop(i);
				}			

			});
			// body...
		}
		
		msgLoop(0);
		
	});
});
