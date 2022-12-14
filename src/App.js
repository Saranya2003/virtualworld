// import logo from "./logo.svg";
import "./App.css";
import "aframe"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <a-scene>
      <a-assets>
        <a-asset-items id="furniture" src="models/gltf/Test house/535669.gltf"></a-asset-items>
      </a-assets>

      <a-entity gltf-model="#furniture" position="-2 0 0"></a-entity>
      <a-gltf-model id="house" position="-2 0 0" src="https://cdn.glitch.global/503e73c2-1a6d-46f5-9ad0-44c4b6e80bd1/New%20test%20house.glb?v=1667532545687"></a-gltf-model>
      <a-gltf-model id="pokemon" scale="0.1 0.1 0.1" position="2 0 -3" src="https://cdn.glitch.global/503e73c2-1a6d-46f5-9ad0-44c4b6e80bd1/inktober_day_13_kind.glb?v=1665716287421"></a-gltf-model>
      <a-gltf-model id="bed" position="0 0 -5.5" scale="0.01 0.01 0.01" rotation="0 90 0" src="https://cdn.glitch.global/503e73c2-1a6d-46f5-9ad0-44c4b6e80bd1/bed_agape.glb?v=1667533515591"></a-gltf-model>
      <a-plane position="0 -0.5 -4" rotation="-90 0 0" width="20" height="20" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>

    </a-scene>
    </div>
  );
}

export default App;
