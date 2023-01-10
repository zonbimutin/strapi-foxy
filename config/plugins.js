module.exports = ({ env }) => ({
	'users-permissions': {
		config: {
			jwtSecret: env('JWT_SECRET'),
		},
	},
	seo: {
		enabled: true,
	},
	slugify: {
		enabled: true,
		config: {
			contentTypes: {
				page: {
					field: 'slug',
					references: 'title',
				},
				blog: {
					field: 'slug',
					references: 'title',
				},
			},
		},
	},
	graphql: {
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: true,
			depthLimit: 15,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
			},
		},
	},
})
