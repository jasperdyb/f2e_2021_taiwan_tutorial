import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import banner04 from "public/img/banner04.jpg";
import Image from "next/image";
import styled from "styled-components";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Embla = styled("div")`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const EmblaViewPort = styled("div")`
  overflow: hidden;
  width: 100%;
`;

const EmblaCoverContainer = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const EmblaCover = styled("div")`
  position: absolute;
  top: -50%;
  left: -5%;
  width: 110%;
  height: 200%;

  -webkit-box-shadow: inset 0px 0px 50px 100px #ffffff;
  box-shadow: inset 0px 0px 50px 100px #ffffff;
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
  width: 444px;
  margin: 0 auto;
`;

const EnblaSlideImage = styled(Image)`
  position: absolute;
  display: block;
`;

const NavButton = styled(IconButton)`
  position: absolute;
  height: 100%;
  top: 0;
  cursor: pointer;
`;

const NextButton = styled(NavButton)`
  right: 300px;
`;

const BeforeButton = styled(NavButton)`
  left: 300px;
`;

const Carousel: React.FC = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
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
    <>
      <Embla>
        <EmblaViewPort ref={viewportRef}>
          <EmblaContainer>
            <EmblaSlide>
              <EmblaSlideInner>
                <EnblaSlideImage
                  src={banner04}
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
                  objectFit="cover"
                  objectPosition="center"
                  alt="search page banner"
                />
              </EmblaSlideInner>
            </EmblaSlide>
          </EmblaContainer>
        </EmblaViewPort>

        <EmblaCoverContainer>
          <EmblaCover />
        </EmblaCoverContainer>
        <BeforeButton
          onClick={scrollPrev}
          color="secondary"
          aria-label="prev"
          size="large"
          disableRipple
        >
          <NavigateBeforeIcon fontSize="inherit" />
        </BeforeButton>
        <NextButton
          onClick={scrollNext}
          color="secondary"
          aria-label="next"
          size="large"
          disableRipple
        >
          <NavigateNextIcon fontSize="inherit" />
        </NextButton>
      </Embla>
    </>
  );
};

export default Carousel;
