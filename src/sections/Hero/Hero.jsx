// Hero.jsx
import React from 'react';
import ProfileCard from '../../components/UI/ProfileCard/ProfileCard';
import TextType from '../../components/UI/TextType/TextType'
import './Hero.css';

import avatar from '../../assets/images/avatar.png'

export default function Hero() {
  return (
    <section className="hero">
      {/* Contenido de Hero: títulos, subtítulos, etc. */}
      <div className="hero-text">
        <h1 className="hero-title">
          <TextType 
          text={["Welcome to my portfolio...", "I am glad you came here!!!", "Enjoy your visit :D"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        </h1>
      </div>

      {/* ProfileCard */}
      <div className="hero-profile">
        <ProfileCard
          name="Aitor Pérez"
          title="Software Developer & Student"
          handle="aitorcodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
    </section>
  );
}
