import httpClient from './http-client';

it('httpClient get call works', () => {
  httpClient.getCall('/f1').then(res => expect(res.status).toBe(200));
});
