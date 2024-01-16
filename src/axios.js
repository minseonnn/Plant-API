import axios from 'axios'


const axiosInstance = axios.create({baseURL: "https://perenual.com/api"}); // axios.create를 사용하여 새로운 Axios 인스턴스 생성

/*
axiosInstance.interceptors.request.use를 사용하여 요청 전에 실행되는 인터셉터를 추가합니다. 이 함수는 요청을 보내기 전에 실행되며 요청 구성(config)을 수정할 수 있습니다. interceptors 객체에 request 프로퍼티를 사용하여 요청에 대한 인터셉터를 설정할 수 있습니다.
use 메서드를 사용하여 인터셉터 함수를 등록합니다. 이 함수는 요청을 보내기 전에 실행됩니다.

config는 현재 요청에 대한 구성
*/
axiosInstance.interceptors.request.use((config) => {
  return {
    ...config,
    params:{
      ...config.params,
      key: 'sk-wAuX659a3069bc18f3679'
    }
  }
})

export { axiosInstance }
// export const axiosInstance = ....
// import { axiosInstance } 

// export default axiosInstance;
// export default function Component () {}
// import axiosInstance
// import axios