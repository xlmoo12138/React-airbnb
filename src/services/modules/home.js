import lmRequest from "..";


export function getHomeGoodPriceData() {
  return lmRequest.get({
    url: "/home/goodprice"
  })
}
