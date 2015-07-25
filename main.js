(function(){
	var app = {
		//nav: document.getElementById('sticky'),
		header: document.getElementById('header'),
		content: document.getElementById('content'),
		toTop: window.pageYOffset,
		init: function(){
			this.header.style.height = window.innerHeight;
			this.content.style.top = this.header.clientHeight/2 - this.content.clientHeight/2 + 'px';
			//this.sticky('sticky', 'header');
			this.parallax('header', 'content');
			this.fadeUp();
			this.scrollPage();
		},
		onScrollParallax: function(){
			this.toTop = window.pageYOffset;
			var btn = document.getElementById('more');
			btn.style.bottom = -(this.toTop/btn.clientHeight) * 2;
			content.style.top = this.header.clientHeight/2 - this.content.clientHeight/2 +  - Math.pow(this.toTop, 2)/1000;
			content.style.opacity = 1 - (this.toTop/header.clientHeight);
		},
		parallax: function(header, content){
			window.addEventListener('scroll', this.onScrollParallax.bind(this));
		},
		onScrollFade: function(){
			var sections =  document.getElementsByTagName('section');
			for (var i = 0; i < sections.length; i++){
				if (sections[i].offsetTop <= (this.toTop + window.innerHeight - 300)) {
					sections[i].className = 'showing';
				}
			};
		},
		fadeUp: function(){
			window.addEventListener('scroll', this.onScrollFade.bind(this));
		},
		scrollPage: function(){
			$('#more').click(function () {
				console.log('sad');
			    $('html,body').animate({
			        scrollTop: $("#wrap").offset().top
			    }, 500, 'easeInOutCubic');
			});
		}
		// onScrollSticky: function(height,nav){
		// 	this.toTop = window.pageYOffset;
		// 	if(this.toTop >= header.clientHeight){
		// 		this.nav.className = 'sticky';
		// 	} else { this.nav.className = ''; }
		// },
		// sticky: function(id, header){
		// 	this.nav.style.marginBottom = -this.nav.clientHeight;
		// 	window.addEventListener('scroll', this.onScrollSticky.bind(this));
		// },
	}
	app.init();
})();
