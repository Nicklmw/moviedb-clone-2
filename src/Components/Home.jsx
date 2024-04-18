import Trending from "./Trending";
<<<<<<< HEAD
import Trailer from "./Trailer/Trailer";
import FreeWatch from "./FreeWatch/FreeWatch";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";
=======
import Footer from "./Footer/Footer.js";
import FreeWatch from "./FreeWatch/FreeWatch.js";
import Join from "./Join/Join.js";
import Trailer from "./Trailer/Trailer.js";
import AnimatedCarousel from "./AnimatedCarousel/AnimatedCarousel.js";
import Container from "@mui/material/Container";
import PopularMovies from "./Popular/PopularMovies.js";
import PopularShows from "./Popular/PopularShows.js";
import Trending1 from "./TrendingR/Trending.js";
>>>>>>> upstream/main

export default function Home() {
  return (
    <>
      <Trending />
      <Trailer />
      <FreeWatch />
<<<<<<< HEAD
=======
      <Container>
        <Trending1 />
        <PopularMovies />
        <PopularShows />
      </Container>
      <AnimatedCarousel />
>>>>>>> upstream/main
      <Join />
      <Footer />
    </>
  );
}
