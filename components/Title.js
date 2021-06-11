import styled from "styled-components";

const MyTitle = styled.div`
  .title {
    font-size: 4rem;
    color: var(--black);
    text-transform: capitalize;
  }
`;

export default function Title({ title }) {
  return (
    <MyTitle>
      <h2 className="title">{title}</h2>
    </MyTitle>
  );
}
