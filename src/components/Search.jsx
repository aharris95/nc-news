function Search({ setArticleFilter }) {
  function handleFilter(event) {
    setArticleFilter(event.target.value);
  }

  return (
    <>
      <select name="topic" id="topic" onChange={handleFilter}>
        <option value="created_at&order=DESC">Newest</option>
        <option value="created_at&order=ASC">Oldest</option>
        <option value="votes&order=DESC">Most Votes</option>
        <option value="votes&order=ASC">Least Votes</option>
        <option value="comment_count&order=ASC">Least Comments</option>
        <option value="comment_count&order=DESC">Most Comments</option>
      </select>
    </>
  );
}

export default Search;
