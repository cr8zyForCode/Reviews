import http from "k6/http";
import { check, sleep } from "k6";
import {Rate} from 'k6/metrics';

// export let errorRate = new Rate("errors")

export let options = {
  vus: 100,
  duration: "1s",
  // thresholds : {
  //   "errors" : ["rate < 0.1"],
  // }
};
export default function() {
  let houseId = Math.floor(Math.random()* (10000000)) + 1;
  let getRequest = {
    method: 'GET',
    url: `http://localhost:3003/rooms/${houseId}`
  };
  let postRequest = {
    method: 'POST',
    url: `http://localhost:3003/rooms/${houseId}`,
    payload:  JSON.stringify({
      reviewId: 153111111,
      userId: 333333,
      review: "Hello again"
    }),
    params: {
      headers: {'Content-Type': 'application/json'},
    },
  };

  let responses = http.batch([getRequest, postRequest]);
}

// export default function () {
//   let houseId = Math.floor(Math.random()* (10000000)) + 1;
//   let url = `http://localhost:3003/rooms/${houseId}`;
//   var payload = JSON.stringify({
//     reviewId: 153111111,
//     userId: 333333,
//     review: "Hello again"
//   });

//   var params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   http.post(url, payload, params);
// }
