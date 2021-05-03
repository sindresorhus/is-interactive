import {expectType} from 'tsd';
import isInteractive from './index.js';

expectType<boolean>(isInteractive({
	stream: process.stderr
}));
