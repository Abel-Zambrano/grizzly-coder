import styled from "styled-components";
import HomeBackground from "../components/home/HomeBackground";
import Column from "../components/Column";
import ServiceContentLeft from "../components/home/ServiceContentLeft";
import ServiceContentRight from "../components/home/ServiceContentRight";
import Title from "../components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <HomeBackground />
      <Column>
        <Title title="web services" />
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
      </Column>
    </Container>
  );
}
