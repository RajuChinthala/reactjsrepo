import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer({ userData, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return userData.loading ? (
    <h1>loading</h1>
  ) : userData.error ? (
    <h2> {userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapPropsToState = (state, ownProp) => {
  return {
    userData: state.user,
  };
};

const mapPropsToDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(UserContainer);
