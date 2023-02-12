import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { useNavigate } from "react-router-dom";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: 849,
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          Choose to have the{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            smile
          </Text>{" "}
          you dreamed of!
        </h1>

        <Text className={classes.description} color="dimmed">
          ZumDent owns some of the most modern dental offices in Bucharest,
          united in a Center for Implantology and Dental Aesthetics and offers
          each patient personalized, high-quality dental services, as well as
          long-term support for maintaining dental health and maintaining a
          smile envied.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            // left="200"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/contact");
            }}
          >
            Contact us
          </Button>

          {/* <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}
