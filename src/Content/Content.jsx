import React, { useEffect } from 'react'
import { thisGame } from '../Logic'
import GitImage from "../assets/github_logo.png"
import LinkedinLogo from "../assets/linkedin_logo.png"
// import config from '../Logic/config'

function Content() {
    const someID = "phaser-container";
    useEffect(() => {
        thisGame(someID);
    }, [])
    


  return (
    <>
      <div className='m-0 w-full min-h-screen flex items-center justify-center p-1 bg-black' >
        <div className='w-[1416px] h-full pt-2 px-1 flex flex-col justify-center items-center bg-white rounded-2xl'>
          <div id={someID}/>
          <div className='flex items-center justify-evenly align-middle bg-black p-0 my-1 rounded-b-2xl w-[1400px]'>
            <a href="https://github.com/ovais22/BrawlWood" class="inline-block hover:bg-gray-800">
              <img className='h-12 invert' src={GitImage} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ovais22/" class="inline-block hover:bg-gray-800">
              <img className='h-8' src={LinkedinLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Content