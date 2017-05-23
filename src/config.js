//@ flow
type Config = {
  apiRoot: string;
  tokenKey: string;
};

let config: Config = {
  apiRoot: 'http://localhost:8080/api/v1',
  tokenKey: 'jwtToken',
  emailCookieKey: 'email'
};

export default config;
