import { Outlet } from "react-router-dom";
import TitleBar from './TitleBar';
import NotesBar from './NotesBar';

function Layout() {
    return (
        <>
          <TitleBar />
          <main>
            <NotesBar />
            <Outlet />
          </main>
        </> 
    );
  }

export default Layout;
