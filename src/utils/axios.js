import axios from 'axios';


// function parseJSON(response) {
//   return JSON.parse(response)
// }

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        // console.log(response.data);
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(method, url, dataObj, headerObj) {
    return axios({
        method: method,
        url: url,
        data: dataObj,
        headers: headerObj
    })
        .then(checkStatus)
        .then(data => ({ data }))
        .catch(err => ({ err }));
}
