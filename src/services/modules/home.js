import zyRequest from "..";

export function getHomeGoodPrice() {
    return zyRequest.get({
        url:"/home/goodprice"
    })
}