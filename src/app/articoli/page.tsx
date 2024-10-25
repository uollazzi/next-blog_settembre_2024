import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "@/lib/DAL";
import Link from "next/link";

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((p) => (
        <Card key={p._id.toString()}>
          <CardHeader>
            <CardTitle>{p.title}</CardTitle>
            <CardDescription>{p.author}</CardDescription>
            <CardContent>{p.body}</CardContent>
          </CardHeader>
          <CardFooter>
            <Link href={`/articoli/${p._id.toString()}`}>Vai al dettaglio</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
