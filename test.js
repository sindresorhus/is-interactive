import {PassThrough as PassThroughStream} from 'stream';
import test from 'ava';
import isInteractive from '.';

test('tty', t => {
	const ci = process.env.CI;
	delete process.env.CI;
	const stream = new PassThroughStream();
	stream.isTTY = true;
	t.true(isInteractive({stream}));
	process.env.CI = ci;
});

test('non-tty', t => {
	const stream = new PassThroughStream();
	stream.isTTY = false;
	t.false(isInteractive({stream}));
});

test('dumb', t => {
	const term = process.env.TERM;
	process.env.TERM = 'dumb';
	t.false(isInteractive());
	process.env.TERM = term;
});
