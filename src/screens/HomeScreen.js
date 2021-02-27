import React, {useEffect} from 'react'
import {Container} from "react-bootstrap"
import {csv} from "d3"

const HomeScreen = () => {

  const csvUrl = "https://gist.githubusercontent.com/CrytonAndrew/4d16b124c915cf18e530f80b8c23d077/raw/1cf85f311a1fe596902bd1c27fc0a47933335ddc/Names%2520Colors%2520-%2520Sheet1.csv"

  const fetchText = async (url) => {
    const response = await fetch(url)
    return await response.text()
  }
  console.log(fetchText(csvUrl))

  useEffect(() => {
    csv(csvUrl).then(data => {
      console.log(data)
    })
  }, [])
   
    return (
        <Container>
        {
          
        }
      </Container>
    )
}

export default HomeScreen
