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
			this.parallax('header', 'content');
			this.fadeUp();
			this.rotateText();
		},
		onScrollParallax: function(){
			this.toTop = window.pageYOffset;
			this.content.style.opacity = 1 - (this.toTop/header.clientHeight)*3;
			this.headerTop.style.backgroundPosition = 'center ' + this.toTop/5 + 'px';
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
		rotateText: function(){
			$(".rotate").textrotator({
			  animation: "dissolve",
			  separator: ",",
			  speed: 4000 
			});
		},
		preloadAnim: function(){
			var containerXOffset = $('.container').offset().left;
			this.headerBottom.style.height = window.innerHeight;
			this.headerTop.style.height = 0;
			this.logo.style.top = window.innerHeight/2 - this.logo.clientHeight/2 + 'px';
			this.logo.style.left = window.innerWidth/2 - this.logo.clientWidth/2 + 'px';
			$('#bottom-header #bh-content').css({
				opacity:0
			})
			window.setTimeout(function(){
				$('#bottom-header').animate({
					height:'50vh'
				},1000, 'easeInOutBack');
				$('#top-header').animate({
					height:'50vh'
				},1000, 'easeInOutBack');
				$('#bottom-header #bh-content').animate({
					opacity:1
				},1000, 'easeInOutBack')
				$('#logo').animate({
					left:containerXOffset+'px'
				},1000,'easeInOutBack');
			}, 1000)
		}
	};
	app.init();
})();
