import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/*<NavBar/>*/}

        <MainUIWindow />

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
  return (
    <div
      className="fixed bg-gray-900 border-2 border-solid"
      style={{
        // non-static, as to why tailwind would not work (thx gemini)
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="border-solid border-b border-bottom-gray-800">
        <div
          name="title-bar"
          className="flex flex-row justify-evenly bg-gray-800 pl-1 pr-1 m-1 border-solid border-3 border-gray-800
        bg-[repeating-linear-gradient(to_bottom,_#ccc_0px,_#ccc_2px,_transparent_1px,_transparent_5px)]"
        >
          <div className="bg-gray-800 pl-1 pr-1">{title}</div>
        </div>
      </div>
    </div>
  );
}

export function MainUIWindow() {
  const windowPosition = { x: 100, y: 50 };
  const windowSize = { width: 400, height: 300 };
  const content = "<h1>Hello World</h1>";
  const title = "generic title";

  return (
    <div>
      <Window
        position={windowPosition}
        size={windowSize}
        title={title}
        html={content}
      />
    </div>
  );
}
