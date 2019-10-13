/* @flow */

import { Chat } from '../../src';

describe('chat cases', () => {
    it('should render the chat component', done => {
        const body = document.body;

        if (!body) {
            throw new Error(`Expected body to be present`);
        }

        Chat().render(body);
        return done();
    });
});
