
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home2 from './components/Home2';
import Navbar from './components/Navbar';
import Home1 from './pages/Home1';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Posts from './pages/Posts';
import Post from './components/Post';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home1 />}>
            <Route path="" element={<Home2 />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/posts" element={<Posts />}>
            <Route path="" element={<Post />} />
          </Route>
   </Routes>
   <Footer />
    </Router>
   
  );
}

export default App;
