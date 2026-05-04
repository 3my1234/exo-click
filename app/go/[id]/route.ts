import { NextResponse } from "next/server";
import { sanitizeDestination } from "@/lib/redirect";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: Params) {
  const { id } = await context.params;
  const url = new URL(request.url);
  const dest = sanitizeDestination(url.searchParams.get("dest"));

  const redirectTarget = new URL(dest);
  redirectTarget.searchParams.set("ref", id);

  return NextResponse.redirect(redirectTarget.toString(), 302);
}