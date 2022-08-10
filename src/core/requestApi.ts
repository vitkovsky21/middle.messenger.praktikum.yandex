const enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
interface Options {
    method?: METHOD;
    data?: any;
    timeout?: number;
    headers?: { [key: string]: string };
}

export default class HTTPTransport {

    get = (url: string, options: Options = {}) => {
        return this.request( url, { ...options, method: METHOD.GET });
    };

    post = (url: string, options: Options = {}) => {
        return this.request( url, { ...options, method: METHOD.POST }, options.timeout );
    };

    put = (url: string, options: Options = {}) => {
        return this.request( url, { ...options, method: METHOD.PUT }, options.timeout );
    };

    delete = (url: string, options: Options = {}) => {
        return this.request( url, { ...options, method: METHOD.DELETE }, options.timeout );
    };

    request = (url: string, options: Options = {}, timeout = 3000) => {
        const { method, data, headers = {} } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = "json";

            xhr.open(method, url);

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr.response);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            xhr.withCredentials = true;
            
            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                if (data instanceof FormData) {
                  xhr.send(data as any);
                } else {
                  xhr.send(JSON.stringify(data));
                }
            }
            
        });
    };
}
