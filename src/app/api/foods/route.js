import dbConnect from "@/lib/mongodb";
import Food from "@/models/Food";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();

    // Get limit from query params (default: 6)
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "6");
    const skip = parseInt(searchParams.get("skip") || "0");

    // Fetch published foods only, sorted by newest first
    const foods = await Food.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();

    // Get total count
    const total = await Food.countDocuments({ isPublished: true });

    console.log("✓ Foods fetched from MongoDB:", {
      count: foods.length,
      total,
      limit,
      skip,
    });

    return NextResponse.json({
      success: true,
      data: foods,
      pagination: {
        total,
        limit,
        skip,
        hasMore: skip + limit < total,
      },
    });
  } catch (error) {
    console.error("✗ Error fetching foods:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
