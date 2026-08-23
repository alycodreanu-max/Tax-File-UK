import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "scaffold_only",
      message: "This endpoint is intentionally inactive until its production implementation and tests are complete.",
    },
    { status: 501 },
  );
}

export async function POST() {
  return NextResponse.json(
    {
      status: "scaffold_only",
      message: "Writes and HMRC submissions are disabled in the scaffold.",
    },
    { status: 501 },
  );
}
