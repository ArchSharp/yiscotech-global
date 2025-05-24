import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { imageUrl, caption, filename } = body;

    // Validate required fields
    if (!imageUrl || !caption) {
      return NextResponse.json(
        { success: false, error: 'Image URL and caption are required' },
        { status: 400 }
      );
    }

    // Create a simple project entry for the uploaded image
    const project = new Project({
      title: filename || 'Uploaded Image',
      description: caption,
      imageUrl,
      caption,
      category: 'Other',
      isPublished: true
    });

    await project.save();

    return NextResponse.json({
      success: true,
      data: project
    }, { status: 201 });

  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
