import {expectType} from 'tsd';
import isInteractive = require('.');

expectType<boolean>(isInteractive({
	stream: process.stderr
}));
