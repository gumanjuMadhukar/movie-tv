const SearchBox = (props)=> {
    return (
        <div className="col col-sm-4">
            <input 
            type="text"
            className="form-control"
            placeholder="Search..." 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
} 

export default SearchBox;