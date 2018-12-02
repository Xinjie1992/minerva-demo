import request from '../utils/axios';

export function addApp(param) {
    // let date = new Date().getTime();
    // console.log(date)
    return request('GET',`/api/addApp?appName=`+param);
}