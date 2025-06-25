import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const  App = () => {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main  className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
