"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Markdown from "react-markdown";

const windowDefaultPosition = { x: 100, y: 50 };
const windowDefaultSize = { width: 400, height: 300 };

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/*<NavBar/>*/}

        <MainUIWindow />
        <BlogPostWindow content="# this is some content for the blog _bold_" />

        {/* blog posts can be in writer?*/}
      </main>
    </div>
  );
}

export function HeroEyeCatcherText() {
  return (
    <div className="scrolling-words-container">
      <span>Stimulating minds through </span>
      <div className="scrolling-words-box">
        <ul>
          <li></li>
          <li>hackathons</li>
          <li>peer discussions</li>
          <li>workshops</li>
          <li>talks</li>
          <li>club projects</li>
        </ul>
      </div>
    </div>
  );
}

export function Window({ position, size, title, html }) {
  const [currPosition, setCurrPosition] = useState(position);
  const dragRef = useRef(null);

  const dragCurr = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    e.preventDefault();
    dragCurr.current = {
      x: e.clientX - currPosition.x,
      y: e.clientY - currPosition.y,
    };
  };

  const handlePointerMove = (e) => {
    if (!e.target.hasPointerCapture(e.pointerId)) return;

    setCurrPosition({
      x: e.clientX - dragCurr.current.x,
      y: e.clientY - dragCurr.current.y,
    });
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture(e.pointerId);
  };
  return (
    <div
      ref={dragRef}
      className="fixed bg-gray-900 border-2 border-solid"
      style={{
        // non-static, as to why tailwind would not work (thx gemini)
        top: `${currPosition.y}px`,
        left: `${currPosition.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="border-solid border-b border-bottom-gray-800">
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          name="title-bar"
          className="flex flex-row justify-evenly bg-gray-800 pl-1 pr-1 m-1 border-solid border-3 border-gray-800
        bg-[repeating-linear-gradient(to_bottom,_#ccc_0px,_#ccc_2px,_transparent_1px,_transparent_5px)]"
        >
          <div className="bg-gray-800 pl-1 pr-1">{title}</div>
        </div>
      </div>
      {html}
    </div>
  );
}

export function MainUIWindow() {
  const content = <h1>Hello World</h1>;
  const title = "generic title";

  return (
    <div>
      <Window
        position={windowDefaultPosition}
        size={windowDefaultSize}
        title={title}
        html={content}
      />
    </div>
  );
}

export function BlogPostWindow({ content }) {
  const postContent = <Markdown>{content}</Markdown>;
  return (
    <Window
      position={{ x: 200, y: 300 }}
      size={windowDefaultSize}
      title={"title 1"}
      html={postContent}
    />
  );
}
