const request = {}
request.url={
    list:'https://easy-mock.com/mock/5ab61aca72286c70d351bcba/rn/list'
}
request.get = (url,param) =>  {
    
    if(param){
        url=url+'?'
        for(let key in param){
            url=url+key+'='+param[key]
        }
    }
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
      
  }
request.post = () => {}
export default request