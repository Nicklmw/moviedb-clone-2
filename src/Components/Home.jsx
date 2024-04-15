import Trending from "./Trending";
import Trailer from "./Trailer/Trailer";
import FreeWatch from "./FreeWatch/FreeWatch";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Trending />
      <Trailer />
      <FreeWatch />
      <Join />
      <Footer />
    </>
  );
}
