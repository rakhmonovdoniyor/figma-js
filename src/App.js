// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="headcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="149"
          viewBox="0 0 256 149"
          fill="#E0B973"
        >
          <path
            d="M0 0H256V99C256 112.261 250.732 124.979 241.355 134.355C231.979 143.732 219.261 149 206 149H50C36.7392 149 24.0215 143.732 14.6447 134.355C5.26784 124.979 0 112.261 0 99L0 0Z"
            fill="#E0B973"
          />
          <text
            x="50%"
            y="40%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="black"
            font-size="40"
            font-weight="700"
            font-family="Adobe Garamond Pro"
          >
            LUXORY
          </text>
          <text
            x="50%"
            y="60%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="black"
            font-size="15"
            font-weight="700"
            font-family="Adobe Garamond Pro"
          >
            HOTELS
          </text>
        </svg>
        <div className="innerhome">
          <h1 className="homeh1">Home</h1>
          <h1 className="homeh1">Facilities</h1>
          <h1 className="homeh1">Rooms</h1>
          <h1 className="homeh1">Contact-us</h1>
        </div>
      </div>
      <div className="maintextdiv">
        <h1 className="welh1">WELCOME TO</h1>
        <h1 className="luxh1">LUXURY</h1>
        <h1 className="hoth1">HOTELS</h1>
        <h1 className="bookh1">Book your stay and enjoy Luxury</h1>
        <h1 className="bookh1">redefined at the most affordable rates.</h1>
      </div>
      <button className="bookbtn">Book now</button>
      <h1 className="scrollh1">Scroll</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
      >
        <path
          d="M30.5 61C23.4649 60.9939 16.6481 58.5566 11.204 54.1008C5.75985 49.6451 2.02294 43.4447 0.626053 36.5497C-0.770833 29.6547 0.258157 22.4888 3.53878 16.2655C6.8194 10.0421 12.15 5.14381 18.628 2.40002C26.056 -0.616 34.3727 -0.58696 41.7795 2.48086C49.1863 5.54868 55.0879 11.4087 58.208 18.7936C61.328 26.1786 61.4158 34.4949 58.4524 41.944C55.4889 49.3932 49.7124 55.3765 42.372 58.6C38.6165 60.1907 34.5785 61.007 30.5 61ZM18.277 20.755L13.26 25.655L30.1 42.1L46.941 25.65L41.924 20.75L30.1 32.3L18.277 20.755Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default App;
