import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Clinton</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Blockchain & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
         I am a Maths and Computer Science Major who also works tirelessly to build a better society using creative and innovative Software solutions. I am a huge Blockchain fan due to its decentralized and "placing power back to the hands of the users " Approach.
            <br />
            As a Manjaro & Neovim User, I am a huge advocate of free and open source Software. I beleive the Foss concept is revolutionary & I hope to be a contributor soon.
         </p>
      </div>
   )
}

export default Intro;