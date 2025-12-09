import React from "react";
import { Link } from "react-router-dom";
import "../../styles/scrap.css";

function Scrap() {
  return (
    <div className="project-page scrap-page">
      <header className="project-header">
        <h1 className="scrap-title">Scrap</h1>
        <p className="project-subtitle">
          Digital scrapbook app for App Development Strategy two
        </p>
      </header>

      {/* Main video first thing under the title */}
      <section className="project-media">
        <div className="project-video">
          <video
            src="/Projects/scrap/scrapvid.mp4"
            className="project-video-element"
            autoPlay
            muted
            loop
            controls
            playsInline
          />
        </div>
        <p className="media-caption">
          Walkthrough of the Scrap mockup showing onboarding, home, creating a
          scrap, posting a scrap, map view with live data, and the settings
          screen.
        </p>
      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>
          Scrap is a mobile app built in React Native that lets people save
          memories in a way that feels more personal than a camera roll. A
          scrap is a moment someone wants to remember. It can include a photo, a
          short description, a location, and tags. The app is meant to feel like
          a visual journal instead of a storage folder.
        </p>
        <p>
          This was our final project for App Development Strategy two. We needed
          to plan and build a working mobile experience with clear flows and at
          least one screen that used live data from an external source.
        </p>
      </section>

      <section className="project-section">
        <h2>The team</h2>
        <p>
          Scrap was created by me,{" "}
          <a
            href="https://emilyrsmith.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emily
          </a>{" "}
          and{" "}
          <a
            href="https://www.kaveenwickramasinghe.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaveen
          </a>
          . We shared design, development, testing and decisions as a group.
        </p>
        <p>
          I focused on styling, layout, design consistency and a large part of
          the development setup.{" "}
          <a
            href="https://emilyrsmith.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emily
          </a>{" "}
          worked on more of the behavior in code, fixing flow issues and
          polishing how screens react.{" "}
          <a
            href="https://www.kaveenwickramasinghe.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaveen
          </a>{" "}
          created the original wireframes and the first version of the report
          that we shaped together into this final version.
        </p>
        <p>
          We talked through every screen and feature together so that the work
          stayed balanced and no one was carrying the full load alone.
        </p>
      </section>

      <section className="project-section">
        <h2>What Scrap does</h2>
        <p>
          When the app opens the user sees onboarding. It is a short guided set
          of screens that explain what Scrap is and what the user can do,
          including how to create scraps, how location tagging works, how mood
          selection works and what the feed looks like once memories are added.
        </p>
        <p>
          After onboarding the user goes to the home feed. Every saved memory
          lives here. Scraps can be viewed in a list or a compact grid style,
          sorted by date, mood, favorites or tags and filtered by what the user
          wants to focus on. Each scrap opens into a details page that shows the
          full photo, mood icon, text, location and tags.
        </p>
        <p>
          From the details page the user can tap the location card to move into
          the map view. That screen displays scraps on a map so memories can be
          seen geographically rather than as a flat list.
        </p>
      </section>

      <section className="project-section">
        <h2>Live data and map view</h2>
        <p>
          The course required dynamic data retrieval from a live source. Instead
          of building a full backend we used a mock live endpoint created with a
          mock API service. It returns real JSON data whenever map view loads.
        </p>
        <p>
          Scrap locations are stored at that endpoint. When the app opens the
          map it fetches scrap locations from the live URL and plots them as
          markers. If that endpoint ever fails the app falls back to local data
          so the experience does not break.
        </p>
        <p>
          This setup completes the requirement for live data and shows that I
          can work with external APIs in a mobile project.
        </p>
      </section>

      <section className="project-section">
        <h2>Tech and structure</h2>
        <ul>
          <li>Built with React Native and Expo Go</li>
          <li>JavaScript and JSX for all screens and logic</li>
          <li>
            Stack navigator for the main flow between home, details, map, create
            scrap and settings
          </li>
          <li>
            Async Storage to save memory entries, onboarding state and user
            settings on the device
          </li>
          <li>
            Expo Location for requesting and using location data when the user
            wants to tag a place
          </li>
          <li>
            Gentle form validation for scrap creation so that titles and
            descriptions are written with intention
          </li>
        </ul>
        <p>
          The video at the top of this page shows the full coded flow. It walks
          through onboarding, home, creating and posting a scrap, jumping into
          map view with live data and exploring the settings screen.
        </p>
      </section>

      <section className="project-section project-section--split">
        <div className="project-text">
          <h2>Design and wireframes</h2>
          <p>
            We started the project in Figma. We mapped out onboarding, the home
            feed, the details screen, the map view and the settings page. The
            visual direction is soft and organized so the memories stay at the
            center.
          </p>
          <p>
            I carried that visual language into the React Native code and into
            the Expo splash screen and app icon. That way the app feels like a
            complete branded product from the first frame you see.
          </p>
        </div>
        <div className="project-image">
          <img
            src="/Projects/scrap/scrapwireframes.png"
            alt="Figma wireframes for the Scrap app"
          />
          <p className="media-caption">
            Figma wireframes for onboarding, home, map view and settings.
          </p>
        </div>
      </section>

      <section className="project-section">
        <h2>Final reflection</h2>
        <p>
          Scrap is not just a visual concept. It is a coded mobile experience
          that pulls together design, navigation, live data, storage and user
          flow. It still feels emotional and memory based but it also shows that
          I can move past flat screens and build the real thing.
        </p>
        <p>
          This project shows that I can design an interface, write the React
          and JSX, work with APIs and local storage and test on real devices
          using Expo Go. It lives in the middle of who I am as a designer and
          what I can do as a developer.
        </p>
      </section>

      {/* bottom right back button */}
      <section className="project-bottom-nav">
        <Link to="/work" className="back-to-work">
          Back to Work
        </Link>
      </section>
    </div>
  );
}

export default Scrap;
