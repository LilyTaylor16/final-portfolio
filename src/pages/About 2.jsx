import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'; 
import { Helmet } from "react-helmet";

import img1 from '../assets/about/1.jpg';
import img2 from '../assets/about/2.jpg';
import img3 from '../assets/about/3.jpg';
import img4 from '../assets/about/4.jpg';
import img5 from '../assets/about/5.jpg';
import img6 from '../assets/about/6.jpg';
import southAfricaVideo from '../assets/about/SouthAfrica.mp4';
import Logo from '../assets/images/logo.svg';

import { spray1, spray4, spray6, star1, star2, circles } from '../assets/graphics';

function About() {
  return (
    <div className="about-wrapper">
      <Helmet>
        <title>About | Lily Taylor Portfolio</title>
        <meta 
          name="description" 
          content="Learn more about Lily Taylor — a multi-disciplinary creative and New Media student with a story shaped by the world, passion for design, and eye for purpose-driven digital experiences." 
        />
      </Helmet>

      <img src={spray1} alt="Spray 1" className="bg-graphic spray spray1" />
      <img src={spray4} alt="Spray 4" className="bg-graphic spray spray4" />
      <img src={spray6} alt="Spray 6" className="bg-graphic spray spray6" />
      <img src={star1} alt="Star 1" className="bg-graphic star star1" />
      <img src={star2} alt="Star 2" className="bg-graphic star star2" />
      <img src={circles} alt="Circles" className="bg-graphic circles" />

      <div className="about-logo-container">
        <Link to="/">
          <img src={Logo} alt="Lily Taylor Logo" className="about-logo" />
        </Link>
      </div>

      <h1 className="about-title">Hey, I’m Lily Taylor</h1>

      <div className="about-grid">
        {/* === About Blocks === */}
        <div className="about-block">
          <img src={img1} alt="Borneo" className="about-img" />
          <p className="about-text">
            My journey began in the jungles of Miri, Borneo, where I was born premature as an elective caesarean. My first breaths, steps, smells, and touches were all experienced in the hot, tropical beaches and lush jungles of Borneo. I truly believe those early moments left a mark on my subconscious - ever since, I’ve been drawn to warmth, to the beach, to anything that feels a little wild and alive.
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img2} alt="Scotland" className="about-img" />
          <p className="about-text">
            When I was 2, my family moved to Kent, England, back to the house my parents had owned for years. After that, we headed to a small town in the Scottish Highlands—Fort Augustus—where some of my earliest memories were formed: playing on farms, eating my nana’s home-cooked meals, and running around barefoot. Then, when I was 4, we completely switched it up and moved to Ladysmith, South Africa—a small country town between Durban and Johannesburg.
          </p>
        </div>

        <div className="about-block">
          <video className="about-img" autoPlay muted loop>
            <source src={southAfricaVideo} type="video/mp4" />
          </video>
          <p className="about-text">
            I loved Ladysmith with every fibre of my being. Living there opened my eyes to a world of cultures, religions, languages, and perspectives. It shaped the way I see people, the way I think, and how I process the world. While life there was full of love and learning, it was also dangerous at times, and I witnessed things no child should have to. That experience still affects how I react under pressure, how I empathize, and how I handle tough moments—but it’s also given me a deep strength and emotional awareness that I carry into every space I’m in.
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img3} alt="North Vancouver" className="about-img" />
          <p className="about-text">
            Now I live in North Vancouver, and it feels like home. Mountains, ocean, creativity, culture—I feel lucky every day to be here.
          </p>
        </div>

        <div className="about-block">
          <img src={img4} alt="Soccer" className="about-img" />
          <p className="about-text">
            Throughout my school years, I bounced between interests constantly. I’ve always been curious—restless in the best way. I wanted to try everything. Soccer became a huge part of my life when I was 7, and I’ve been on the pitch ever since. It taught me how to grow, how to fail and try again, how to show up for people, and how much I love the feeling of improving at something I care about.
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img5} alt="Family background" className="about-img" />
          <p className="about-text">
            Creativity has always been part of me. My dad is a geological engineer. My mum’s a textile designer. I always say I’m the perfect mix of both: analytical and creative. I love to break things down, solve problems, and approach challenges from a logical standpoint—but I also need everything around me to look and feel good. I might not be a fine artist like my mum, but I’ve always had a strong eye for design. I notice details, I arrange things with intention, and I make decisions based on feeling and function. Whether it’s a website layout, a motion graphic, or even my own journal—everything I make is built with purpose.
          </p>
        </div>

        <div className="about-block">
          <img src={img6} alt="New Media" className="about-img" />
          <p className="about-text">
            That’s what drew me to New Media and Web Development—it brings together everything I’m passionate about. I get to problem-solve, design with intention, and build experiences that are both functional and meaningful. It’s a field where creativity and logic work hand-in-hand, and that balance just makes sense to me. I love the process of taking an idea and turning it into something people can interact with, something that looks good and works well.
          </p>
        </div>

        <div className="about-block reverse">
          <p className="about-text">
            <strong>What’s Next</strong><br />
            As I move forward in New Media and Web Development, I’m looking for an internship that allows me to grow both creatively and professionally. I hope to join a team where I can contribute thoughtfully, build on what I’ve learned, and continue developing my skills in design and front-end development. I'm especially interested in opportunities that value strong visual communication, purposeful design, and collaboration. I'm eager to learn, take on real responsibilities, and gain experience that helps me feel more confident and prepared for the next steps in my career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
