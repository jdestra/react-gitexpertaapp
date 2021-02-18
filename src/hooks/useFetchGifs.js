
import {useEffect, useState} from 'react'
import { getGits } from '../helpers/getGifs';
//import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = ({category}) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });


    useEffect(()=>{

        
        getGits(category)
        .then(imgs=>{
            setTimeout(() => {
                setstate({
                    data:imgs,
                    loading:false
                });
            }, 3000);
        })
    },[category])

    // setTimeout(() => {
    //     setstate({
    //         data:[1,2,3,4,5,6,7,8,9],
    //         loading:false
    //     })
    // }, 3000);
    return state;
}
