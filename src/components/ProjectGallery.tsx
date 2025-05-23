"use client";

import { useState, useEffect } from "react";
import { Calendar, Camera } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  location?: string;
  completionDate?: string;
  isPublished: boolean;
}

export default function ProjectGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects?published=true&limit=6');
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading projects...</p>
      </div>
    );
  }

  // If no projects, show "Projects Coming Soon"
  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Camera size={32} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">Projects Coming Soon</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're currently working on exciting surveying projects that will be showcased here. 
            Check back soon to see our latest work in action.
          </p>
          <div className="inline-flex items-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            <Calendar size={16} className="mr-2" />
            Updates coming soon
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="aspect-square group cursor-pointer overflow-hidden rounded-lg">
            <div 
              className="w-full h-full bg-gray-200 hover:opacity-90 transition-opacity relative"
              onClick={() => setSelectedImage(project.imageUrl)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{project.title}</p>
                <p className="text-xs text-gray-200">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
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