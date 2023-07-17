import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewMessageForm />
    </main>
  );
}

const NewMessageForm = (): ReactNode => {
  return (
    <>
      <input type="text" data-testid="messageText" />
      <input type="button" data-testid="sendButton" value={"button"} />
    </>
  );
};
