import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import banner04 from "public/img/banner04.jpg";
import Image from "next/image";
import styled from "styled-components";
import Card from "@mui/material/Card";

const Embla = styled("div")`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
const EmblaViewPort = styled("div")`
  overflow: hidden;
  width: 100%;
`;

const EmblaContainer = styled("div")`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -108px;
`;

const EmblaSlide = styled("div")`
  position: relative;
  min-width: 50%;
  padding-left: 108px;
`;

const EmblaSlideInner = styled(Card)`
  position: relative;
  overflow: hidden;
  height: 212px;
`;

const EnblaSlideImage = styled(Image)`
  position: absolute;
  display: block;
`;

const Carousel: React.FC = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Embla>
      <EmblaViewPort ref={viewportRef}>
        <EmblaContainer>
          <EmblaSlide>
            <EmblaSlideInner>
              <EnblaSlideImage
                src={banner04}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="search page banner"
              />
            </EmblaSlideInner>
          </EmblaSlide>
          <EmblaSlide>
            <EmblaSlideInner>
              <EnblaSlideImage
                src={banner04}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="search page banner"
              />
            </EmblaSlideInner>
          </EmblaSlide>
          <EmblaSlide>
            <EmblaSlideInner>
              <EnblaSlideImage
                src={banner04}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="search page banner"
              />
            </EmblaSlideInner>
          </EmblaSlide>
        </EmblaContainer>
      </EmblaViewPort>
    </Embla>
  );
};

export default Carousel;
