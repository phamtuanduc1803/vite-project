const ActionBar = () => {
  return (
    <aside className="flex h-screen w-[300px] flex-col items-center border-r border-gray-200 bg-white">
      <div className="group relative">
        <button>Test</button>
        <div className="absolute z-10 top-[2.5rem] hidden w-[300px] h-auto bg-white drop-shadow-lg group-focus:flex"></div>
      </div>
    </aside>
  );
};

export default ActionBar;
