import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

interface UploadResult {
  url: string;
  public_id: string;
}

export const UploadMultiImage = async (images: File[]): Promise<UploadResult[]> => {
  try {
    // Validate input
    if (!images || images.length === 0) {
      throw new Error("No images provided for upload");
    }

    const uploadResults = await Promise.all(
      images.map(async (file) => {
        try {
          // Verify file is valid
          if (!(file instanceof File) || file.size === 0) {
            throw new Error(`Invalid file: ${file.name}`);
          }

          // Convert file to buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          // Upload to Cloudinary
          return new Promise<UploadResult>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              {
                folder: "appvault",
                resource_type: "auto",
                allowed_formats: ["jpg", "jpeg", "png", "gif", "webp"]
              },
              (error, result) => {
                if (error) {
                  console.error(`Upload failed for ${file.name}:`, error);
                  reject(error);
                } else if (!result) {
                  reject(new Error(`No result returned for ${file.name}`));
                } else {
                  resolve({
                    url: result.secure_url,
                    public_id: result.public_id
                  });
                }
              }
            );

            uploadStream.end(buffer);
          });
        } catch (error) {
          console.error(`Error processing file ${file.name}:`, error);
          throw error;
        }
      })
    );

    return uploadResults;
  } catch (error) {
    console.error("Bulk upload error:", error);
    throw new Error("Failed to upload images. Please try again.");
  }
};