import request from "../utils/request";

// /* 切换代理 */
const api = process.env.NODE_ENV === "production" ? "" : "/api/";

export function dataApi(data) {
  return request({
    url: `${api}dataApi`,
    method: "get",
    data
  });
}