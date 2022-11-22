import { Outlet } from "react-router-dom";
import NavBar from "../shared/nav-bar";
import './index.scss';

const Layout = () => {
  const navBarItems = [
    {
      id: "logo",
      label: "logo",
      isImage: true,
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAL0ALQAtZF7+HAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wCCBAuLt2rqugAAACMSURBVDjL1ZMxCsJQEERfRPEk9im9mGfxBpaCnaXmBraeQEidKsKz2eIb/peEIOLAwu4Ws7PMbsUAKlOwYCaWmd4aWCV1B4yXpR59R61SitwKDdBHfgPaSTsF8zOmHz5NLykAeCRqvuvCfxGcgP0YF3ZqHy7c1Yt6jfo8dCF3idvkQjcRRVQ/f6bZBC+RBoeZnlCyqwAAAABJRU5ErkJggg==",
      className: "logo"
    },
    {
      id: "active",
      label: "Active",
      className: "active-articles"
    },
    {
      id: "recent",
      label: "Recent",
      className: "recent-articles"
    },
    {
      id: "comments",
      label: "Comments",
      className: "comments"
    },
    {
      id: "search",
      label: "Search",
      className: "search-articles"
    },
    {
      id: "login",
      label: "Login",
      className: "login"
    }
  ];

  return (
    <div className="layout">
      <NavBar items={navBarItems} className="layout-nav-bar" />

      <div className="content" style={{ marginBottom: "40px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
