export default async function getData(url, options = {}) {
  try {
    const response = await fetch(url, options);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Response data:", data);
    return data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
}
