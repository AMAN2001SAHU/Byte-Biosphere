export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid lg:grid-cols-12 grid-cols-1 px-10 w-full mt-4 md:max-w-2xl lg:max-w-6xl max-w-xl gap-5">
        <div className="lg:col-span-8  w-full">
          <div className="h-7 bg-gray-200 rounded-full  w-1/2 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded-full w-1/5 mb-5"></div>
          <div className="h-4 bg-gray-200 rounded-full  max-w-2xl mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded-full  mb-2.5 max-w-xl"></div>
        </div>
        <div className="lg:col-span-4 mb-5">
          <div className="font-bold text-lg ">
            <div className="h-5 bg-gray-200 rounded-full w-1/3 mb-2.5"></div>
            <div className="flex gap-3 items-center mt-2">
              <div className="rounded-full h-9 w-9 bg-gray-200"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
