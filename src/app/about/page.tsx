
'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import BannerAbout from '@/components/brand/BannerAbout';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import VideoPopup from '@/components/modals/VideoPopup';

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <About />
            <TeamHomeTwo style_2={true} style_3={true} />
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

export default index;