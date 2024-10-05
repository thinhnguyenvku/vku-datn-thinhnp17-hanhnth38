import Navbar from "./shared/NavBar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<CategoryCarousel />
			<LatestJobs />
			<Footer />
		</div>
	);
};

export default Home;
