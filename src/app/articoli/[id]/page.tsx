import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getPostById } from "@/lib/DAL";
import { Metadata } from "next";

interface Prop {
  params: {
    id: string;
  };
}

// funzione con nome riservato
export async function generateMetadata({ params }: Prop): Promise<Metadata> {
  const { id } = await params;
  const p = await getPostById(id);

  return {
    title: p?.title,
    description: p?.body,
    authors: [{ name: p?.author, url: "" }],
  };
}

const Page = async ({ params }: Prop) => {
  const { id } = await params;
  const p = await getPostById(id);

  if (!p) return <p>Articolo non trovato.</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{p.title}</CardTitle>
        <CardDescription>{p.author}</CardDescription>
        <CardContent>{p.body}</CardContent>
      </CardHeader>
    </Card>
  );
};

export default Page;
