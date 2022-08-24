import { useMeQueryQuery } from 'lib/schemas';
import React from 'react';

export const Profile = () => {
  const { data } = useMeQueryQuery();

  return (
    <>
      <h3>Profile</h3>
      <div>{data?.me?.username}</div>
      <div>{data?.me?.email}</div>
      <div>{data?.me?.firstName}</div>
      <div>{data?.me?.lastName}</div>
    </>
  );
};
