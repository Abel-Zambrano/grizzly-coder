import styled, { keyframes } from "styled-components";

const slide = keyframes`
    0% {
        top: 0;
    }
    100% {
        top: -36rem;
    }
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 1.5rem;
  height: 9rem;
  line-height: 9rem;
  overflow: hidden;

  .dynamic-text {
    list-style: none;
    color: var(--primary-orange);
    text-transform: uppercase;
    margin-left: 0.7rem;
    overflow: hidden;
    height: 9rem;
    line-height: 9rem;

    & li {
      position: relative;
      top: 0;
      animation: ${slide} 12s steps(4) infinite;
      text-decoration: underline;
    }

    & li span {
      position: relative;
      margin: 0.5rem 0;
      line-height: 9rem;
    }
  }
`;

export default function Services() {
  return (
    <Wrapper>
      <div className="static-text">we provide services in</div>
      <ul className="dynamic-text">
        <li>
          {" "}
          <span>seo</span>{" "}
        </li>
        <li>
          {" "}
          <span>web design</span>{" "}
        </li>
        <li>
          {" "}
          <span>accessibility</span>{" "}
        </li>
        <li>
          {" "}
          <span>mobile design</span>{" "}
        </li>
      </ul>
    </Wrapper>
  );
}
