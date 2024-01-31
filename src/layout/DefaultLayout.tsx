import { Footer, Navigation, TopHeader } from "@/shared";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <header className="pb-4 border-b border-solid border-neutral-80">
        <TopHeader />
        <Navigation />
      </header>

      <section className="pt-8 pb-12 container mx-auto">{children}</section>

      <Footer />
    </main>
  );
};

export default DefaultLayout;
