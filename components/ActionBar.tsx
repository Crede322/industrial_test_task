const ActionBar = () => {
  return (
    <div className="w-full max-w-[1820px] mx-auto flex justify-between sticky bottom-0">
      <button className="actionbar-button button-main flex items-center">
        <p>Наверх</p>
      </button>
      <button className="actionbar-button button-main">
        <p>Начать играть</p>
      </button>
    </div>
  );
};

export default ActionBar;
