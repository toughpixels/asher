module.exports = {    
    plugins: [   
        require('postcss-import')({
            path: ["assets/css"],
        }), 
        require('tailwindcss')('./assets/css/tailwind.config.js'),
        require('@fullhuman/postcss-purgecss')({
            content: ['layouts/**/*.html', 'assets/**/*.svg'],
            fontFace: true,
            whitelist: ['bg-about-200', 'bg-press-200', 'bg-cartoons-200', 'bg-writings-200', 'bg-videos-200','bg-contact-200', 'text-about-200', 'text-press-200', 'text-cartoons-200', 'text-writings-200', 'text-videos-200','text-contact-200', 'hover:bg-about-200', 'hover:bg-press-200', 'hover:bg-cartoons-200', 'hover:bg-writings-200', 'hover:bg-videos-200','hover:bg-contact-200', 'w-1/2', 'videos', 'text-asher-blue', 'text-asher-pink', 'body',
            'html',
            'a',
            'h1',
            'h2',
            'h3',
            'h4',
            'p', 'md:grid-cols-2', 'lg:grid-cols-3', 'hover:text-default', 'md:flex', 'md:grid', 'md:mb-0', 'md:grid-cols-3']
        }),
        require('autoprefixer')({      
            overrideBrowserslist: ['>1%']
          }),    
    ]
}