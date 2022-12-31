import zyRequest from "..";

export function getHomeGoodPrice() {
    return zyRequest.get({
        url:"/home/goodprice"
    })
}


export function getHomeHighScoreData () {
    return zyRequest.get({
        url:"/home/highscore"
    })
}

export function getHomeDiscountData() {
    return zyRequest.get({
        url:'/home/discount'
    })
}