import request from '../http-interceptor/http-interceptor';

const getCall = url => request({ url, method: 'GET' });

const httpClient = { getCall };

export default httpClient;
