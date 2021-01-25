import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';

import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

//funcional component 
export const GifGrid = ({category}) => {

    //desestructura el state {x, x}
    const {data, loading} = useFetchGifs(category);

    //const [images, setImages] = useState([]);

    

    GifGrid.propTypes = {
        category: PropTypes.string.isRequired,
    }
    

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>Cargando</p>}
            <div className="card-grid">
                   
                {
                    data.map((imagen) => {
                        return <GifGridItem 
                            key={imagen.id} 
                            {...imagen}
                            />
                    })
                }
            </div>
        </Fragment>
    )


}
//