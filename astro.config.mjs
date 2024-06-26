import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Dillons Blog',
			logo: {
				src: './src/assets/logo.svg'
			},
			favicon: './src/assets/logo.svg',
            social: {
                github: 'https://github.com/dillonpw',
            },
            sidebar: [
                {
                    label: 'posts',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example post', link: '/posts/example/' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
            customCss: ['./src/tailwind.css'],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
