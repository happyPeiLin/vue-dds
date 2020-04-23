import request from '@/utils/request'

const BASE_URI='/dev-api'

request({
    method:'get',
    url:BASE_URI+'/caonima'
}).then(response=>{
    console.log('get2',response.data)
})

export default{
    getList(){
        const req = request({
            method: 'get',
            url: BASE_URI+'/caonima'
        })
        console.log(req)
        return req
    }
}