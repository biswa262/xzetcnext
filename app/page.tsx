import React from 'react';
import Navbar from '../components/Navbar';
import FirstBanner from '../components/FirstBanner';
import Companies from '../components/Companies';
import Repeating from '../components/Repeating'; 
import Features from '../components/Features'; 
import Videos from '../components/Videos'; 
import Works from '../components/Works'; 
import Track from '../components/Track'; 
import Schedule from '../components/Schedule'; 
import Review from '../components/Review'; 
import Stats from '../components/Stats'; 
import Team from '../components/Team'; 
import Screenshots from '../components/Screenshots'; 
import Faqs from '../components/Faqs'; 
import Blog from '../components/Blog'; 
import Newsletter from '../components/Newsletter'; 
import Pricing from '../components/Pricing'; 
import Touch from '../components/Touch'; 
import Footer from '../components/Footer'; 

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FirstBanner />
      <Companies />
      <Repeating 
        title="Awesome Features" 
        description="Sed laoreet diam sagittis tempus convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus." 
      />
      <Features/>
      <Videos/>
      <Repeating 
        title="How It Works?" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." 
      />
      <Works/>
      <Track/>
      <Schedule/>
      <Repeating 
        title="Client Reviews" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Review/> 
      <Stats/>
      <Team/>
      <Repeating 
        title="App Screenshots" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Screenshots/>
      <Repeating 
        title="Frequently Asked Questions" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Faqs/>
      <Newsletter/>
      <Repeating 
        title="Latest Blog Posts" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Blog/>
      <Repeating 
        title="Pricing Plans" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Pricing/>
      <Repeating 
        title="Get In Touch" 
        description="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula." 
      />
      <Touch/>
      <Footer/>
    </div>
  );
};

export default HomePage;
