import http from 'k6/http'
import { Rate } from 'k6/metrics'

export let errorRate = new Rate('error')
export let options = {
  vus: 1000,
  duration: '1m',
  // thresholds: {
  //   // 'errors': ['rate<0.01'],  // errors less than 1%
  //   // 'http_req_duration': ['p(95)<500']  // 95% of req should complete in 500 ms
  // }
}

export default function () {
  let response = http.get('http://localhost:5000/api/v1/todos')

  let success = response.status === 200
  errorRate.add(!success)

}