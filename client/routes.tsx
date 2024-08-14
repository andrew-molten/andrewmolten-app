import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Blog from './pages/Blog.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
  </Route>,
)
