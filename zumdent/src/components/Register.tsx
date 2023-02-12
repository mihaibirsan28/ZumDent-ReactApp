import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Input,
  Alert,
} from "@mantine/core";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
    // minHeight: 834,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    marginLeft: "70px",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 849,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export function Register() {
  const { classes } = useStyles();
  const { currentUser, signup } = useAuth() || {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
  const [phoneError, setPhoneError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // console.log("proba");
  console.log(
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    phone
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (firstName === "") setFirstNameError("First name is required!");
    if (lastName === "") setLastNameError("Last name is required!");
    if (email === "") setEmailError("Email is required!");
    if (password === "") setPasswordError("Password is required!");
    if (passwordConfirmation === "")
      setPasswordConfirmationError("Password confirmation is required!");
    if (phone === "") setPhoneError("Phone is required!");

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      return setError("Passwords do not match!");
    }

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      passwordConfirmation !== "" &&
      phone !== "" &&
      signup
    )
      try {
        setError("");
        setLoading(true);
        await signup(firstName, lastName, email, password, phone);
        navigate("/");
      } catch {
        setError("Failed to register!");
      }
    setLoading(false);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    setFirstNameError("");
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handlePasswordConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(event.target.value);
    setPasswordConfirmationError("");
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setPhoneError("");
  };

  return (
    <>
      {error !== "" && (
        <Alert
          title="Something went wrong!"
          color="blue"
          withCloseButton
          pos="absolute"
          top={5}
          right={5}
          w="300"
          h="60"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
      <div className={classes.wrapper}>
        {/* <form onSubmit={handleSubmit} className={classes.form}> */}
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            Create your ZumDent account
          </Title>
          <form onSubmit={handleSubmit}>
            <TextInput
              value={firstName}
              onChange={handleFirstNameChange}
              label="First name"
              placeholder="Ion"
              size="md"
              required
            />
            <TextInput
              value={lastName}
              onChange={handleLastNameChange}
              label="Last name"
              placeholder="Popescu"
              size="md"
              mt="md"
              required
            />
            <TextInput
              value={email}
              onChange={handleEmailChange}
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              mt="md"
              required
            />
            <PasswordInput
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              required
            />
            <PasswordInput
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              label="Confirm password"
              placeholder="Your password"
              mt="md"
              size="md"
              required
            />
            <Input.Wrapper label="Your phone" required mt="xl" size="md">
              <Input
                value={phone}
                onChange={handlePhoneChange}
                component={InputMask}
                mask="+407 (99) 999-999"
                placeholder="Your phone"
              />
            </Input.Wrapper>
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button fullWidth mt="xl" size="md" type="submit" loading={loading}>
              Register
            </Button>
          </form>

          {/* <Text align="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text> */}
        </Paper>
        {/* </form> */}
      </div>
    </>
  );
}

//7777777777777777777777777777777777
