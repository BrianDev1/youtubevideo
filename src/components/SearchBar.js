import React , {useState} from "react";


const SearchBar = (props) => {
    
    const [search, setSearch] = useState("");

    function onInputChange(event) {

        const {value} = event.target;
        setSearch(value);

        
    }


    function handleFormSubmit (event){
        event.preventDefault();
        props.onSubmit(search);
        //setSearch("");

        

        // TODO: Make sure we call callback from parent component
    }

    return (
        <div className="search-bar ui segment">
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field">
                <label>Video Search</label>
                <input type="text" onChange={onInputChange} value={search}/>
            </div>
        </form>
        
        </div>
    );
}


export default SearchBar;