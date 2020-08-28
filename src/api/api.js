import request from "../utils/request";

// /* 切换代理 */
const api = process.env.NODE_ENV === "production" ? "" : "/api/";

export function pokemonListApi(data) {
  return request({
    url: `${api}pokemonListApi`,
    method: "get",
    data
  });
}