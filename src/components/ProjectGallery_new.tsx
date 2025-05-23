"use client";

import { useState, useEffect } from "react";

interface UploadedImage {
  id: string;
  filename: string;
  url: string;
  uploadDate: string;
}

interface PlaceholderProject {
  id: string;
  title: string;
  image: string;
}

export default function ProjectGallery() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load images from localStorage
    const savedImages = localStorage.getItem("yiscotech-images");
    if (savedImages) {
      try {
        const parsedImages = JSON.parse(savedImages);
        setImages(parsedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    }
  }, []);

  // Professional placeholder projects with actual images
  const placeholderProjects: PlaceholderProject[] = [
    { 
      id: "1", 
      title: "Residential Survey", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: "2", 
      title: "Commercial Development", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: "3", 
      title: "Topographic Mapping", 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: "4", 
      title: "Boundary Survey", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: "5", 
      title: "Construction Layout", 
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: "6", 
      title: "Site Planning", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const hasUploadedImages = images.length > 0;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasUploadedImages ? (
          // Display uploaded images
          images.slice(0, 6).map((image) => (
            <div key={image.id} className="aspect-square group cursor-pointer overflow-hidden rounded-lg">
              <div 
                className="w-full h-full bg-gray-200 hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.filename}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))
        ) : (
          // Display professional placeholder projects
          placeholderProjects.map((project) => (
            <div key={project.id} className="aspect-square group cursor-pointer overflow-hidden rounded-lg">
              <div 
                className="w-full h-full bg-gray-200 hover:opacity-90 transition-opacity relative"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{project.title}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
