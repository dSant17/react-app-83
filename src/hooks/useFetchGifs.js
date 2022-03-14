import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(() => {
        getGifs(categoria)
        .then(imgs => {
            console.log(imgs);
            setState({
                data : imgs,
                loading : false
            })
        });
    },[]);

    return state;
}
