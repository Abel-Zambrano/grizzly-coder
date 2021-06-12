import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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

  #label {
  }
`;

export default function Form() {
  return (
    <Container>
      <MyForm>
        <TextField id="label" label="Name" variant="outlined" />
        <TextField id="label" label="Email" variant="outlined" />
        <TextField id="label" label="Phone" variant="outlined" />
        <TextField id="label" label="Company" variant="outlined" />
        <Button variant="contained" color="primary">
          submit
        </Button>
      </MyForm>
    </Container>
  );
}
