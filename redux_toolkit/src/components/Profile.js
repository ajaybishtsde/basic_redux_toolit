import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.theme.value);
  return (
    <>
      <h2 style={{ color: color ? color : "grey" }}>Profile data</h2>
      <p style={{ color: color ? color : "grey" }}>Name: {user?.name}</p>
      <p style={{ color: color ? color : "grey" }}>Age: {user?.age}</p>
      <p style={{ color: color ? color : "grey" }}>email:{user?.email}</p>
    </>
  );
};

export default Profile;
