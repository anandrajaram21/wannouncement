import Head from "next/head";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <Head>
        <title>WAnnouncement</title>
      </Head>
      <div className="flex flex-col gap-5 p-5 md:flex-row">
        <div></div>
        <div></div>
        <Input />
      </div>
    </>
  );
}
