import lmRequest from "..";

export function getDiscountData() {
  return lmRequest.get({
    url: "/home/discount"
  })
}

export function getHomehotRecommendData() {
  return lmRequest.get({
    url: "/home/hotrecommenddest"
  })
}

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
