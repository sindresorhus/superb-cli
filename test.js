'use strict';
const execa = require('execa');
const test = require('ava');

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
});
