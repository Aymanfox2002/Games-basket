import GridContainer from "../components/defaults/GridContainer";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/navbar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="background grid">
      <GridContainer cols={12}>
        <Sidebar />
        <MaxWidthWrapper className="col-span-10">
          <Navbar />
          {children}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
