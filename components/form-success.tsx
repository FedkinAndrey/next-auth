import { FC } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess: FC<FormSuccessProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <BsCheckCircleFill size={20} />
      <p>{message}</p>
    </div>
  );
};
