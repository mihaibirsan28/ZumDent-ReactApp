import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
} from "@mantine/core";
import { keys } from "@mantine/utils";
// import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

interface RowData {
  name: string;
  type: string;
  price: string;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  //   const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            {/* <Icon size={14} stroke={1.5} /> */}
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const elements = [
  {
    name: "Professional whitening treatment cabinet lamp White Now",
    type: "DENTAL AESTHETICS",
    price: "1000 Lei",
  },
  {
    name: "Pressed ceramic facet",
    type: "DENTAL AESTHETICS",
    price: "1500 Lei",
  },
  {
    name: "Internal/tooth whitening (devital with color change)",
    type: "DENTAL AESTHETICS",
    price: "300 Lei",
  },
  {
    name: "Dental consultation",
    type: "PROPHYLAXIS",
    price: "150 Lei",
  },
  {
    name: "Air-flow",
    type: "PROPHYLAXIS",
    price: "200 Lei",
  },
  {
    name: "Orthodontic consultation",
    type: "ORTHODONTICS",
    price: "200 Lei",
  },
  {
    name: "Contentment bottle",
    type: "ORTHODONTICS",
    price: "500 Lei",
  },
];

export function PricingTable() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(elements);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(elements, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(elements, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const rows = sortedData.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{row.price}</td>
    </tr>
  ));

  return (
    <ScrollArea mt="2%" ml="10%" display="center" w="80%">
      <TextInput
        placeholder="Search by any field"
        mb="md"
        // icon={<IconSearch size={14} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{ tableLayout: "fixed", minWidth: 700 }}
      >
        <thead>
          <tr>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === "type"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("type")}
            >
              Type
            </Th>
            <Th
              sorted={sortBy === "price"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("price")}
            >
              Price
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(elements[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
