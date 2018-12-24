const Search =(e)=>{
    var newArr=e.list.data.filter(item => item.profile.first_name===e.value)
    return newArr
}

export default Search