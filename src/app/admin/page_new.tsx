"use client";

import { useState, useEffect } from "react";
import { Upload, X, Eye, Trash2 } from "lucide-react";

interface UploadedImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  caption?: string;
  category: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    files: null as FileList | null,
    caption: "",
    title: "",
    category: "Other",
  });

  // Simple password authentication (in production, use proper auth)
  const ADMIN_PASSWORD = "yiscotech2024";

  useEffect(() => {
    if (isAuthenticated) {
      fetchImages();
    }
  }, [isAuthenticated]);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();

      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setUploadForm((prev) => ({ ...prev, files }));
      setShowUploadForm(true);
    }
  };

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadForm.files || !uploadForm.caption.trim()) {
      alert("Please select files and enter a caption");
      return;
    }

    setUploading(true);

    try {
      for (const file of Array.from(uploadForm.files)) {
        // Convert file to base64
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const imageUrl = event.target?.result as string;

            // Create project via API
            const response = await fetch("/api/projects", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: uploadForm.title || file.name,
                description: uploadForm.caption,
                imageUrl,
                caption: uploadForm.caption,
                category: uploadForm.category,
                isPublished: true,
              }),
            });

            if (response.ok) {
              fetchImages(); // Refresh the images list
            } else {
              throw new Error("Failed to upload");
            }
          } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error uploading image");
          }
        };
        reader.readAsDataURL(file);
      }

      // Reset form
      setUploadForm({
        files: null,
        caption: "",
        title: "",
        category: "Other",
      });
      setShowUploadForm(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images");
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchImages(); // Refresh the images list
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter password to access the admin panel
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                YiscoTechGlobal Admin Panel
              </h1>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>

            {/* Upload Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Upload Project Images
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">
                        Click to upload project images
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handleFileSelect}
                        disabled={uploading}
                      />
                    </label>
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB each
                    </p>
                  </div>
                </div>
              </div>
              {uploading && (
                <p className="mt-2 text-sm text-gray-600">
                  Uploading images...
                </p>
              )}
            </div>

            {/* Upload Form Modal */}
            {showUploadForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Add Image Details
                  </h3>
                  <form onSubmit={handleImageUpload} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title (optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        value={uploadForm.title}
                        onChange={(e) =>
                          setUploadForm((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Enter image title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Caption *
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        rows={3}
                        value={uploadForm.caption}
                        onChange={(e) =>
                          setUploadForm((prev) => ({
                            ...prev,
                            caption: e.target.value,
                          }))
                        }
                        placeholder="Enter image caption"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        value={uploadForm.category}
                        onChange={(e) =>
                          setUploadForm((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                      >
                        <option value="Land Survey">Land Survey</option>
                        <option value="Topographic Mapping">
                          Topographic Mapping
                        </option>
                        <option value="Boundary Survey">Boundary Survey</option>
                        <option value="Construction Layout">
                          Construction Layout
                        </option>
                        <option value="Site Planning">Site Planning</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex space-x-3 pt-4">
                      <button
                        type="submit"
                        disabled={uploading}
                        className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
                      >
                        {uploading ? "Uploading..." : "Upload"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowUploadForm(false)}
                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Images Gallery */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Uploaded Images ({images.length})
              </h2>
              {images.length === 0 ? (
                <p className="text-gray-500">No images uploaded yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image) => (
                    <div key={image._id} className="relative group">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                        <img
                          src={image.imageUrl}
                          alt={image.title}
                          className="h-48 w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                          <button
                            onClick={() => setPreviewImage(image.imageUrl)}
                            className="p-2 bg-white rounded-full text-gray-700 hover:text-black"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => deleteImage(image._id)}
                            className="p-2 bg-white rounded-full text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-900 font-medium truncate">
                          {image.title}
                        </p>
                        {image.caption && (
                          <p className="text-xs text-gray-600 truncate">
                            {image.caption}
                          </p>
                        )}
                        <p className="text-xs text-gray-400">
                          {new Date(image.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
