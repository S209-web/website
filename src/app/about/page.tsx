'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import BannerAbout from '@/components/brand/BannerAbout';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import VideoPopup from '@/components/modals/VideoPopup';

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="flex flex-col items-center justify-center min-h-screen text-center px-5">
            <div className="w-full max-w-5xl">
              <BannerAbout />
              <About />
              <TeamHomeTwo style_2={true} style_3={true} />
            </div>
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default Index;
