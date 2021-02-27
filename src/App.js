import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"


class App extends React.Component {
  render() {
    return <>
      <Header/>
      <HomeScreen />
      <Footer/>
    </>;
  }
}

export default App;