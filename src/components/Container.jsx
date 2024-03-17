// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-b from-violet-500 to-fuchsia-500 p-8 w-full sm:w-96 mx-auto h-dvh sm:h-[80%] transition-all sm:rounded-lg">
      {children}
    </div>
  );
};

export default Container;
