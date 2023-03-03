const Logo = () => {
  return (
    <div className="flex">
      <img
        src="/images/rocket.png"
        loading="lazy"
        className="w-20"
        alt="tailus logo"
      />
      <div className="ml-3 pt-4  text-left text-2xl font-bold text-cyan-900">
        <p className="text-3xl leading-7">
          <span id="content1">AI</span>
          <span id="content2">Expertia</span>
        </p>
      </div>
    </div>
  );
};

export { Logo };
