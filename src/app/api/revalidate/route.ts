import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type RequestBody = {
  tags: string[];
};

type ResponseBody = {
  revalidated: boolean;
  tags: string[];
};

export async function POST(
  request: Request,
): Promise<NextResponse<ResponseBody>> {
  const { tags }: RequestBody = await request.json();

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  return NextResponse.json({
    revalidated: true,
    tags,
  });
}
