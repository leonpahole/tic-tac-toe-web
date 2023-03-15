import { AppButton } from "@/components/shared/AppButton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic-tac-toe</title>
        <meta name="description" content="Play Tic-tac-toe online" />
      </Head>
      <main>
        <h1 className="text-2xl">Tailwind test</h1>
        <AppButton type="button">Hello</AppButton>
        <AppButton type="button" size="secondary">
          Hello
        </AppButton>
      </main>
    </>
  );
}
