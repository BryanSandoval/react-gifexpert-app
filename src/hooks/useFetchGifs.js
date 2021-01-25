import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

//Custom Hook
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );

    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs, 
                loading: false
            });
        });
    }, [ category ]); 
    // si cambia la categoria entonces 
    // dispara el useEffect
    
    return state;
}