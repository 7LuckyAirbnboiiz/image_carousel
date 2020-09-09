import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 100 },
    { duration: '15s', target: 500 },
    { duration: '30s', target: 1000 },
  ],
};

export default function() {
  let id = Math.floor(Math.random() * 9999999) + 1;
  // let res = http.get('https://httpbin.org/');
  let res = http.get(`http://localhost:3004/rooms/${id}`);
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
};
