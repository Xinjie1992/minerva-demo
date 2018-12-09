import request from '../utils/axios';

export function getVersion() {
    // let date = new Date().getTime();
    // console.log(date)
    return request('GET',`/api/getVersion`);
}