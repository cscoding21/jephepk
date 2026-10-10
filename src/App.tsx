import { DarkThemeToggle } from "flowbite-react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

import patternDark from "./assets/pattern-dark.svg";
import patternLight from "./assets/pattern-light.svg";

import mainPic from './assets/pics/jeff-guitar-pfp.png'

import necrotechSong from './assets/mp3s/ti-necrotech.mp3'
import toxicSong from './assets/mp3s/ti-toxic.mp3'
import selfishSong from './assets/mp3s/ti-selfish.mp3'
import zoofSong from './assets/mp3s/ti-zoof.mp3'

import mutedSong from './assets/mp3s/zde-muted.mp3'
import negativeSong from './assets/mp3s/zde-negative.mp3'
import untitledSong from './assets/mp3s/zde-untitled.mp3'
import deathbedSong from './assets/mp3s/zde-deathbed.mp3'
import lucantirthdaySong from './assets/mp3s/zde-lucantirthday.mp3'

const tiLinks: [] = [
  "https://www.metal-archives.com/bands/Temporary_Insanity/90087",
  "https://www.divebombrecords.com/bands/temporary-insanity",
  "https://tribunalrecords.bandcamp.com/album/final-walk",
  "https://www.discogs.com/artist/15790596-Temporary-Insanity-3",
]
const tiPress: [] = [
  "https://idioteq.com/recalling-temporary-insanity-late-80s-boston-cult-metal-superstars/",
  "https://bostonhassle.com/remembering-boston-thrash-band-temporary-insanity/",
  "https://www.decibelmagazine.com/2019/06/19/80s-underground-thrash-assassins-temporary-insanity-climb-out-of-the-grave-for-a-final-walk/",
  "https://metal-temple.com/review/temporary-insanity-final-walk/",
]
const tiVids: [] = [
  { link: "https://www.youtube.com/watch?v=6-wtgG_MnDA", name: "Final Walk" },
  { link: "https://www.youtube.com/watch?v=uVm2XbKIANA", name: "D.S.H." },
]

const tiSongs: [] = [
  { link: toxicSong, name: "Toxic Spawn" },
  { link: selfishSong, name: "Selfish but Justified" },
  { link: zoofSong, name: "Zoof" },
  { link: necrotechSong, name: "Necrotech" },
]

const jephVids: [] = [
  { url: "https://www.youtube.com/embed/ST1t4R_juE4", name: "Muted solo" },
  { url: "https://www.youtube.com/embed/cmyD0T2bxqA", name: "Lucantirthday solo" },
  { url: "https://www.youtube.com/embed/qOVu9ww6uxo", name: "Empathy solo" },
]

const jephSongs: [] = [
  { url: untitledSong, name: "Untitled" },
  { url: mutedSong, name: "Muted" },
  { url: deathbedSong, name: "Deathbed" },
  { url: negativeSong, name: "Negative Charisma" },
  { url: lucantirthdaySong, name: "LucanTIRTHDAY" },
]


export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">

      {renderTopElements()}

      {renderHeroSection()}

      {renderPlayingExamples()}

      {renderSongExamples()}

      {renderPriorWork()}


    </main>
  );
}


const renderTopElements = () => {
  return (
    <div>
  <div className="absolute inset-0 size-full">
    <div className="relative h-full w-full select-none">
      {/*<img
        className="absolute right-0 min-w-dvh dark:hidden"
        alt="Pattern Light"
        src={patternLight}
      />
      <img
        className="absolute right-0 hidden min-w-dvh dark:block"
        alt="Pattern Dark"
        src={patternDark}
      />*/}
    </div>
  </div>
  <div className="absolute top-4 right-4">
    <DarkThemeToggle />
  </div>
    </div>
  )
}


const renderHeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden rounded-lg" src={mainPic} alt="Jeff Kody" />
          <img className="w-full hidden dark:block rounded-lg" src={mainPic} alt="Jeff Kody" />
          <div className="mt-4 md:mt-0">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white mb-1">Jeff Kody</h2>
            <h3 className="mb-3 text-xl tracking-tight font-extrabold text-gray-500 dark:text-gray-400">Heavy Metal, Thrash, Punk Guitar Player</h3>
          <p className="mb-6 font-light text-gray-500 md:text-md dark:text-gray-400">
            Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.
          </p>
          </div>
        </div>
    </section>
  )
}


const renderPlayingExamples = () => {
  const [jephModal0, setJephModal0] = useState(false);
  const [jephModal1, setJephModal1] = useState(false);
  const [jephModal2, setJephModal2] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Playing Examples</h2>
         </div>
         <div className="grid gap-6 mt-4 lg:mt-6 lg:gap-12 md:grid-cols-3">

           {jephVids.map((vid, index) => (
             <div className="flex mb-2 md:flex-col md:mb-0">
               <Button onClick={() => eval("setJephModal" + index)(true)}>
                 {vid.name}
               </Button>
               <Modal show={eval("jephModal" + index)} onClose={() => eval("setJephModal" + index)(false)} dismissible size="7xl">
                 <ModalBody>
                   <iframe width="1024" height="576"
                     className="w-full"
                     src={ vid.url }
                     title={ vid.name }
                     frameBorder={0}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen>
                   </iframe>
                 </ModalBody>
               </Modal>

              <div>
                 <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">{ vid.name }</h3>
                  <p className="text-gray-500 dark:text-gray-400">Work seamlessly across your organization on a platform designed for collaboration.</p>
              </div>
            </div>
            ))}
         </div>
     </div>
   </section>
  )
}


const renderSongExamples = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-8">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Songwriting Examples</h2>
         </div>
         <div className="grid gap-6 mt-4 lg:mt-6 lg:gap-12 md:grid-cols-3">

           {jephSongs.map((vid, index) => (
             <div className="flex mb-2 md:flex-col md:mb-0">

              <div>
                 <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">{vid.name}</h3>
                 <audio controls>
                   <source src={ vid.url } type="audio/mpeg" />
                   <p>
                     Your browser does not support HTML audio, but you can still
                     <a href="audio-file.mp3">download the music</a>.
                   </p>
                 </audio>
                 <p className="text-gray-500 dark:text-gray-400">Work seamlessly across your organization on a platform designed for collaboration.</p>
              </div>
            </div>
            ))}
         </div>
     </div>
   </section>
  )
}


const renderPriorWork = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-8">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Prior Work</h2>
         </div>
         <div className="grid gap-6 mt-4 lg:mt-6 lg:gap-12 md:grid-cols-3">

           {jephVids.map((vid, index) => (
             <div className="flex mb-2 md:flex-col md:mb-0">

              <div>
                 <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">{ vid.name }</h3>
                  <p className="text-gray-500 dark:text-gray-400">Work seamlessly across your organization on a platform designed for collaboration.</p>
              </div>
            </div>
            ))}
         </div>
     </div>
   </section>
  )
}
