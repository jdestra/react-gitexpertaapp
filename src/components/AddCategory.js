import React,{useState} from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategorias(cate => [inputValue,...cate]);    
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <input type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                />
        </form>
    )
}


AddCategory.prototype = {
    setCategorias:Proptypes.func.isRequired
}