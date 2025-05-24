import mongoose from 'mongoose';

export interface IProject {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  caption?: string;
  category: string;
  location?: string;
  completionDate?: Date;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },  imageUrl: {
    type: String,
    required: [true, 'Project image is required']
  },
  caption: {
    type: String,
    trim: true,
    maxlength: [200, 'Caption cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Land Survey', 'Topographic Mapping', 'Boundary Survey', 'Construction Layout', 'Site Planning', 'Other']
  },
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  completionDate: {
    type: Date
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
ProjectSchema.index({ isPublished: 1, createdAt: -1 });
ProjectSchema.index({ category: 1 });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
