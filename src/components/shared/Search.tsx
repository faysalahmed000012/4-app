export default function Search({ search, setSearch }) {
  return (
    <div className="max-w-md rounded-xl mx-auto my-10">
      <input
        className="ms-2 w-[95%]  rounded-full bg-gray-200 p-4 text-lg h-10 focus:border-primary focus:ring-primary
       border border-primary "
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
