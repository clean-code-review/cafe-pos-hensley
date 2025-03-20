/* Axios 인스턴스 및 기본 설정 */
import axios, { AxiosRequestConfig } from 'axios'
import { config } from '@/posConfig'
// 기본 인스턴스 생성
export const apiClient = axios.create({
  baseURL: '/api',
  timeout: config.networkTimeout, //10초
  headers: {
    'Content-Type': 'application/json',
  },
})

// API 요청 헬퍼 함수
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response = await apiClient(config)
    return response.data
  } catch (error) {
    // 에러 변환 및 처리
    console.error('API 요청 오류:', error)
    throw error
  }
}
