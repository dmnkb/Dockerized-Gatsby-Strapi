const cp = require('child_process')

console.log(`Start rebuilding Gatsby`)
const child = cp.exec('yarn build')
child.stdout.pipe(process.stdout)
child.on('exit', function () {
	console.log('Finished rebuilding Gatsby')
})
