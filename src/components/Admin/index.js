import React from 'react';
import PropTypes from 'prop-types';
import AdminProduct from 'src/containers/AdminProduct';
import { Redirect } from 'react-router-dom';

const Admin = ({ role }) => {
  const ADMIN = 'admin';
  if (role !== ADMIN) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <AdminProduct />
    </div>
  );
};

Admin.propTypes = {
  role: PropTypes.string,
};

Admin.defaultProps = {
  role: null,
};
export default Admin;
