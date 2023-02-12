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

const mockdata = [
  {
    title: "Technologies",
    description:
      " We use the most efficient technologies,designed to restore the health of your teeth and your natural smile!",
    //   icon: IconGauge,
  },
  {
    title: "Long term relationship",
    description:
      "The relationship between the patient and the doctor is a close one, based on mutual trust, responsibility and the awareness of a job well done.",
    //   icon: IconUser,
  },
  {
    title: "Care, transparency and honesty",
    description:
      "Each patient is treated with the utmost care and benefits from pain-free treatment. We are very attentive to the comfort of our patients. At the ZumDent Clinic, every patient enjoys a warm and welcoming environment.",
    //   icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 900,
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

export function AboutHeader() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      {/* <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="xl">
          ZumDent
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        We create perfect smiles!
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        The ZumDent team is ready to offer you the best dental treatments! We
        have experience, patience, empathy, equipment and materials that meet
        the highest quality standards!
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={20}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
