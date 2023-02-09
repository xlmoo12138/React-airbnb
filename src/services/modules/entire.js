import lmRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return lmRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
