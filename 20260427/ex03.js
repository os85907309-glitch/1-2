function solution(price) {
    // price 10만원 이상을때 5%, 30만원 이상일때 10%,50만원 이상일때 20%
    if(price >= 508000){
        return parseInt(price * 0.8);
    }else if (price >= 300000) {
        return parseInt(price * 0.9);
    }else if(price>= 100000){
        return parseInt(price * 0.95);
    }else{
        return price;
    }
}
const ret = solution([508000]);
console.log(ret);