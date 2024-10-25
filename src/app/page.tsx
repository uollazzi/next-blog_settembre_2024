import Image from "next/image";
import fujiPic from "../../public/fuji.jpeg";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Image src={fujiPic} alt="Foto del monte Fuji" width={600} />
    </>
  );
}
