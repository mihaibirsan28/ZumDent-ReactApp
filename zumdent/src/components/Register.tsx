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
} from "@mantine/core";
import InputMask from "react-input-mask";

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
  return (
    <div className={classes.wrapper}>
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

        <TextInput label="First name" placeholder="Ion" size="md" required />
        <TextInput
          label="Second name"
          placeholder="Popescu"
          size="md"
          mt="md"
          required
        />
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          mt="md"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          required
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Your password"
          mt="md"
          size="md"
          required
        />
        <Input.Wrapper label="Your phone" required mt="xl" size="md">
          <Input
            component={InputMask}
            mask="+407 (99) 999-999"
            placeholder="Your phone"
          />
        </Input.Wrapper>
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Register
        </Button>

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
    </div>
  );
}