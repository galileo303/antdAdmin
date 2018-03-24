import request from '../core/request';

export async function query(code) {
  return request(`/api/${code}`);
}
