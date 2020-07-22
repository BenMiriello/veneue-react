const devApi = 'http://api.localhost:3001/v1/';
const prodApi = 'https://veneue.herokuapp.com/';
export const apiRoot = process.env.NODE_ENV === 'development' ? devApi : prodApi;