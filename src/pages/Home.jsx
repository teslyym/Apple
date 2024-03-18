import React from "react";
import Header from "../components/Header/Header";
import macimg from "../assets/macimg.jpg";
import imacimg from "../assets/imacimg.jpg";
import ip15img from "../assets/ip15img.jpg";
import iph15img from "../assets/iph15img.jpg";
import ipadimg from "../assets/ipadimg.jpg";
import m2img from "../assets/M2.png";
import Macstudio from "../assets/Macstudio.jpg";
import Ipadpro from "../assets/Ipadpro.jpg";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="div1">
        <img src={macimg} alt="" />
        <div className="div2">
          <h1 id="w1">MacBook Pro</h1>
          <p id="w2">Mind-Blowing. Head Turning.</p>

          <nav>
            <a href="Learn more">Learn more {">"}</a>
          </nav>
        </div>
      </div>
      <div className="div3">
        <img src={imacimg} alt="" />
        <div className="div4">
          <h1 id="w1">iMac</h1>
          <p id="w2">Packed with more juice.</p>
          <nav>
            <a href="Learn more">Learn more {">"}</a>
          </nav>
        </div>
      </div>
      <div className="div5">
        <img src={ip15img} alt="" />
        <div className="div6">
          <div id="div6a">
            <h1 id="w1">iPhone15 Pro</h1>
            <p id="w2">Titanium. So strong. So light. So Pro.</p>
          </div>
          <nav>
            <a href="Learn more">Learn more {">"}</a>
          </nav>
        </div>
      </div>
      <div className="div7">
        <div className="div6b">
          <img src={iph15img} alt="" />
          <div className="div8">
            <div id="div8a">
              <h1 id="w1">iPhone15 </h1>
              <p id="w2">New camera. New design. Newphoria.</p>
            </div>
            <nav>
              <a href="Learn more">Learn more {">"}</a>
            </nav>
          </div>
        </div>
        <div className="div99">
          <img src={ipadimg} alt="" />
          <div className="div9">
            <div id="div9a">
              <h1 id="w1">iPad </h1>
              <p id="w2">Lovable. Drawable. Magical.</p>
            </div>
            <nav>
              <a href="Learn more">Learn more {">"}</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="div7">
        <div className="div6b">
          <img src={Ipadpro} alt="" />
          <div className="div8">
            <div id="div8aa">
              <h1 id="w1">iPad Pro </h1>
              <p id="w2">Supercharged by <img src={m2img} alt="" /></p> 
            </div>
            <nav>
              <a href="Learn more">Learn more {">"}</a>
            </nav>
          </div>
        </div>
        <div className="div99">
          <img src={Macstudio} alt="" />
          <div className="div9">
            <div id="div9a">
              <h1 id="w1">Mac Studio</h1>
              <p id="w2">Supercharged by M2 Max and M2 Ultra.</p>
            </div>
            <nav>
              <a href="Learn more">Learn more {">"}</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div>
          <h1>Explore</h1>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
        </div>
        <div>
          <h1>Account</h1>
          <li>Manage Your Apple ID</li>
        </div>
        <div>
          <h1>Apple Values</h1>
          <li>Privacy</li>
        </div>
        <div>
          <h1>About Apple</h1>
          <li>Newsroom</li>
          <li>Apple Leadership</li>
          <li>Career Opportunities</li>
          <li>Investors</li>
          <li>Ethics and Compliance</li>
        </div>
      </div>
    </div>
  );
};

export default Home;
