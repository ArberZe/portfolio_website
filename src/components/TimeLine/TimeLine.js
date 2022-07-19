import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm Arber Zeka student of Computer Science and Engineering and an aspiring software developer.
        I'm from Kosovo, a small country in Southeast of Europe, where I am currently studying.
      </SectionText>
    </Section>
  );
};

export default Timeline;
