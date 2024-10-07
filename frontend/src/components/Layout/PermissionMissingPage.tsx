import { FC } from 'react';

export const PermissionsMissingPage: FC = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You do not have the necessary permissions to view this page.</p>
      <p>Please contact your administrator if you believe this is a mistake.</p>
    </div>
  );
};
