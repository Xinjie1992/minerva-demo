import request from '../utils/axios';

export function getApp() {
    // let date = new Date().getTime();
    // console.log(date)
    return request('GET',`/api/getApp`);
}