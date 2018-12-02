import request from '../utils/axios';

export function getBuild(param) {
    // let date = new Date().getTime();
    // console.log(date)
    if (param)
        return request('GET',`/api/getBuild?appName=`+param);
    else
        return request('GET',`/api/getBuild`);
}