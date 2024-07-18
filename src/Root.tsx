import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Root(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
