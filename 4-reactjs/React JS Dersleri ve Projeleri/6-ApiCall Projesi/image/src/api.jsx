import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID NcvR1j71rqZv1UaRc-XRGGUkXTS9OHbb47Ypkej-2hE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
