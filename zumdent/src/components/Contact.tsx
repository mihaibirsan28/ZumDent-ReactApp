import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
// import {
//   IconBrandTwitter,
//   IconBrandYoutube,
//   IconBrandInstagram,
// } from "@tabler/icons";
import {
  ContactIconsList,
  ContactIcons,
} from "../components/ContactInformation";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: "2%",
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

// const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  // const { currentUser } = useAuth();

  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") setEmailError("Email is required!");
    if (name === "") setNameError("Name is required!");
    if (message === "") setMessageError("Message is required!");

    if (email !== "" && name !== "" && message !== "")
      try {
        setError("");
        setLoading(true);
        setDoc(doc(db, "messages", email), {
          savedMessages: [],
        });

        navigate("/");
        console.log(email, name, message);
      } catch {
        setError("Failed to log in");
      }
    setLoading(false);
    console.log(email);
    console.log(name);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
    setMessageError("");
  };

  // const savedMessage = async () => {
  //   await updateDoc(email, {
  //     savedMessage: arrayUnion({
  //       message: message
  //     }),
  //   });
  // }

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        mt={"10%"}
        mb={"10%"}
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          {/* <Group mt="xl">{icons}</Group> */}
        </div>
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <TextInput
              value={email}
              onChange={handleEmailChange}
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              value={name}
              onChange={handleNameChange}
              label="Name"
              placeholder="Your name"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              value={message}
              onChange={handleMessageChange}
              required
              label="Your message"
              placeholder="Your message"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button
                className={classes.control}
                type="submit"
                loading={loading}
              >
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
}
