import clientPromise from "../lib/mongodb";
import React from "react";
import { useRef } from "react";
import { FiCircle } from "@react-icons/all-files/fi/FiCircle"
import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { BiDonateHeart } from "@react-icons/all-files/bi/BiDonateHeart";
import { AppShell } from '@saas-ui/app-shell';
import Image from 'next/image';
import Link from 'next/link';
import { Beacon } from '@saas-ui/pro'
import { Spacer, Container, Center } from '@chakra-ui/react';
import { Menu,MenuList, MenuButton, MenuItem} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, HStack } from '@chakra-ui/react';
import { Sidebar, SidebarSection, SidebarToggleButton, NavItem} from '@saas-ui/sidebar';
import { DataTable, DataTableProps, TableInstance, Column } from "@saas-ui/react";
import { Text, Box } from '@chakra-ui/react';
import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDataGridFilter } from "@saas-ui/pro";
import {
  Page,
  PageContainer,
  PageHeader,
  PageBody,
  BackButton,
} from '@saas-ui/pro';
import {
  FilterMenu,
  ActiveFilter,
  ActiveFilters,
  FiltersProvider,
  FiltersAddButton
} from '@saas-ui/pro'
import { Toolbar, ToolbarButton } from "@saas-ui/pro";
import { DataGrid,DataGridPagination } from "@saas-ui/pro";
export default function Donation(users) {
  const gridRef = useRef()
  const filters = [
      {
        id: 'type',
        label: 'Type',
        icon: <FiCircle />,
        type: 'enum',
        items: [
          {
            id: 'cash',
            label: 'Cash',
            icon: <Beacon colorScheme="primary" />,
          },
          {
            id: 'credditcard',
            label: 'CreditCard',
            icon: <Beacon />,
          },
        ],
      },
      {
        id: 'isLead',
        label: 'Is lead',
        type: 'boolean',
        icon: <FiUser />,
      },
    ];
    const defaultFilters = [{ id: 'type', operator: 'isNot', value: 'new' }]
    const columns  = [
          {
            id: 'donor',
            accessor: 'donor',
            Header: 'Donor',
            filterFn: useDataGridFilter('string'),
            
          },
          {
            id: 'amount',
            accessor: 'amount',
            Header: 'Amount',
            filterFn: useDataGridFilter('string'),
            
          },
          {
            id: 'type',
            accessor: 'type',
            Header: 'Type',
            filterFn: useDataGridFilter('string'),
            
          },
          {
            id: 'fund',
            accessor: 'fund',
            Header: 'Fund',
            filterFn: useDataGridFilter('string'),
            
          },
          {
            id: 'date',
            accessor: 'date',
            Header: 'Date',
            filterFn: useDataGridFilter('date'),
          },
    ];
    // const fetch = (users.map((user,index) => {

    // }))

    const onFilter = React.useCallback((filters) => {
      gridRef.current.setColumnFilters(
        filters.map((filter) => {
          return {
            id: filter.id,
            value: {
              value: filter.value,
              operator: filter.operator || 'is',
            },
          }
        })
      )
    }, []);

    



    const data1 = [];
    let length1 = (users.users).length;
    for(let i=0; i< length1;i++){
        data1.push(users.users[i]);
    }

    const [type, setType] = React.useState('new');

      const filteredData = React.useMemo(() => {
        return data1.filter((row) => {
          return row.type === type
        })
      }, [type])  


    return(
      <HStack
              height="100vh"
              width="100vw"
              justifyItems="stretch"
              alignItems="stretch"

            >
          <AppShell
              variant="static"
              minH="100%"
    sidebar={
      <Sidebar>
        <SidebarToggleButton />
        <SidebarSection direction="row">
        <Image src="/images/favicon-96x96.png" height={40} width={40} alt=""/>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={
                  <FiHome />
              }
              variant="ghost"
            />
            <MenuList>
              <MenuItem>Home</MenuItem>
             <Link href="/"> <MenuItem>Sign out</MenuItem></Link>
            </MenuList>
          </Menu>
        </SidebarSection>
        <SidebarSection aria-label="Main">
            <Link href='/dashboard'><NavItem icon={<FiHome />} >Dashboard</NavItem></Link>
            <NavItem icon={<FiUser />} isActive>Donation</NavItem>
            <Link href='/donor'><NavItem icon={<BiDonateHeart />}>Donor</NavItem></Link>
        </SidebarSection>
      </Sidebar>
    }
  >
    {/* <Box
        as="header"
        borderBottomWidth="1px"
        py="2"
        px="4"
        position="sticky"
              width="100vw"
              justifyItems="stretch"
              alignItems="stretch"
      >
      <p>Donation</p>
      </Box> */}
      {/* <Page title="Donation" height="400px" contentWidth="full" position="sticky" width="79vw">
              <Box as="main" flex="1" py="2" px="4" overflow="auto" >
                <Box overflow="auto">
                  <Container mt="40px" maxW="container.lg" ml="40px">
                      <DataTable columns={columns} data={data1} isSortable />
                  </Container>
                </Box>
              </Box>
        </Page> */}
         <FiltersProvider filters={filters} onChange={onFilter}  defaultFilters={defaultFilters}>
        
          <Page height="400px" contentWidth="full" position="sticky"
              title="Donation"
              width="80vw"
              overflow="hidden"
              toolbar={
                <Toolbar variant="outline">
                  <FiltersAddButton />
                  <ToolbarButton
                    label="Add Donations"
                    variant="primary"
                  />
                </Toolbar>
              }
            >
              <PageBody>
               <Box borderBottomWidth="1px" position="sticky" width="100vw">
                  <ButtonGroup isAttached mb="5" mt="5" mr="5">
                    <Button isActive>
                      New
                    </Button>
                    <Button>
                      Active
                    </Button>
                    <Button>
                      Deleted
                    </Button>
                  </ButtonGroup>
                </Box>
              
              <Box borderBottomWidth="1px" position="sticky" width="100vw">
            <DataGrid
              instanceRef={gridRef}
              columns={columns}
              data={data1}
              isSortable
              isSelectable
              isHoverable
              
                        initialState={{
                          columnVisibility: { isLead: false },
                          columnFilters: defaultFilters.map(({ id, value, operator }) => ({
                            id,
                            value: {
                              value,
                              operator,
                            },
                          })),
                        }}
            >
              <DataGridPagination />
            </DataGrid>
              </Box>
              </PageBody>
    </Page>
    </FiltersProvider>
        
          </AppShell>
        </HStack>
    )
}
export async function getServerSideProps(context) {
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb-demo");
    let users = await db.collection("donations").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));
    return {
      props: { users },
    };
  }