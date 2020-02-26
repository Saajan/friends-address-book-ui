const baseApiUrl = process.env.REACT_APP_REST_API_LOCATION || "";

export const apiPostRequest = async ({ fields, endpoint }: any) => {
  try {
    let response = await fetch(`${baseApiUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(fields)
    }).then((response: any) => {
      return response.json();
    });
    return response;
  } catch (e) {
    return {
      responseStatus: false,
      responseMessage: "Something went wrong."
    };
  }
};

export const apiGetRequest = async ({ endpoint }: any) => {
  try {
    let response = await fetch(`${baseApiUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then((response: any) => {
      return response.json();
    });
    return response;
  } catch (e) {
    return {
      responseStatus: false,
      responseMessage: "Something went wrong."
    };
  }
};
