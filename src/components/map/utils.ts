import axios from "axios";

export const getImageUrl = async (img: string) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_NASA_API_BASE_URL}/asset/${img}`
    );
    return res.data.collection.items[0].href;
  } catch (err) {
    console.log(err);
    return "";
  }
};
