import { useQuery } from "react-query";
// import axios from "axios";
import { useToast, axios } from "utils";

const getAssetDetails = (address) => {
  // return axios({ url: `address/demo.eth/balances_v2/?key=1` });
  console.log("Address is ", address);
  return axios({
    method: "GET",
    url: `address/${address}/balances_v2/?key=ckey_0542c7a4ce9a45bd86ef4eef7d0`,
  });
};

const useGetAssetDetails = (id) => {
  const responseToast = useToast();
  return useQuery(["FETCH_ASSET_DETAILS", id], () => getAssetDetails(id), {
    enabled: Boolean(id),
    onError: (error) => {
      responseToast.toastError(error.error_message);
    },
  });
};

export default useGetAssetDetails;
