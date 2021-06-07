import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;

  .dynamic-text {
    list-style: none;
    color: var(--primary-orange);
    text-transform: uppercase;
    margin-left: 0.7rem;

    & li span {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        border-left: 2px solid var(--primary-orange);
        animation: typing 1.5s steps(13) infinite;
      }
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
