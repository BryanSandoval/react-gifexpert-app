import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2) {
            //cats viene desde el estado anterior
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }
        
    }

    AddCategory.propTypes = {
        setCategories : PropTypes.func.isRequired,
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputValue}
            />
        </form>
    )


    //Comunicacion del hijo al padre
    // Padre <GifExpertApp> / hijo <AddCategory>
}
