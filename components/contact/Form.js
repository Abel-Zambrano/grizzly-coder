import styled from "styled-components";
import SquareBG from "./SquareBG";

const Container = styled.div`
  background-color: var(--off-white);
  height: 100%;
  width: 40rem;
  padding: 10rem 4rem;
  border-radius: 2rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  return (
    <Container>
      <MyForm>
        <label htmlFor="name" className="label">
          name
        </label>
        <input type="text" className="input" />
        <label htmlFor="" className="label">
          email
        </label>
        <input type="text" className="input" />
        <label htmlFor="" className="label">
          phone
        </label>
        <input type="text" className="input" />
        <label htmlFor="" className="label">
          company
        </label>
        <input type="text" className="input" />
      </MyForm>
    </Container>
  );
}
