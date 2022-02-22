import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Testemonials from './components/Testemonials';
import Trial from './components/Trial';
import About from './container/About';
import Banner from './container/Banner';
import Features from './container/Features';
import FeaturesBlue from './container/FeaturesBlue';
import Feedback from './container/Feedback';
import Info from './container/Info';
import News from './container/News';
import Portfolio from './container/Portfolio';
import Presentation from './container/Presentation';
import Pricing from './container/Pricing';
import Register from './container/Register';
import Services from './container/Services';
import Team from './container/Team';

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Partners />
			<Features />
			<About />
			<Info />
			<Portfolio />
			<Register />
			<Team />
			<Services />
			<Trial />
			<News />
			<Testemonials />
			<Presentation />
			<Partners />
			<FeaturesBlue />
			<Pricing />
			<Feedback />
			<Footer />
		</>
	);
}

export default App;
