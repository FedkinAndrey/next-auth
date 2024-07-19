import { BsExclamationTriangle } from 'react-icons/bs';
import { CardWrapper } from './card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='"Oops! something went wrong!"'
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationTriangle size={20} className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
