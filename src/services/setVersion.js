import request from '../utils/axios';

export function setVersion(data) {
    // let date = new Date().getTime();
    // console.log(date)
    return request('POST',`/api/setVersion`,data);
}