import axios from "axios";
const urlBase = import.meta.env.VITE_API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: urlBase,
  timeout: 5000,
});
export const fetchGames = async <T>(
  endpoint: string,
  pathParam?: number | string,
  queryParams?: Record<string, any>,
): Promise<T> => {
  const url = pathParam ? `${endpoint}/${pathParam}` : endpoint
  const response = await axiosInstance.get<T>(url, { params: queryParams })
  return response.data
}