import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const returnListOfErrors = (error) => {
  const { message = "Validation Error", errors } = error;
  return (
    <>
      {errors.length > 1 ? (
        <>
          <span className="font-bold">{message}&nbsp;:</span>
          <ul>
            {errors.map((errorMessage, errorIndex) => (
              <li className="ml-2">
                &ensp;
                {errorIndex + 1}
                {")"}&nbsp;{errorMessage.message}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>{errors[0].message}</>
      )}
    </>
  );
};

const commonToastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

const useToast = () => {
  const toastSuccess = (message) => {
    if (message) toast.success(message, commonToastConfig);
  };

  const toastError = (message, error = null) => {
    if (
      error &&
      "code" in error &&
      error.code === 422 &&
      "errors" in error &&
      error.errors.length > 0
    ) {
      // validation error
      toast.error(returnListOfErrors(error), commonToastConfig);
    } else if (message) {
      toast.error(message, commonToastConfig);
    }
  };

  const toastInfo = (message) => {
    if (message) toast.info(message, commonToastConfig);
  };

  return {
    toastSuccess,
    toastInfo,
    toastError,
  };
};

export default useToast;
