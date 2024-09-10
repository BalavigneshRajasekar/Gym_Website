/* eslint-disable no-unused-vars */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Image } from "antd";
import "./Nav.css";

const pages = ["About", "Contact", "Blog"];
function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Navigation = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <>
      <AppBar className="bg-dark">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuItem sx={{ display: { xs: "none", md: "block" }, mr: 1 }}>
              <Image
                preview={false}
                width={50}
                src="public/GymIcon.png"
                className="rounded-5"
              ></Image>
            </MenuItem>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".4rem",
                color: "inherit",
                textDecoration: "none",
                marginTop: -2,
              }}
            >
              DARK <span className="text-danger">KNIGHT</span>
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "15px",
                  top: "35px",
                  lineHeight: "20px",
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: ".1rem",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                Unisex Fitness Centre
              </Typography>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem
                  sx={{
                    width: 200,
                    fontWeight: 700,
                    letterSpacing: 3,
                  }}
                >
                  <FitnessCenterIcon sx={{ marginRight: 1 }} />
                  Services
                </MenuItem>
                <MenuItem
                  sx={{ width: 250, fontWeight: 700, letterSpacing: 3 }}
                >
                  <CurrencyBitcoinIcon sx={{ marginRight: 1 }} />
                  Subscriptions
                </MenuItem>
                <MenuItem
                  sx={{ width: 250, fontWeight: 700, letterSpacing: 3 }}
                >
                  <ReviewsIcon sx={{ marginRight: 1 }} />
                  Testimony
                </MenuItem>
                <MenuItem
                  sx={{ width: 250, fontWeight: 700, letterSpacing: 3 }}
                >
                  <InfoIcon sx={{ marginRight: 1 }} />
                  About
                </MenuItem>
                <MenuItem
                  sx={{ width: 250, fontWeight: 700, letterSpacing: 3 }}
                >
                  <ContactSupportIcon sx={{ marginRight: 1 }} />
                  Contact
                </MenuItem>
              </Menu>
            </Box>
            <MenuItem sx={{ display: { xs: "block", md: "none" }, mr: 1 }}>
              <Image
                width={50}
                src="public/GymIcon.png"
                className="rounded-5"
              ></Image>
            </MenuItem>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".4rem",
                color: "inherit",
                textDecoration: "none",
                marginTop: -2,
              }}
            >
              DARK <span className="text-danger">KNIGHT</span>
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "15px",
                  top: "35px",
                  lineHeight: "20px",
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: ".1rem",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                Unisex Fitness Centre
              </Typography>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "end" },
              }}
            >
              <a
                className="nav1"
                onClick={(e) => Navigation(e)}
                href="#services"
              >
                <FitnessCenterIcon sx={{ marginRight: 1 }} />
                Services
              </a>
              <MenuItem className="nav1">
                <CurrencyBitcoinIcon sx={{ marginRight: 1 }} />
                Subscriptions
              </MenuItem>
              <MenuItem className="nav1">
                <ReviewsIcon sx={{ marginRight: 1 }} />
                Testimony
              </MenuItem>
              <MenuItem className="nav1">
                <InfoIcon sx={{ marginRight: 1 }} />
                About
              </MenuItem>
              <MenuItem className="nav1">
                <ContactSupportIcon sx={{ marginRight: 1 }} />
                Contact
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;
