import { ChangeEvent } from 'react';

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold mt-3">{label}</label>
      <input
        onChange={onChange}
        type={type || 'text'}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
