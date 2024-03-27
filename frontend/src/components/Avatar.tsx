export const Avatar = ({ intials }: { intials: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-300 rounded-full ">
      <span className="font-medium text-slate-600 text-xs">{intials}</span>
    </div>
  );
};
