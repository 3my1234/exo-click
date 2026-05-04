import { NextResponse } from "next/server";
import { getRuntimeConfig } from "@/lib/config";

export async function GET() {
  return NextResponse.json(getRuntimeConfig(), {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600"
    }
  });
}
