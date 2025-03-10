export default function Header(props) {
  const { handleToogleMenu } = props;
  return (
    <header>
      <button className="open-nav-button" onClick={handleToogleMenu}>
        <i class="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokedex</h1>
    </header>
  );
}
