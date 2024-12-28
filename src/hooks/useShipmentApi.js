import axios from "axios";

const useShipmentApi = () => {
  const fetchShipment = async ({
    message,
    isDocketSearch,
    onSuccess,
    onError,
    onLoading,
  }) => {
    const url = `https://testwebsiteapi.vinsumaxpress.com/api/DocketTracking?docketno=${message}&isDocket=${isDocketSearch}`;
    onLoading(true);
    try {
      const res = await axios.get(url);
      onSuccess(res.data);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      onError();
    } finally {
      onLoading(false);
    }
  };
  return { fetchShipment };
};

export default useShipmentApi;
