(function(){
	var app = {
		header: document.getElementById('header'),
		headerTop: document.getElementById('top-header'),
		content: document.getElementById('content'),
		toTop: window.pageYOffset,
		init: function(){
			this.headerTop.style.height = window.innerHeight - window.innerHeight/11+'px';
			this.content.style.top = this.headerTop.clientHeight/2 - this.content.clientHeight/2+ 'px';
			this.parallax('header', 'content');
			this.fadeUp();
			this.rotateText();
		},
		onScrollParallax: function(){
			this.toTop = window.pageYOffset;
			this.content.style.opacity = 1 - (this.toTop/header.clientHeight);
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
					console.log(sections[i], sections[i].offsetTop )
				}
			};
			console.log(sections[0].offsetTop, window.pageYOffset + window.innerHeight - 300);
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
		}
	};
	app.init();
})();
