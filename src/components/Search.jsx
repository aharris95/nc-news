function Search({setArticleSearch, setArticleFilter}) {
    
    const handleClick = (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById("searchArticle");
        setArticleSearch(searchTerm.value);
        searchTerm.value = "";
      };
    
      function handleFilter() {
        setArticleFilter(document.getElementById("topic").value);
      }
   
    return ( 
        <>
        <form onSubmit={handleClick}>
          <input
            type="text"
            name="searchArticle"
            id="searchArticle"
            placeholder="Enter article name here..."
          ></input>
          <button type="submit" id="search-button">
            Search
          </button>
        </form>
        <select name="topic" id="topic" onChange={handleFilter}>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </>
     );
}

export default Search;