import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const allTheTerms = (search) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(
      `https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient?search=${search}`
    )
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data});
    })
    .catch((error) => {
      console.log("error", { error });
      dispatch({ type: FETCH_FAIL, payload: error });
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (searchTerm) => {
  return { type: FETCH_SUCCESS, payload: searchTerm };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
