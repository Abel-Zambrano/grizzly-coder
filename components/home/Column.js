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

export default function Column() {
  return (
    <MyColumn>
      <ServiceContentRight
        src="/images/seo.jpg"
        alt="web design"
        width="500"
        height="500"
        title="web design"
        text="beatiful content designs that represent your brand image"
      />
      <ServiceContentLeft
        src="/images/web-design.png"
        alt="web design"
        width="500"
        height="500"
        title="web design"
        text="beatiful content designs that represent your brand image"
      />
    </MyColumn>
  );
}
