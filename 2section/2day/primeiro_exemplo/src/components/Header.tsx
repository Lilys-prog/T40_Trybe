// receber as props
// exibir na tela

type HeaderProps = {
  title: string;
  color: string;
};

function Header({ title, color }:HeaderProps) {
  return (
    <header style={ { backgroundColor: color, padding: '1rem' } }>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
