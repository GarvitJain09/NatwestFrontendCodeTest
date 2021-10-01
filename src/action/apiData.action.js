import axios from "axios";
export const fetchPaymentData = (payments) => {
  return {
    type: "API_DATA",
    payload: payments,
  };
};
export const fetchMetaData = (metaData) => {
  return {
    type: "API_META_DATA",
    payload: metaData,
  };
};
export const ApiData = (pageNumber, data) => (dispatch) => {
  let url = "http://localhost:3000/api/payments";

  if (pageNumber) {
    url = url + `?pagelndex=${pageNumber}`;
  }
  axios.get(url).then((response) => {
    if (data) {
      dispatch(fetchPaymentData([...data, ...response.data.results]));
    } else {
      dispatch(fetchPaymentData(response.data.results));
    }
    dispatch(fetchMetaData(response.data.metaDatal));
  });
};
