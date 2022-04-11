const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required />
        <label>Blog Body:</label>
        <textarea>required</textarea>
        <label>Blog Author:</label>
        <select>
          <option value="select">Select</option>
          <option value="Gbolahan">Gbolahan</option>
          <option value="Emmanuel">Emmanuel</option>
        </select>
        <button>Add Me</button>
      </form>
    </div>
  );
};

export default Create;
