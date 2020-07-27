import {request} from "./requist";

export function getHomeMultidata() {
  return request({
    url:"/home/multidata"
  })
}