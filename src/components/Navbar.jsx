import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <form>
            <input type="text" placeholder="busque um filme" />
            <button type="submit"></button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
