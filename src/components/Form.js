import React, {useState} from 'react'


export const Form = ({search}) => {
  
    const [city, setCity] = useState('');
    const onChange = (e) => {setCity(e.target.value)};
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log({city});
        if(city === " " || !city ) return;
        search(city);
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-4 mx-auto'>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Enter the city..' 
                        required 
                        onChange={onChange}>

                    </input>
                    <button 
                        type='submit' 
                        className='btn btn-warning input-group-text' 
                        onClick={onSubmit}
                        
                        > Search 
                    
                    </button>
                </div>
            </form>
        </div>
    )
  
}
