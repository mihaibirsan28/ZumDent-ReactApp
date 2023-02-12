import { useState } from "react";
import { createStyles, Navbar, Group, Code, Text, Alert } from "@mantine/core";
// import {
//   IconBellRinging,
//   IconFingerprint,
//   IconKey,
//   IconSettings,
//   Icon2fa,
//   IconDatabaseImport,
//   IconReceipt2,
//   IconSwitchHorizontal,
//   IconLogout,
// } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { ThemeChange } from "../components/Theme";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[3],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact", label: "Contact" },
  //   { link: "", label: "SSH Keys", icon: IconKey },
  //   { link: "", label: "Databases", icon: IconDatabaseImport },
  //   { link: "", label: "Authentication", icon: Icon2fa },
  //   { link: "", label: "Other Settings", icon: IconSettings },
];

export function NavbarSimple() {
  let navigate = useNavigate();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth() || {};
  console.log(currentUser);

  const handleLogOut = async () => {
    setError("");
    if (logout)
      try {
        await logout();
      } catch {
        setError("Failed to log out!");
      }
  };

  //   const routeChange(newLink) = () => {
  //     let path = newLink;
  //     navigate(path);
  //   };
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      {/* <item.icon className={classes.linkIcon} stroke={1.5} /> */}
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      {error !== "" && (
        <Alert
          title="Something went wrong!"
          color="blue"
          withCloseButton
          pos="absolute"
          bottom={5}
          right={5}
          w="300"
          h="60"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
      <Navbar
        pos="fixed"
        top={0}
        left={0}
        height="100%"
        width={{ sm: 205 }}
        p="md"
      >
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            {/* <MantineLogo size={28} /> */}
            {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
            <Text fw={1000} c="blue">
              ZumDent
            </Text>
          </Group>
          {links}
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          {currentUser && <p>{currentUser.email}</p>}
          {currentUser && currentUser.email ? (
            <a href="/" className={classes.link} onClick={handleLogOut}>
              {/* <IconLogout className={classes.linkIcon} stroke={1.5} /> */}
              <span>Logout</span>
            </a>
          ) : (
            <>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/login");
                }}
              >
                {/* <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} /> */}
                <span>Login</span>
              </a>
              <a
                href="/register"
                className={classes.link}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/register");
                }}
              >
                {/* <IconLogout className={classes.linkIcon} stroke={1.5} /> */}
                <span>Register</span>
              </a>
            </>
          )}

          {/* <a>
          <ThemeChange />
        </a> */}
          {/* <ThemeChange /> */}
        </Navbar.Section>
      </Navbar>
    </>
  );
}
