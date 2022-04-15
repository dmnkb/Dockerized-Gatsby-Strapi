const cron = require('node-cron')

if (process.env.NODE_ENV === 'production') {
	cron.schedule('0 */5 * * * *', () => {
		console.log('Start rebuilding Gatsby (2 minute interval)')

		const child = require('child_process').exec('yarn build')
		child.stdout.pipe(process.stdout)
		child.on('exit', function () {
			console.log('End rebuilding Gatsby (2 minute interval)')
		})
	})
}
