import iconNotFound from "../assets/icons/404.png";

// eslint-disable-next-line react/prop-types
const NotFound = ({ msg }) => {
  return (
    <div>
      <img src={iconNotFound} className="mx-auto w-24 mb-3" />
      <h4 className="text-center text-white text-xl font-medium">{msg} :(</h4>
    </div>
  );
};

export default NotFound;
