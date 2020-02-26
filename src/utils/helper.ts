export const getErrorMessage = (error: any) => {
  let message;
  switch (error.status) {
    case 500:
      message = "Internal Server Error.";
      break;
    case 404:
      message = "Not Found.";
      break;
    default:
      message = "Something Went Wrong";
  }
  return message;
};
