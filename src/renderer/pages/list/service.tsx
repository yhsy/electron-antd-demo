import request from '@/utils/request';

// 获取-banner
export async function getBanner(params) {
  return request('/carousel/list', {
    params,
  });
}