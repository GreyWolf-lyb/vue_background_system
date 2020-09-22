import request from '@/utils/request'

export function login(params) {
  console.log(params)
  return request({
    url: '/webadmin/webAdminUser/signIn',
    method: 'get',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
