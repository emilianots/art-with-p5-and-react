import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/pageFour";
import PageFive from "./pages/pageFive";
import PageSix from "./pages/pageSix";
import PageSeven from "./pages/pageSeven";
import PageEight from "./pages/pageEight";
import PageNine from "./pages/pageNine";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, index, value } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

function App() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: "#555" }}>
        <Toolbar>
          <Typography>Trabalho final de Tópicos Especiais em Arte </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" style={{ backgroundColor: "#777" }}>
        <Tabs value={value} onChange={handleChange} centered scrollButtons="auto" variant="scrollable">
          <Tab label="Arte 1" />
          <Tab label="Arte 2" />
          <Tab label="Arte 3" />
          <Tab label="Arte 4" />
          <Tab label="Arte 5" />
          <Tab label="Arte 6" />
          <Tab label="Arte 7" />
          <Tab label="Arte 8" />
          <Tab label="Arte 9" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PageOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PageTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PageThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PageFour />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PageFive />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <PageSix />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <PageSeven />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <PageEight />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <PageNine />
      </TabPanel>
    </div>
  );
}

export default App;
