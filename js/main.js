(function(){
	var app = {
		header: document.getElementById('header'),
		logo:document.getElementById('logo'),
		headerTop: document.getElementById('top-header'),
		headerBottom: document.getElementById('bottom-header'),
		content: document.getElementById('content'),
		toTop: window.pageYOffset,
		init: function(){
			this.preloadAnim();
			this.content.style.top = this.headerTop.clientHeight/2 - this.content.clientHeight/2+ 'px';
			this.headerBottom.style.paddingTop = this.headerBottom.clientHeight/4 - 
				document.getElementById('bh-content').clientHeight/2 + 'px';
			this.parallax('header', 'content');
			this.fadeUp();
			this.rotateText();
		},
		onScrollParallax: function(){
			this.toTop = window.pageYOffset;
			this.content.style.opacity = 1 - (this.toTop/header.clientHeight)*3;
			this.headerTop.style.backgroundPosition = 'center ' + this.toTop/3 + 'px';
		},
		parallax: function(header, content){
			window.addEventListener('scroll', this.onScrollParallax.bind(this));
		},
		onScrollFade: function(){
			this.toTop = window.pageYOffset;
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
		preloadAnim: function(){
			var containerXOffset = $('.container').offset().left;
			this.headerBottom.style.height = '100vh';
			this.headerTop.style.height = 0;
			this.logo.style.top = window.innerHeight/2 - this.logo.clientHeight/2 + 'px';
			this.logo.style.left = window.innerWidth/2 - this.logo.clientWidth/2 + 'px';
			$('#bottom-header div.contentfade').css({
				opacity:0,
				top:'60px'
			});
			window.setTimeout(function(){
				$('#bottom-header').animate({
					height:'50vh'
				},1000, 'easeInOutQuint');
				$('#top-header').animate({
					height:'50vh'
				},1000, 'easeInOutQuint');
				if(window.innerWidth > 768){
					$('#logo').animate({
						left:containerXOffset + 20 +'px'
					},1000,'easeInOutBack');
				}
				window.setTimeout(function(){
					$('#bottom-header div.contentfade').each(function(i){
						window.setTimeout(function(){
							$('#bottom-header div.contentfade').eq(i).animate({
								opacity:1,
								top:0
							},1000, 'easeInOutBack')
						}, 100 * (i+1));
					})
				}, 250)
			}, 1000)
		}
	};
	app.init();
})();