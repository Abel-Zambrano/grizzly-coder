import styled from "styled-components";
import SquareBG from "./SquareBG";
import Title from "../Title";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  background-color: var(--off-white);
  height: 50rem;
  width: 40rem;
  padding: 10rem 4rem;
  border-radius: 2rem;
  z-index: 20;
  margin-top: -70rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  height: 100%;

  #label {
    font-size: 2rem;
  }
`;

export default function Form() {
  return (
    <Container>
      <SquareBG />
      <FormBox>
        <form
          name="contact v2"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v2" />
          <input type="text" name="first-name" />
          <button type="submit">GO</button>
        </form>
        {/* <MyForm
          name="contact v1"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <Title title="Contact Form" />
          <TextField id="label" label="Name" name="name" variant="outlined" />
          <TextField id="label" label="Email" name="email" variant="outlined" />
          <TextField id="label" label="Phone" name="phone" variant="outlined" />
          <TextField
            id="label"
            label="Company"
            name="company"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            submit
          </Button>
        </MyForm> */}
      </FormBox>
    </Container>
  );
}
