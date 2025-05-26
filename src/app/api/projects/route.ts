/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Build query
    const query: any = {};

    if (published === "true") {
      query.isPublished = true;
    }

    if (category && category !== "all") {
      query.category = category;
    }

    const projects = await Project.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return NextResponse.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const {
      title,
      description,
      imageUrl,
      caption,
      category,
      location,
      completionDate,
      isPublished,
    } = body;

    // Validate required fields
    if (!title || !description || !imageUrl || !category) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    const project = new Project({
      title,
      description,
      imageUrl,
      caption,
      category,
      location,
      completionDate: completionDate ? new Date(completionDate) : undefined,
      isPublished: isPublished || false,
    });

    await project.save();

    return NextResponse.json(
      {
        success: true,
        data: project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create project" },
      { status: 500 }
    );
  }
}
