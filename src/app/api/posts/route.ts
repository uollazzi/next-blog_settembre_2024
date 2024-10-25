import * as DAL from "@/lib/DAL";

export async function POST(req: Request) {
    const post = await req.json();

    const r = await DAL.addPost(post);

    return Response.json(r);
}

export async function GET() {
    return Response.json(await DAL.getPosts());
}