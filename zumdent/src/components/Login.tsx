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
  Alert,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";

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

export function Login() {
  let navigate = useNavigate();
  const { classes } = useStyles();
  const { login } = useAuth() || {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const image = require("../assets/zumdent-backgroung.avig");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") setEmailError("Email is required!");
    if (password === "") setPasswordError("Password is required!");

    if (email !== "" && password !== "" && login)
      try {
        setError("");
        setLoading(true);
        await login(email, password);
        navigate("/");
        console.log(email, password);
      } catch {
        setError("Failed to log in");
      }
    setLoading(false);
    console.log(email);
    console.log(password);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
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
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            ZumDent account
          </Title>
          <form onSubmit={handleSubmit}>
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
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button fullWidth mt="xl" size="md" type="submit" loading={loading}>
              Login
            </Button>
          </form>

          <Text align="center" mt="md">
            Don&apos;t have an account?{" "}
            <Anchor<"a">
              href="#"
              weight={700}
              onClick={(event) => {
                event.preventDefault();
                navigate("/register");
              }}
            >
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    </>
  );
}
