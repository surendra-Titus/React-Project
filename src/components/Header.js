import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 className="font-bold text-slate-900 text-lg p-3">
      <Link to="/">zozo Food</Link>
    </h1>
  );
};

const Header = () => {
  return (
    <>
      <div className="h-16 bg-violet-400 flex justify-between shadow-lg ">
        <Title />
        <div className="nav-item">
          <ul className="flex py-3">
            <li className="px-8 text-zinc-900">
              <Link to="/">Home</Link>
            </li>
            <li className="px-8 text-zinc-900">
              <Link to="/about">About</Link>
            </li>
            <li className="px-8 text-zinc-900">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-8 text-zinc-900">
              <Link to="/cart">Cart</Link>
              <span className="font-bold text-lg pr-px">2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
