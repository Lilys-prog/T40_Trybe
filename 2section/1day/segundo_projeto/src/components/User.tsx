const user = {
  name: 'Lily',
  lastName: 'Silva',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
