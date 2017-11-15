import urlJoin from 'url-join';
import fetch from 'node-fetch';
import autoBind from 'auto-bind';
import { JIMMIFY_API_URL } from './constants';

export class Jimmify {
    constructor(options={}) {
        this.url = options.url || JIMMIFY_API_URL;
        autoBind(this);
    }

    request({ route, method, body }) {
        method = method ? method : body ? 'POST' : 'GET';
        route = route || '';

        return fetch(urlJoin(this.url, route), {
            method,
            body: JSON.stringify(body)
        }).then((response) => response.json());
    }

    attemptConnection() {
        return this.request()
    }

    authenticate(body) {
        return this.request({ route: 'login', body });
    }

    renewToken(body) {
        return this.request({ route: 'renew', body });
    }

    search(query) {
        return this.request({ route: 'query', body: { type: 'search', text: query }});
    }

    getQueue() {
        return this.request({ route: 'queue' });
    }

    getRecent() {
        return this.request({ route: 'recent' });
    }

    answer(body) {
        return this.request({ route: 'answer', body });
    }
}

export default new Jimmify();