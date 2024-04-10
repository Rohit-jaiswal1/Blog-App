
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="bg-gray-800 p-4 sticky flex">
   <h1 className="text-white font-semibold text-xl">My Blog APP</h1>
      {
        isLogin &&(
          <div className="flex ml-auto mr-auto">

            <div value={value}
                onChange={(e, val) => setValue(val)}>
                <ul className="flex space-x-6">
                  <li><a href="/blogs" className="text-white text-sm">Blogs</a></li>
                  <li><a href="/my-blogs" className="text-white text-sm">My Blogs</a></li>
                  <li><a href="/create-blog" className="text-white text-sm">Create Blog</a></li>
                </ul>
            </div>
          </div>

        )
      }
     
        <div className="flex ml-auto">
      {
        !isLogin && (
          <div className="flex gap-x-4">
            <Link to='/login' className="text-white">Login</Link>
            <Link to='/register' className="text-white">Register</Link>
          </div>
        )
      }

      {
        isLogin &&(
          <div>
               <button className="m-1 text-white" onClick={handleLogout}>Logout</button>
          </div>
        )
      }
        </div>

    

   </div>


  );























  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">My Blog APP</Typography>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                <Tab
                  label="Create Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
