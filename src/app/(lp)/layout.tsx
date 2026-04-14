import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
