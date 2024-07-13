import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooopss!!</h1>
      <h2>Something went wrong!!</h2>
    </div>
  );
};

export default Error;
