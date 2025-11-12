import axios from "axios"

const commonAPI=async(httpRequest,url,regBody,reqHeader)=>{

const requestConfig={

method:httpRequest,
url,
data:regBody,
headers:reqHeader?reqHeader:{}
}
return await axios(requestConfig).then(res=>{
    return res
}).catch(err=>{
    return err
})
}
export default commonAPI