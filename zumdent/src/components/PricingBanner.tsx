import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
//   import { IconGauge, IconUser, IconCookie } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function PricingBanner() {
  const { classes, theme } = useStyles();
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          ZumDent
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        At ZumDent you get complete dental services, at the highest quality
        standards.
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Apart from situations involving emergency interventions, of course, the
        first visit to the dental office will involve a consultation carried out
        by an experienced dentist, after which he will inform you about the
        treatment plan, related costs and ways to the payment.
      </Text>
    </Container>
  );
}
