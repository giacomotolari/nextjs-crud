export default function Loading() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button className="pl-1 pr-1 bg-gray-100 rounded-lg h-6 w-6"></button>
      <div className="p-10">
        <div className="flex justify-end">
          <div className="p-2 my-4 skeleton-loading"></div>
        </div>
        <div className="p-4 my-4 skeleton-loading"></div>
        <br />
        <div className="p-10 my-4 skeleton-loading"></div>
        <br />
        <div className="p-6 my-4 skeleton-loading"></div>
      </div>
    </div>
  );
}
