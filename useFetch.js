import { useEffect, useState } from "react"

export const useFetch = (url)=>{


    const [dataState, setDataState] = useState({

        data:null,
        isloading:true,
        haserror:null
    })

    

    const GetFetch = async ()=> {


        setDataState({
            ...dataState,
            isloading:true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        // setIsloading(!isloading)

        console.log(data);

        setDataState({
            data,
            isloading:false,
            haserror:null
        })

    }

    
    useEffect(()=>{
        GetFetch();
    },[url]);


    return {

        data:dataState.data,
        isloading:dataState.isloading,
        haserror:dataState.haserror

    }

}