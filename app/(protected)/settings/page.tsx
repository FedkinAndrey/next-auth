'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';
import { useRouter } from 'next/navigation';

const SettingsPage = () => {
  const user = useCurrentUser();
  const router = useRouter();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        sign out
      </button>
    </div>
  );
};

export default SettingsPage;
