import searchIcon from "../assets/icons/search.png";

// eslint-disable-next-line react/prop-types
const SearchForm = ({ search, setSearch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          className="border-b border-slate-100 bg-transparent w-full py-2 outline-none text-sm placeholder:text-slate-100 text-slate-100 focus:border-blue-400"
          placeholder="Enter city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="absolute right-1 inset-y-0">
          <img src={searchIcon} className="w-3" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
