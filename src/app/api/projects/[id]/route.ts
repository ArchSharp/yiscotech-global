/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await dbConnect();

//     const project = await Project.findById(params.id).lean();

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       data: project,
//     });
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch project" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // Extract ID from the dynamic route URL
    const id = request.nextUrl.pathname.split("/").pop();

    const project = await Project.findById(id).lean();

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const body = await request.json();
    const {
      title,
      description,
      imageUrl,
      category,
      location,
      completionDate,
      isPublished,
    } = body;

    const updateData: any = {
      title,
      description,
      imageUrl,
      category,
      location,
      isPublished,
    };

    if (completionDate) {
      updateData.completionDate = new Date(completionDate);
    }

    const project = await Project.findByIdAndUpdate(params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const project = await Project.findByIdAndDelete(params.id);

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
