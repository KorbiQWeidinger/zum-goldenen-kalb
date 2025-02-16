import { PropsWithChildren } from "react";
import Header from "../header/Header";
import { Footer } from "../Footer";

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
