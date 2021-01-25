import React, {useState} from 'react'
import {AddCategory} from "./AddCategory";
import { GifGrid } from './GifGrid';
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto Shippuden']);
    
    // const handleAddCategory = () =>
    // {
    //     setCategories([...categories, "Boruto"]);
    // }

    return (
        <div>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr/>
            
            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                }  
            </ol>
        </div>
    )
}

export default GifExpertApp;
