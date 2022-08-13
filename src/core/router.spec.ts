import {expect} from 'chai';

describe('Router', () => {
    it('Changing states', () => {
        window.history.pushState({page: 'login'}, 'Login', '/login');
        window.history.pushState({page: 'signUp'}, 'signUp', '/signUp');
        expect(window.history.length).to.eq(3);
    });
});