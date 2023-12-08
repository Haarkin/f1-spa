import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/Root';
import HomePage from './components/Home';
import Racers from './components/Racers';
import FavoritesList from './components/FavoritesList';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '', element: <HomePage /> },
    { path: 'racers', element: <Racers /> },
    { path: 'favorites', element: <FavoritesList /> }
]},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
