import lmRequest from "..";


export function getHomeGoodPriceData() {
  return lmRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return lmRequest.get({
    url: "/home/highscore"
  })
}

export function getDiscountData() {
  return lmRequest.get({
    url: "/home/discount"
  })
}
