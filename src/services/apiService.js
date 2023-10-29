import axios from "axios";

export async function fetchData(type, page = 1, pageSize = 10) {
  try {
    const response = await axios.get(
      `https://anapioficeandfire.com/api/houses${type}?page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    throw error;
  }
}
