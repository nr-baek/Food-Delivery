const BASE_URL = "http://localhost:9090";

const request = {
  get(url: string) {
    return fetch(`${BASE_URL}${url}`);
  },
  post(url: string, payload: any) {
    return fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },
  // patch(url: string, payload) {
  //   return fetch(`${BASE_URL}${url}`, {
  //     method: "PATCH",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // },
  delete(url: string) {
    return fetch(`${BASE_URL}${url}`, { method: "DELETE" });
  },
};

export default request;
