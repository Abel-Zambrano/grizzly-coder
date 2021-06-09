import styled from "styled-components";
import ServiceContentLeft from "./ServiceContentLeft";
import ServiceContentRight from "./ServiceContentRight";

const MyColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20rem 0;
`;

const Title = styled.h2`
  font-size: 4rem;
  text-transform: capitalize;
`;

export default function Column({ heading }) {
  return (
    <MyColumn>
      <Title>{heading}</Title>
      <ServiceContentRight
        src="/images/seo.jpg"
        alt="seo"
        width="500"
        height="500"
        title="search engine optimization"
        text="improve website ranking, site volume and brand awareness"
      />
      <ServiceContentLeft
        src="/images/web-design.png"
        alt="web design"
        width="500"
        height="500"
        title="web design"
        text="beatiful content designs that represent your brand image"
      />
      <ServiceContentRight
        src="/images/accessibility.webp"
        alt="seo"
        width="500"
        height="500"
        title="accessibility"
        text="web site audit and access optimization for all"
      />
      <ServiceContentLeft
        src="/images/mobile-design.png"
        alt="mobile design"
        width="500"
        height="500"
        title="mobile design"
        text="mobile-screen responsivess, improve UI for mobile users"
      />
    </MyColumn>
  );
}
