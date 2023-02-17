import error_404 from "../assets/undraw_Page_not_found.png";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-8xl pl-10 text-[#A78BFA]">
          Oops! Something Went wrong.
        </h1>
        <span className="text-xl pl-10 text-[#d2c9ef]">
          {`${error?.status} : ${error?.statusText}`}
        </span>
      </div>
      <img className="h-[32rem] pr-2" alt="Error404" src={error_404} />
    </div>
  );
};

export default Error;
