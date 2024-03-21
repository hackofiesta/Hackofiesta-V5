import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = ({ image, name, designation }) => {
    return (
      <div className="group w-fit ">
        <div className="flex flex-col items-center">
          <div className="rounded-full border w-fit border-primary-pink hover:border-yellow-600 p-2 mt-10 hover:scale-105 transition-all pinkshadow ">
            <img
              src={image}
              className="aspect-square w-[100px] object-cover grayscale hover:grayscale-0 transition-all cursor-pointer rounded-full outline outline-primary-blue "
            />
          </div>
          <h2 className="text-center text-xl group-hover:mt-3 transition-all">
            {name}
          </h2>
        </div>
        <h2 className="hidden group-hover:block text-center group-hover:text-yellow-500 transition-all">
          {designation}
        </h2>
      </div>
    );
  };

  const teams = {
     Core: [
      {
        image: "/team/Gaurav Kabra.jpg",
        name: "Gaurav Kabra",
        designation: "Lead",
      },
      {
        image: "/team/Deep.jpeg",
        name: "Deepak Chattwani",
        designation: "Lead",
      },
      {
        image: "/team/Prince Singh.jpeg",
        name: "Prince Singh",
        designation: "Lead",
      },
      {
        image: "/team/Aditya Yadav.jpg",
        name: "Aditya Yadav",
        designation: "Lead",
      },
      {
        image: "/team/Animesh Sahu.jpg",
        name: "Animesh Sahu",
        designation: "Lead",
      },
      {
        image: "/team/Advit Mahale.jpg",
        name: "Advit Mahale",
        designation: "Lead",
      },
      {
        image: "/team/karthik.jpeg",
        name: "Karthik S",
        designation: "Lead",
      },
    ],
    tech: [
      {
        image: "/team/asim.jpg",
        name: "Mohammed Asim Ahmed",
        designation: "Executive",
      },
      {
        image: "/team/Monark.png",
        name: "Monark Jain",
        designation: "Executive",
      },
      {
        image: "/team/Akshat Bhansali.PNG",
        name: "Akshat Bhansali",
        designation: "Executive",
      },
      {
        image: "/team/Ankit Yadav.jpg",
        name: "Ankit Yadav",
        designation: "Executive",
      },
      {
        image: "/team/Shivam.jpg",
        name: "Shivam Patil",
        designation: "Executive",
      },
    ],
    cr: [
      {
        image: "/team/Kota_Karthik_CR_team.jpg",
        name: "Kota Karthik",
        designation: "Executive",
      },
    ],
    pr: [
      {
        image: "/team/Shreya Singh.jpg",
        name: "Shreya Singh",
        designation: "Executive",
      },
      {
        image: "/team/Dhruv Bharuka.jpg",
        name: "Dhruv Bharuka",
        designation: "Executive",
      },
    ],
    logistics: [
      {
        image: "/team/Mudit.jpg",
        name: "Mudit",
        designation: "Executive",
      },
      {
        image: "/team/Aarav_Saini.jpg",
        name: "Aarav Saini",
        designation: "Executive",
      },
      {
        image: "/team/Sarthak.jpg",
        name: "Sarthak",
        designation: "Executive",
      },
    ],
    content: [
      {
        image: "/team/Sreekar.jpg",
        name: "Sreekar",
        designation: "Executive",
      },
    ],
    design: [
      {
        image: "/team/MayankRawat.jpeg",
        name: "MayankRawat",
        designation: "Executive",
      },
    ],
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          // height: 224,
          marginTop: 2,
          width: "100vw",
        }}
        className="lg:mb-44 md:mb-20 mb-0"
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Core" {...a11yProps(0)} />
          <Tab label="Tech" {...a11yProps(1)} />
          <Tab label="CR" {...a11yProps(2)} />
          <Tab label="PR" {...a11yProps(3)} />
          <Tab label="Logistics & Operations" {...a11yProps(4)} />
          <Tab label="Content & Budgeting" {...a11yProps(5)} />
          <Tab label="Design" {...a11yProps(6)} />
          {/* <Tab label="Core" {...a11yProps(1)} /> */}
          {/* <Tab label="Operations" {...a11yProps(4)} /> */}
        </Tabs>
        <div className=" overflow-y-auto pb-10 overflow-x-hidden">
          {Object.keys(teams).map((team, index) => (
            <TabPanel key={team} value={value} index={index}>
              <div className="flex justify-center flex-wrap md:justify-around w-[50vw] md:w-[60vw] gap-x-5 sm:gap-x-20 md:gap-x-10 md:me-10">
                {teams[team].map((item, key) => (
                  <Item
                    key={key}
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Box>
    </ThemeProvider>
  );
}
