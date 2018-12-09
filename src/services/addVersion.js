import request from '../utils/axios';

export function addVersion(param) {
    // let date = new Date().getTime();
    // console.log(date)
    return request('GET',`/api/addVersion?version=`+param);
}