import service from '@/api/http'

const loginApi = {
  // Verification login example
  postVerification: (params: object) => service.post(`/login`, params),
}

export default loginApi
