// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import backgroundImage from "../../images/home_background.jpeg";
// import logo from "../../images/logo.png";
// import { AiOutlineSearch } from 'react-icons/ai';
// import { Link } from "react-router-dom";

// const Header = ({ title, onNavigationClick, activeButton }) => {
//   const handleClick = (navItem) => {
//     onNavigationClick(navItem);
//   };

//   return (
//     <AppBar position="static" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '310px', backgroundPosition: 'center center' }}>
//       <Toolbar style={{ justifyContent: 'space-between' }}>
//         <div style={{ paddingTop: 0.02, paddingBottom: 0.02, paddingLeft: 2, paddingRight: 2, color: 'black', borderColor: 'white', backgroundColor: 'white' }}>
//           <img src={logo} height={40} width={40} />
//         </div>
//         <div>
//           <Button color={activeButton === 'Home' ? "primary" : "inherit"} className={activeButton === 'Home' ? 'active-button' : 'inactive-button'} component = {Link} onClick={() => handleClick("Home")} style={{textTransform: 'capitalize'}} >Home</Button>
//           <Button color={activeButton === 'Insights' ? "primary" : "inherit"} className={activeButton === 'Insights' ? 'active-button' : 'inactive-button'} component={Link} onClick={() => handleClick("Insights")} style={{textTransform: 'capitalize'}} >Insights</Button>
//           <Button color={activeButton === 'Recipes' ? "primary" : "inherit"} className={activeButton === 'Recipes' ? 'active-button' : 'inactive-button'} component={Link} onClick={() => handleClick("Recipes")} style={{textTransform: 'capitalize'}} >Recipes</Button>
//           <Button color={activeButton === 'About Us' ? "primary" : "inherit"} className={activeButton === 'About Us' ? 'active-button' : 'inactive-button'} component={Link} onClick={() => handleClick("About Us")}style={{textTransform: 'capitalize'}} >About Us</Button>
//           <Button color={activeButton === 'Profile' ? "primary" : "inherit"} className={activeButton === 'Profile' ? 'active-button' : 'inactive-button'} component={Link} onClick={() => handleClick("Profile")} style={{textTransform: 'capitalize'}} >Profile</Button>
//           {/* Search Icon */}
//           <IconButton color="white" aria-label="search">
//             <AiOutlineSearch style={{ color: 'white', fontSize: 20 }} /> {/* Use the search icon component */}
//           </IconButton>
//         </div>
//       </Toolbar>
//       <Toolbar>
//         <Typography variant="h6" component="div" style={{ flexGrow: 1, paddingTop: 45, fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }}>
//           {title}
//         </Typography>
//       </Toolbar>
//       <Typography style={{
//         borderBottom: "8px solid #c25700", borderWidth: 7, width: '10%', alignItems: 'center', justifyContent: 'center', margin: "auto",
//         marginTop: "2px"
//       }}>
//       </Typography>
//     </AppBar>
//   );
// };

// export default Header;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import backgroundImage from "../../images/home_background.jpeg";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "310px",
        backgroundPosition: "center center",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div
          style={{
            paddingTop: 0.02,
            paddingBottom: 0.02,
            paddingLeft: 2,
            paddingRight: 2,
            color: "black",
            borderColor: "white",
            backgroundColor: "white",
          }}
        >
          <img src={logo} height={40} width={40} alt="Logo" />
        </div>
        <div>
          <Button color="inherit" style={{ textTransform: "capitalize" }} onClick={handleHomeClick}>
            Home
          </Button>
          {/* Add other navigation buttons */}
          <Link to="/insights" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ textTransform: "capitalize" }}>
              Insights
            </Button>
          </Link>
          <Link to="/recipes" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ textTransform: "capitalize" }}>
              Recipes
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ textTransform: "capitalize" }}>
              About Us
            </Button>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ textTransform: "capitalize" }}>
              Profile
            </Button>
          </Link>
          {/* Search Icon */}
          <IconButton color="white" aria-label="search">
            <AiOutlineSearch style={{ color: "white", fontSize: 20 }} />
          </IconButton>
        </div>
      </Toolbar>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          style={{
            flexGrow: 1,
            paddingTop: 45,
            fontWeight: "bold",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Typography
        style={{
          borderBottom: "8px solid #c25700",
          borderWidth: 7,
          width: "10%",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginTop: "2px",
        }}
      ></Typography>
    </AppBar>
  );
};

export default Header;
