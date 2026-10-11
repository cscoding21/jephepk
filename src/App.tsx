import { DarkThemeToggle } from "flowbite-react";
import { Button, Modal, ModalBody } from "flowbite-react";
import { useState } from "react";

import patternDark from "./assets/pattern-dark.svg";
import patternLight from "./assets/pattern-light.svg";
import bandmixLogo from "./assets/bandmixlogo.svg"

import mainPic from './assets/pics/jeff-guitar-pfp.png'

import thumbMutedPic from './assets/pics/thumb-muted.png'
import thumbUntitledPic from './assets/pics/thumb-untitled.png'
import thumbLucantirthdayPic from './assets/pics/thumb-lucantirthday.png'

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
  { url: "https://www.metal-archives.com/bands/Temporary_Insanity/90087", name: "Final Walk", desc: "" },
  { url: "https://www.divebombrecords.com/bands/temporary-insanity", name: "Final Walk", desc: "" },
  { url: "https://tribunalrecords.bandcamp.com/album/final-walk", name: "Final Walk", desc: "" },
  { url: "https://www.discogs.com/artist/15790596-Temporary-Insanity-3", name: "Final Walk", desc: "" },
]
const tiPress: [] = [
  { url: "https://idioteq.com/recalling-temporary-insanity-late-80s-boston-cult-metal-superstars/", name: "Final Walk", desc: "" },
  { url: "https://bostonhassle.com/remembering-boston-thrash-band-temporary-insanity/", name: "Final Walk", desc: "" },
  { url: "https://www.decibelmagazine.com/2019/06/19/80s-underground-thrash-assassins-temporary-insanity-climb-out-of-the-grave-for-a-final-walk/", name: "Final Walk", desc: "" },
  { url: "https://metal-temple.com/review/temporary-insanity-final-walk/", name: "Final Walk", desc: "" },
]
const tiVids: [] = [
  { url: "https://www.youtube.com/watch?v=6-wtgG_MnDA", name: "Final Walk", desc: "" },
  { url: "https://www.youtube.com/watch?v=uVm2XbKIANA", name: "D.S.H.", desc: "" },
]

const tiSongs: [] = [
  { url: toxicSong, name: "Toxic Spawn", desc: "" },
  { url: selfishSong, name: "Selfish but Justified", desc: "" },
  { url: zoofSong, name: "Zoof", desc: "" },
  { url: necrotechSong, name: "Necrotech", desc: "" },
]

const jephVids: [] = [
  { url: "https://www.youtube.com/embed/ST1t4R_juE4", name: "Muted solo", thumb: thumbMutedPic, desc: "Another guitar solo for a song called 'Muted'. I wanted it to sound almost pleading to go with the theme of the lyrics." },
  { url: "https://www.youtube.com/embed/cmyD0T2bxqA", name: "Lucantirthday solo", thumb: thumbLucantirthdayPic, desc: "I wrote roast song for my (very) old friend for his birthday.  This is the guitar solo that came forth." },
  { url: "https://www.youtube.com/embed/qOVu9ww6uxo", name: "Empathy solo", thumb: thumbUntitledPic, desc: "Writing guitar solos for the first set of tracks.  No working title for this one yet." },
]

const jephSongs: [] = [
  { url: deathbedSong, name: "Deathbed", desc: "Deathbed is a song" },
  { url: negativeSong, name: "Negative Charisma", desc: "Negative Charisma is a song" },
  { url: lucantirthdaySong, name: "LucanTIRTHDAY", desc: "LucanTIRTHDAY is a sont" },
  { url: mutedSong, name: "Muted", desc: "Muted is a sont" },
  { url: untitledSong, name: "Untitled", desc: "Untitled is a song" },
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
    <section className="bg-white dark:bg-gray-900 w-full">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full dark:hidden rounded-lg" src={mainPic} alt="Jeff Kody" />
          <img className="w-full hidden dark:block rounded-lg" src={mainPic} alt="Jeff Kody" />
          <div className="mt-4 md:mt-0">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white mb-1">Jeff Kody</h2>
            <h3 className="mb-3 text-xl tracking-tight font-extrabold text-gray-500 dark:text-gray-400">Heavy Metal, Thrash, Punk Guitar Player</h3>
          <p className="mb-6 font-light text-gray-500 md:text-md dark:text-gray-400">
            Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.
          </p>
          <a href="https://www.bandmix.com/jeph21/" target="_blank"><img src={ bandmixLogo } alt="Bandmix profile" width={100} /></a>
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
    <section className="bg-white dark:bg-gray-900 w-full">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Playing Examples</h2>
         </div>
         <div className="grid gap-6 mt-4 lg:mt-6 lg:gap-12 md:grid-cols-3">

          {jephVids.map((vid, index) => (
             <div className="flex mb-2 md:flex-col md:mb-0">
               <img className="cursor-pointer rounded-lg" src={vid.thumb} alt={vid.name} onClick={() => eval("setJephModal" + index)(true)} />
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
                 <p className="text-gray-500 dark:text-gray-400">{ vid.desc }</p>
              </div>
            </div>
            ))}
         </div>
     </div>
   </section>
  )
}

const YouTubeModal = ({ vid }) => {
  const [jephModal, setJephModal] = useState(false);

  return (
    <div className="flex mb-2 md:flex-col md:mb-0">
  <div>
    <img className="cursor-pointer rounded-lg clear-both" src={vid.thumb} alt={vid.name} onClick={() => setJephModal(true)} />
  </div>
  <Modal show={jephModal} onClose={() => setJephModal(false)} dismissible size="7xl">
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
         <p className="text-gray-500 dark:text-gray-400">{ vid.desc }</p>
      </div>
    </div>
  )
}


const renderSongExamples = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-8 w-full">
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
                 <p className="text-gray-500 dark:text-gray-400 mt-6">{vid.desc }</p>
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
    <section className="bg-white dark:bg-gray-900 mt-8 w-full">
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
