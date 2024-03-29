import Axios from "axios";

const axiosClient = Axios.create();
axiosClient.defaults.baseURL = "/api";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  // "Content-Type": "application/x-www-form-urlencoded",
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}

export function postRequest(URL, payload) {
  console.log(`Post URL is ${URL} & payload is ${payload}`);
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  console.log(`url ${URL}`);
  return axiosClient
    .delete(`/skills/delete/${URL}`)
    .then((response) => response);
}
