import apiClient from "./client";

const EndPoint = "/listings";

const getListings = () => apiClient.get(EndPoint);
const postListings = (listings, progress) => {
  const data = new FormData();
  data.append("title", listings.title);
  data.append("price", listings.price);
  data.append("category", listings.category);
  data.append("description", listings.description);

  listings.images.forEach((image, index) => {
    data.append("images", {
      name: index + "image",
      type: `${image}/jbeg`,
      uri: image
    });
  });

  if (listings.location)
    data.append("location", JSON.stringify(listings.location));

  return apiClient.post(EndPoint, data, {
    onUploadProgress: value => console.log(value)
    // onUploadProgress: ({end ,start}) => console.log(end/start)
  });
};

export default {
  getListings,
  postListings
};
