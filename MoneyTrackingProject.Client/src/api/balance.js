const BASE_URL = "http://localhost:5000"; // TODO: real api url

export const getBalanceData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/balance`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch balance data: " + error.message);
  }
};
