const cp = require('child_process')

// TODO: Retry logic! Strapi takes a while to build

console.log(`Start rebuilding Gatsby`)
const child = cp.exec('yarn clean && yarn build')
child.stdout.pipe(process.stdout)
child.on('exit', function () {
	console.log('Finished rebuilding Gatsby')
})
