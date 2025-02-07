import "./App.css";
import "./assets/css/aos.css";
import "./assets/css/adminlayout.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import EventList from "./components/eventlist";
import EventDetail from "./components/eventdetail";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Login from "./components/login";
import Signup from "./components/signup";
import ScrollToTop from "./components/scrollToTop";
import Page404 from "./components/page404";
import MyBookings from "./components/mybookings";
import Profile from "./components/profile";

import AdminHeader from "./components/admin/admin-header";
import AdminFooter from "./components/admin/admin-footer";
import AdminAsideMenu from "./components/admin/admin-asidemenu";

import AddEvent from "./components/admin/addevent";
import ViewEvents from "./components/admin/viewevents";
import AddCategory from "./components/admin/addcategory";
import ViewCategory from "./components/admin/viewcategory";
import ViewUsers from "./components/admin/viewusers";
import ChangeAdminCredentials from "./components/admin/changecredentials";
import ChangePersonalDetails from "./components/admin/changepersonaldetails";
import { MenuProvider } from "./components/admin/menucontext";

const RegularLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <MenuProvider>
        <AdminHeader />
        <div className="admin-layout-content">
          <AdminAsideMenu />
          <main className="admin-main-content">{children}</main>
        </div>
        <AdminFooter />
      </MenuProvider>
    </div>
  );
};

const App = () => (
  <Router>
    <ScrollToTop />
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <RegularLayout>
              <Home />
            </RegularLayout>
          }
        />
        <Route
          path="/about"
          element={
            <RegularLayout>
              <About />
            </RegularLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <RegularLayout>
              <Contact />
            </RegularLayout>
          }
        />
        <Route
          path="/home"
          element={
            <RegularLayout>
              <Home />
            </RegularLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <RegularLayout>
              <Gallery />
            </RegularLayout>
          }
        />
        <Route
          path="/login"
          element={
            <RegularLayout>
              <Login />
            </RegularLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <RegularLayout>
              <Signup />
            </RegularLayout>
          }
        />
        <Route
          path="/mybookings"
          element={
            <RegularLayout>
              <MyBookings />
            </RegularLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <RegularLayout>
              <Profile />
            </RegularLayout>
          }
        />

        <Route
          path="/events"
          element={
            <RegularLayout>
              <EventList />
            </RegularLayout>
          }
        />
        <Route
          path="/event/:eventId"
          element={
            <RegularLayout>
              <EventDetail />
            </RegularLayout>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminLayout>
              <ViewEvents />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/add-event"
          element={
            <AdminLayout>
              <AddEvent />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/view-events"
          element={
            <AdminLayout>
              <ViewEvents />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/add-category"
          element={
            <AdminLayout>
              <AddCategory />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/view-category"
          element={
            <AdminLayout>
              <ViewCategory />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/view-users"
          element={
            <AdminLayout>
              <ViewUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/change-credentials"
          element={
            <AdminLayout>
              <ChangeAdminCredentials />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/change-personal-details"
          element={
            <AdminLayout>
              <ChangePersonalDetails />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <ViewEvents />
            </AdminLayout>
          }
        />

        <Route
          path="*"
          element={
            <RegularLayout>
              <Page404 />
            </RegularLayout>
          }
        ></Route>
      </Routes>
    </main>
  </Router>
);

export default App;
