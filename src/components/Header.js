const Title = () => {
  return <h1 className="font-bold text-slate-900 text-lg p-3">zozo Food</h1>;
};

const Header = () => {
  return (
    <>
      <div className="h-16 bg-violet-400 flex justify-between">
        <Title />
        <div className="nav-item">
          <ul className="flex py-3">
            <li className="px-8 text-zinc-900">Home</li>
            <li className="px-8 text-zinc-900">About</li>
            <li className="px-8 text-zinc-900">Contact</li>
            <li className="px-8 text-zinc-900">
              Cart <span className="font-bold text-lg pr-px">2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
