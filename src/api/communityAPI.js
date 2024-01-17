import axios from "axios";

// Fleamarket
// All Items
export const getFleamarketItems = async () => {
  try {
    const response = await axios.get('');

    if (response.status === 200) {
      return response.data;

    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
     console.error(error);
   }
};

// One Item
export const getFleamarketById = async (id) => {
  try {
    const response = await axios.get('', { params : { id } });

    if (response.status === 200) {
      return response.data;

    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
     console.error(error);
   }
};