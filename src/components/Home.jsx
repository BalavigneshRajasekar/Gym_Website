/* eslint-disable no-unused-vars */
import { Container, Typography } from "@mui/material";
import { Image } from "antd";
import React from "react";
import "./Home.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
  { img: "public/personal.jpg", title: "Personal Training" },
  { img: "public/group.jpg", title: "Group Training" },
  { img: "public/weightloss.jpg", title: "Weight Loss" },
  { img: "public/weightgain.jpg", title: "Weight Gain" },
  { img: "public/strength.jpg", title: "Strength Training" },
  { img: "public/crossfit.jpg", title: "CrossFit Training" },
  { img: "public/contestprep.jpg", title: "Contest Preparation" },
  { img: "public/zumba.jpg", title: "Zumba" },
];

function Home() {
  return (
    <>
      <div className="div1">
        <div className="position-fixed top-5 img-div">
          <img src="public/hero-1.jpg"></img>
        </div>
        <div className="div2">
          <h1 className="home-h">
            TIME TO BURN Some <span className="text-danger">Calories</span>
          </h1>
        </div>
        <div className="div3" id="services">
          <h2 className=" home-h2">What We Offer !!!</h2>
          <ImageList sx={{ width: "100%", height: "40%" }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  className="serviceImg"
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
}

export default Home;
