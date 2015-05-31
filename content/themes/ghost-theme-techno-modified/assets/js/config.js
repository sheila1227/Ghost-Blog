window.techno.config = { 
	
		logo: 'http://p10.ytrss.com/product/20/519/8221/ZoomImage/3448.jpg',
		author: {			
				social: [
					{ 
						href: 'https://github.com/sheila1227',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'mailto:sheila1227@126.com',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{
						href: 'http://www.cnblogs.com/SheilaSun/',
						icon: 'fa-book',
						title: 'Cnblogs'
					},
					{
						href: techno.baseUrl + '/rss/',
						icon: 'fa-rss',
						title: 'Rss'
					}
				]
		},
		disqus: {
				shortname: 'sunjing'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: '', text: 'Home'},
				{ route: techno.baseUrl + '/about', text: 'About'},
				{ route: techno.baseUrl + '/projects', text: 'Projects'}
		]
};
	
