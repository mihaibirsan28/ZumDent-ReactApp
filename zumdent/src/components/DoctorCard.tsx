import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  Flex,
} from "@mantine/core";
// import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    width: "300px",
    height: "200px",
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  details: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: "4 passengers" },
  { label: "100 km/h in 4 seconds" },
  { label: "Automatic gearbox" },
  { label: "Electric" },
];
// {nume: string, facultate: string, specializare, ...rest}
export function DoctorCard() {
  const doctor_image = require("../assets/popescu_mihnea.jpg");
  const doctor_image2 = require("../assets/doctor2.avif");
  const doctor_image3 = require("../assets/doctor3.avif");
  const doctor_image4 = require("../assets/doctor4.avif");
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      {/* <feature.icon size={18} className={classes.icon} stroke={1.5} /> */}
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Flex w="100%" justify="space-around">
      <Card h={"10%"} w={"20%"} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={doctor_image} alt="Popescu Mihnea" w="120px" />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>Dr. Popescu Mihnea</Text>
            {/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}
          </div>
          {/* <Badge variant="outline">25% off</Badge> */}
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" color="dimmed" className={classes.label}>
            Details
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Absolvent al Facultatea de Stomatologie, Universitatea de Medicină
            și Farmacie „Carol Davila”, București în anul 2020.
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Medic specialist în Chirurgie Dento-Alveolara
          </Text>

          {/* <Group spacing={8} mb={-8}>
            {features}
          </Group> */}
        </Card.Section>
      </Card>

      <Card h={"10%"} w={"20%"} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={doctor_image2} alt="Popescu Maria" w="120px" />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>Dr. Popescu Maria</Text>
            {/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}
          </div>
          {/* <Badge variant="outline">25% off</Badge> */}
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" color="dimmed" className={classes.label}>
            Details
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Absolvent al Facultatea de Stomatologie, Universitatea de Medicină
            și Farmacie „Carol Davila”, București în anul 2021.
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Medic Specialist în Protetică și Estetică Dentară
          </Text>

          {/* <Group spacing={8} mb={-8}>
            {features}
          </Group> */}
        </Card.Section>
      </Card>

      <Card h={"10%"} w={"20%"} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={doctor_image3} alt="Marinescu Corina" />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>Marinescu Corina</Text>
            {/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}
          </div>
          {/* <Badge variant="outline">25% off</Badge> */}
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" color="dimmed" className={classes.label}>
            Details
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Studentă a Facultatea de Stomatologie, Universitatea de Medicină și
            Farmacie „Carol Davila”, București în anul 2021.
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Asistent medical
          </Text>

          {/* <Group spacing={8} mb={-8}>
            {features}
          </Group> */}
        </Card.Section>
      </Card>
      <Card h={"10%"} w={"20%"} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={doctor_image4} alt="Buturuga Camelia" />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>Buturugă Camelia</Text>
            {/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}
          </div>
          {/* <Badge variant="outline">25% off</Badge> */}
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" color="dimmed" className={classes.label}>
            Details
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Studentă a Facultatea de Stomatologie, Universitatea de Medicină și
            Farmacie „Carol Davila”, București în anul 2020.
          </Text>
          <Text fz="xs" color="dimmed" className={classes.details}>
            Asistent medical
          </Text>

          {/* <Group spacing={8} mb={-8}>
            {features}
          </Group> */}
        </Card.Section>
      </Card>
    </Flex>
  );
}
