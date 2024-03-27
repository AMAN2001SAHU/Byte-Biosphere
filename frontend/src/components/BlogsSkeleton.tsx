export const BlogsSkeleton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 flex justify-center max-w-xl lg:max-w-4xl w-full">
        <div className=" animate-pulse max-w-6xl min-w-full">
          <div className="flex items-center mb-2.5 gap-1">
            <div className="rounded-full h-9 w-9 bg-gray-200"></div>
            <div className="h-3 bg-gray-200 rounded-full w-14"></div>
            <div className="h-1 w-1 rounded-full bg-slate-300 ml-1 mr-1"></div>
            <div className="h-3 bg-gray-200 rounded-full w-14"></div>
          </div>
          <div className="h-7 bg-gray-200 rounded-full  w-2/5 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded-full  mb-2.5 max-w-xl"></div>
          <div className="h-3 bg-gray-200 rounded-full w-14"></div>
          <div className="border-b-2 mt-5"></div>
        </div>
      </div>
    </div>
  );
};
