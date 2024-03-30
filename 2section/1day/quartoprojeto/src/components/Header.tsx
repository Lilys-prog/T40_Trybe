const user = {
  name: 'Lily',
  lastName: 'Silva'
}

function Header() {
  return <h2>It's a beautiful day, {`${user.name} ${user.lastName}`}!</h2>;      
}

export default Header;