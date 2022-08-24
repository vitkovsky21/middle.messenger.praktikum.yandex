import HTTPTransport from "../core/requestApi";

export default abstract class BaseAPI {
    public base: HTTPTransport;

    public constructor () {
        this.base = new HTTPTransport;
    }
}
