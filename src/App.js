import React from 'react';
import SplitTextJS from 'split-text-js';
import { gsap } from "gsap";
import './App.css';

// import TextSplit from './components/TextSplit';

function App() {
  const [timeline, setTimeline] = React.useState(null);

  React.useEffect(() => {
    setTimeline(gsap.timeline());
  }, [])

  React.useEffect(() => {
    if (timeline) {
      const text = document.querySelector('.text');
      const splittedText = new SplitTextJS(text);

      // for (let i = 0; i < splittedText.words.length; i++) {
      //   timeline.fromTo(splittedText.words[i],
      //     { x: gsap.utils.random(-200, 200, 5), y: gsap.utils.random(-200, 200, 5), rotationX: gsap.utils.random(-120, 120, 5), rotationY: gsap.utils.random(-120, 120, 5), autoAlpha: 0, scale: gsap.utils.random(1, 4, 0.5) },
      //     { duration: 2, x: 0, y: 0, rotationX: 0, rotationY: 0, ease: "elastic", stagger: 0.5, autoAlpha: 1, scale: 1 }, 0);
      // };

      // for (let i = 0; i < splittedText.chars.length; i++) {
      //   // console.log("word", i, splittedText.words[i]);
      //   // const q = gsap.utils.selector(splittedText.words[i]);
      //   // timeline.fromTo(q('.SplitTextJS-char'),

      //   timeline.fromTo(splittedText.chars[i],        
      //     { x: gsap.utils.random(-200, 200, 5), y: gsap.utils.random(-200, 200, 5), rotationX: gsap.utils.random(-120, 120, 5), rotationY: gsap.utils.random(-120, 120, 5), autoAlpha: 0, scale: gsap.utils.random(1, 4, 0.5) },
      //     // { duration: 1, x: 0, y: 0, rotationX: 0, ease: "elastic", rotationY: 0, stagger: 0.5, autoAlpha: 1, scale: 1 }, 0);
      //     { duration: 5, x: 0, y: 0, rotationX: 0, ease: "elastic", rotationY: 0, autoAlpha: 1, scale: 1 }, 0);
      // };



      timeline.fromTo(splittedText.chars, 
        { x: gsap.utils.random(-200, 200, 5), y: gsap.utils.random(-200, 200, 5), rotationX: gsap.utils.random(-120, 120, 5), rotationY: gsap.utils.random(-120, 120, 5), autoAlpha: 0, scale: gsap.utils.random(1, 4, 0.5) },
        { duration: 1, x: 0, y: 0, rotationX: 0, ease: "elastic", rotationY: 0, stagger: 0.01, autoAlpha: 1, scale: 1 }, 0);
        // { duration: 5, x: 0, y: 0, rotationX: 0, ease: "elastic", rotationY: 0, autoAlpha: 1, scale: 1 }, 0);
    }
  }, [timeline]);

  return (
    <div className='App'>
      {/* <TextSplit text='Ullamco magna ex velit eiusmod eu mollit quis esse adipisicing officia ea. Officia sit culpa Lorem reprehenderit magna reprehenderit aute anim officia laborum minim occaecat. Sit officia mollit ad Lorem Lorem duis ut. Est cupidatat proident sint adipisicing aute veniam excepteur ea id ullamco dolore esse mollit aliqua. Est sit ad exercitation ipsum. Irure cupidatat magna excepteur cupidatat cillum elit. Laborum amet aliquip ullamco aliquip est.'></TextSplit> */}
      {/* <TextSplit text='Hello World'></TextSplit> */}
      {/* <div className="text">Ullamco magna ex velit eiusmod eu mollit quis esse adipisicing officia ea. Officia sit culpa Lorem reprehenderit magna reprehenderit aute anim officia laborum minim occaecat. Sit officia mollit ad Lorem Lorem duis ut. Est cupidatat proident sint adipisicing aute veniam excepteur ea id ullamco dolore esse mollit aliqua. Est sit ad exercitation ipsum. Irure cupidatat magna excepteur cupidatat cillum elit. Laborum amet aliquip ullamco aliquip est.</div> */}
      <div className="text">Nadal turned professional at age 15 and participated in two events on the ITF junior circuit. He finished 2001 with a Challenger series record of 1–1 in singles with no titles or finals appearances. He did not participate in any doubles Challengers events. At ITF Futures, Nadal's record was 7–5 in singles and 1–2 in doubles, with no titles or finals appearances.</div>
    </div >
  );
}

export default App;
