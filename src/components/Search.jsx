function Search({ setArticleFilter }) {
  function handleFilter(event) {
    setArticleFilter(event.target.value);
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
