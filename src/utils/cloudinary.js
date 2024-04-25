import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    // console.log("RESPONSE from uploading Image is -->", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the localSaved file from server
    return null;
  }
};

const deleteFromCloudinary = async (imagePublicId) => {
  try {
    if (!imagePublicId) return console.log("ImageID is not found");
    const response = await cloudinary.uploader.destroy(imagePublicId, {
      resource_type: "auto",
      invalidate: true,
    });
    return response;
  } catch (error) {
    console.log("Error while deleting Image from Cloudinary ", error?.message);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
