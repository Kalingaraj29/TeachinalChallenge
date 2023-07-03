import React, { useState } from "react";
import "./Homepage.css";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaGlassWhiskey,
  FaInfinity,
  FaMale,
} from "react-icons/fa";

export default function Homepage() {
  const [data, setData] = useState([
    {
      icons: "FaHandshake",
      id: 0,
      heading: "Choose your Local",
      Content: "lorem dbvdkvbd dkjbdv bdvsvh sdvh dvbhdv  dbvh bdvds",
      status: false,
    },
    {
      icons: "FaGlobeAmericas",
      id: 1,
      heading: "Track your Conversion",
      Content: "lorem dbvdkvbd dkjbdv bdv svhs dvhd vbhdv  dbvhbd",
      status: false,
    },
    {
      icons: "FaGlassMartini",
      id: 2,
      heading: "Customized Campaigns",
      Content: "lorem dbvdkvbd dkjbdv bdvsvhs dvhdvbhdv",
      status: false,
    },
    {
      icons: "FaInfinity",
      id: 3,
      heading: "Get dedicated support team ",
      Content: "lorem dbvdkvbd dkjbdvbd vsvhsdv hdv bhdv",
      status: false,
    },
    {
      icons: "FaMale",
      id: 4,
      heading: "Quality Assurance",
      Content:
        "lorem dbvdkvbd dkjbdvbd vsvhsdvh dvbhdv  dbvhbd vdsbv bdvbdsv bsdv  bdujbdj",
      status: false,
    },
  ]);
  function handleHover(index) {
    data[index].status = true;
    setData([...data]);
  }
  function handleHoverrealease(index) {
    data[index].status = false;
    setData([...data]);
  }
  return (
    <div className="Homepage">
      <div className="homepage_heading">
        <h1>Why the Industry chooses Clickdee?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eveniet minima dicta veniam ab autem, sequi omnis quis cupiditate
          soluta impedit tempora facere ex nisi rem debitis natus, totam odio!
        </p>
      </div>
      <div className="hover">
        <div className="Hovercontent">
          <div className="content">
            {data &&
              data.map((el, index) => (
                <div
                  className="elements"
                  key={index}
                  onMouseOver={() => handleHover(index)}
                  onMouseLeave={() => handleHoverrealease(index)}
                >
                  <div className={el.status ? "active" : null}>
                    <span>
                      <FaGlobeAmericas />
                    </span>
                    <h3>{el.heading}</h3>
                    {el.status && <p>{el.Content}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
