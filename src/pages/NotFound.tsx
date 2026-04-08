import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h1>404 Page Not Found</h1>
      </div>
      <Footer />
    </>
  );
}