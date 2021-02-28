import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import LandingPage from "./screens/LandingPage"
import MiddleSection from "./screens/MiddleSection"
import ProjectScreen from "./screens/ProjectScreen"

class App extends React.Component {
  render() {
    return <>
      <Header/>
      <LandingPage />
      <MiddleSection />
      <ProjectScreen />
      <HomeScreen />
      <Footer/>
    </>;
  }
}

export default App;