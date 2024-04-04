type HeaderProps = {
  title: string;
  color: string;
};

function Header({ title, color }:HeaderProps) {
  return (
    <header
      style={ { backgroundColor: color,
        padding: '0.5rem',
      } }
    >
      <h1>{title}</h1>
      <hr />
    </header>
  );
}

export default Header;
