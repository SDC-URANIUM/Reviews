import http from 'k6/http';

export default function () {
  const url = 'http://localhost:3000/reviews/313';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    page: 0,
    count: 5,
    product_id: 313
  };

  http.post(url, {}, params);
}
