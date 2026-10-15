import { DarkThemeToggle } from "flowbite-react";
import { Modal, ModalBody } from "flowbite-react";
import { useState } from "react";
import AudioPlayer, {
  ActiveUI
} from "react-modern-audio-player";
//https://github.com/slash9494/react-modern-audio-player

import patternDark from "./assets/pattern-dark.svg";
import patternLight from "./assets/pattern-light.svg";
import bandmixLogo from "./assets/bandmixlogo.svg"
import zdeLogo from "./assets/pics/zde-logo.png"

import finalWalkCover from "./assets/pics/final-walk-cover.webp"
import jeffBiohazard from "./assets/pics/JeffBiohazard.jpg"
import tiGroup from "./assets/pics/ti-group.jpg"
import jeffGlen from "./assets/pics/Jeff-Glen.jpg"
import tiSansMike from "./assets/pics/TI_Sans_Mike.jpg"
import jeffSteve from "./assets/pics/TI_Jeff-Steve.jpg"

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
  { url: "https://www.metal-archives.com/bands/Temporary_Insanity/90087", name: "Metal Archives", desc: "" },
  { url: "https://www.divebombrecords.com/bands/temporary-insanity", name: "Divebomb Records", desc: "" },
  { url: "https://tribunalrecords.bandcamp.com/album/final-walk", name: "Tribunal Records", desc: "" },
  { url: "https://www.discogs.com/artist/15790596-Temporary-Insanity-3", name: "Discogs", desc: "" },
  { url: "https://www.facebook.com/TemporaryInsanity138", name: "Facebook", desc: ""}
]
const tiPress: [] = [
  { url: "https://idioteq.com/recalling-temporary-insanity-late-80s-boston-cult-metal-superstars/", name: "IdiotEQ", desc: "" },
  { url: "https://bostonhassle.com/remembering-boston-thrash-band-temporary-insanity/", name: "Boston Hassle", desc: "" },
  { url: "https://www.decibelmagazine.com/2019/06/19/80s-underground-thrash-assassins-temporary-insanity-climb-out-of-the-grave-for-a-final-walk/", name: "Decibal Magazine", desc: "" },
  { url: "https://metal-temple.com/review/temporary-insanity-final-walk/", name: "Metal Temple", desc: "" },
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

const tiPlayList = [
  {
    name: "Toxic Spawn",
    writer: "Temporary Insanity",
    img: finalWalkCover,
    src: toxicSong,
    id: 1,
  },
  {
    name: "Selfish but Justified",
    writer: "Temporary Insanity",
    img: finalWalkCover,
    src: selfishSong,
    id: 2,
  },
  {
    name: "Zoof",
    writer: "Temporary Insanity",
    img: finalWalkCover,
    src: zoofSong,
    id: 3,
  },
  {
    name: "Necrotech",
    writer: "Jeff Kody",
    img: finalWalkCover,
    src: necrotechSong,
    id: 4,
  },
];

const jephVids: [] = [
  { url: "https://www.youtube.com/embed/ST1t4R_juE4", name: "Muted solo", thumb: thumbMutedPic, desc: "Another guitar solo for a song called 'Muted'. I wanted it to sound almost pleading to go with the theme of the lyrics." },
  { url: "https://www.youtube.com/embed/cmyD0T2bxqA", name: "Lucantirthday solo", thumb: thumbLucantirthdayPic, desc: "I wrote roast song for my (very) old friend for his birthday.  This is the guitar solo that came forth." },
  { url: "https://www.youtube.com/embed/qOVu9ww6uxo", name: "Empathy solo", thumb: thumbUntitledPic, desc: "Writing guitar solos for the first set of tracks.  No working title for this one yet." },
]

const jephSongs: [] = [
  { url: deathbedSong, name: "Deathbed", desc: "Deathbed is a song" },
  { url: negativeSong, name: "Negative Charisma", desc: "Negative Charisma is a song" },
  { url: lucantirthdaySong, name: "LucanTIRTHDAY", desc: "LucanTIRTHDAY is a song" },
  { url: mutedSong, name: "Muted", desc: "Muted is a song" },
  { url: untitledSong, name: "Untitled", desc: "Untitled is a song" },
]

const jephPlayList = [
  {
    name: "Deathbed",
    writer: "Zero Day Exploit",
    img: zdeLogo,
    src: deathbedSong,
    id: 1,
  },
  {
    name: "Negative Charisma",
    writer: "Zero Day Exploit",
    img: zdeLogo,
    src: negativeSong,
    id: 2,
  },
  {
    name: "LucanTIRTHDAY",
    writer: "Zero Day Exploit",
    img: zdeLogo,
    src: lucantirthdaySong,
    id: 3,
  },
  {
    name: "Muted",
    writer: "Zero Day Exploit",
    img: zdeLogo,
    src: mutedSong,
    id: 4,
  },
  {
    name: "Untitled",
    writer: "Zero Day Exploit",
    img: zdeLogo,
    src: untitledSong,
    id: 5,
  },
]



export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 pt-8 dark:bg-gray-900">

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
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>
  )
}


const renderHeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full">
        <div className="gap-8 items-center pt-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
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
             <h2 className="mb-2 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Playing Examples</h2>
         </div>
         <div className="grid gap-6 mt-4 lg:mt-6 lg:gap-12 md:grid-cols-3">

          {jephVids.map((vid, index) => (
            <YouTubeModal vid={vid} index={index}></YouTubeModal>
          ))}
         </div>
     </div>
   </section>
  )
}



const renderSongExamples = () => {
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: true });

  return (
    <section className="bg-white dark:bg-gray-900 mt-8 w-full">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-2 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Songwriting Examples</h2>
        </div>

        <div className="flex">
          <div className="w-1/3 py-8 font-light text-gray-500 md:text-md dark:text-gray-400">
            All songs were written, performed, and recorded entirely by me using
            <a href="https://www.apple.com/logic-pro/">Logic Pro</a>

          </div>
        <div className="flex-1 p-8">
          <AudioPlayer
            playList={jephPlayList}
            activeUI={activeUI}
            audioInitialState={{ curPlayId: 1, playListExpanded: true }}>
          </AudioPlayer>
        </div>
        </div>

     </div>
   </section>
  )
}


const renderPriorWork = () => {
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: true });

  return (
    <section className="bg-white dark:bg-gray-900 mt-8 w-full">
     <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
         <div className="text-left text-gray-900 border-b border-gray-600">
             <h2 className="mb-2 text-xl tracking-tight font-extrabold text-gray-900 lg:text-2xl dark:text-white">Prior Work: Temporary Insanity</h2>
        </div>

        <div className="flex">
        <div className="w-1/3">
          <div className="gap-4 mt-4 sm:grid sm:grid-cols-2 sm:mt-8">
           <img className="col-span-2 rounded-lg object-cover" src={ finalWalkCover } alt="content gallery 5" />
           <img className="hidden col-span-1 sm:block rounded-lg object-cover h-full" src={ tiGroup } alt="Final Walk album cover" />
           <img className="hidden col-span-1 sm:block rounded-lg object-cover h-full" src={ tiSansMike } alt="content gallery 3" />
           <img className="hidden col-span-1 sm:block rounded-lg object-cover h-full" src={ jeffBiohazard } alt="Final Walk album cover" />
           <img className="hidden col-span-1 sm:block rounded-lg object-cover h-full" src={ jeffSteve } alt="content gallery 3" />
          </div>
        </div>
        <div className="flex-1 p-8">
            <AudioPlayer
              playList={tiPlayList}
              activeUI={activeUI}
              audioInitialState={{ curPlayId: 1, playListExpanded: true }}>
            </AudioPlayer>
        </div>

        </div>
      </div>

   </section>
  )
}


const YouTubeModal = ({ vid, index }) => {
  const [jephModal, setJephModal] = useState(false);

  return (
    <div className="flex mb-2 md:flex-col md:mb-0" key={ "div_jeph_" + index}>
        <img
          className="cursor-pointer rounded-lg h-full w-full"
          width={200}
          src={vid.thumb}
          alt={vid.name}
          id={"img_jeph_" + index}
          onClick={() => setJephModal(true)}/>
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
