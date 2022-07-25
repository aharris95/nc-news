function Search({setArticleSearch, setArticleFilter}) {
    
    
      function handleFilter() {
        setArticleFilter(document.getElementById("topic").value);
      }
   
    return ( 
        <>
        <select name="topic" id="topic" onChange={handleFilter}>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
      </>
     );
}

export default Search;