import "./output.css";
import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component';
import LogIn from './routes/log-in/login.component';
import ManageBooks from "./routes/manage-books/manage-books.component";
import Notification from "./routes/notification/notification.component";
import BooksList from "./components/Books/books-list/books-list.component";
import ManageUsers from "./routes/manage-users/manage-users.component";
import AdminProtectedRoute from "./routes/protected-route/adminProtected-route.component";
import UserProtectedRoute from "./routes/protected-route/userProtected-route.component";
import AdminNav from "./routes/admin-nav/admin-nav.component";
import UserNav from "./routes/user-nav/user-nav.component";
import UserIssuedBooks from "./components/user-issued-books/user-issued-books.component";
import UserNotifications from "./components/user-notifications/user-notifications.component";
import IssueFine from "./routes/issue-fine/issue-fine.component";
import AdminLogIn from "./components/Admin-login/admin-login.component";
import UserLogIn from "./components/user-login/user-login.component";
import PayFine from "./components/pay-fine/pay-fine.component";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}>
          <Route index element={<UserLogIn/>} />
          <Route path="admin-login" element={<AdminLogIn/>} />      
        </Route>

        {/* Admin Protected Routes */}
        <Route path="/admin-dashboard" element={<AdminProtectedRoute><AdminNav/></AdminProtectedRoute>}>
          <Route path="manage-books" element={<ManageBooks/>}/>
          <Route path="history" element={<Notification/>}/>
          <Route path="manage-users" element={<ManageUsers/>}/>
          <Route path="issue-fine" element={<IssueFine/>}/>
          <Route path="book-inventory" element={<BooksList/>}/>
        </Route>

        {/* User Protected Routes */}
        <Route path="/user-dashboard" element={<UserProtectedRoute><UserNav/></UserProtectedRoute>}>
          <Route index element={<UserIssuedBooks/>}/>
          <Route path="book-inventory" element={<BooksList/>} />
          <Route path="notifications" element={<UserNotifications/>} />
          <Route path="pay-fine" element={<PayFine/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;