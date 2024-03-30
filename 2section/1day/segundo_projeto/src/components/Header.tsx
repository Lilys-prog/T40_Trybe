import User from './User';

function Header() {
  return (
    <header>
      <h2>
        It is a beautiful day,
        {' '}
        <User />
      </h2>
    </header>
  );
}

export default Header;
