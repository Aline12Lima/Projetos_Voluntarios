import { ENV } from '../config/envs'

export function initSentry() {
  if (ENV.isProd) {
    console.log('Sentry initialized')
  }
}
