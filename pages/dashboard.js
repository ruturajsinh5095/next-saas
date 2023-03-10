import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { BiDonateHeart } from "@react-icons/all-files/bi/BiDonateHeart";
import { AppShell } from '@saas-ui/app-shell';
import Image from 'next/image';
import { AuthProvider } from '@saas-ui/react';
import Link from 'next/link';
import { Spacer } from '@chakra-ui/react';
import { Menu,MenuList, MenuButton, MenuItem, Container} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, HStack } from '@chakra-ui/react';
  import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
  } from '@saas-ui/sidebar';
import { Text, Box } from '@chakra-ui/react';

export default function Dashboard() {
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
                  <FiHome/>
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
            <NavItem icon={<FiHome />} isActive>Dashboard</NavItem>
            <Link href='/donation'><NavItem icon={<BiDonateHeart />} >Donation</NavItem></Link>
            <Link href='/donor'><NavItem icon={<FiUser/>}>Donor</NavItem></Link>
        </SidebarSection>
      </Sidebar>
    }
  >
    <Box
        as="header"
        borderBottomWidth="1px"
        py="2"
        px="4"
        position="sticky"
              width="100vw"
              justifyItems="stretch"
              alignItems="stretch"
      >
      <p>DonorKite</p>
      </Box>
    <Box as="main" flex="1" py="2" px="4" overflow="auto">
    <Container mt="40px" maxW="container.lg" ml="40px">
        <SimpleGrid columns={3} gap="3">
          <Card variant="solid">
              <CardBody>
              <Stat>
                  <StatLabel>Collected Fees</StatLabel>
                  <StatNumber>??0.00</StatNumber>
                  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
              </CardBody>
          </Card>
          <Card variant="outline">
              <CardBody>
              <Stat>
                  <StatLabel>Collected Fees</StatLabel>
                  <StatNumber>??0.00</StatNumber>
                  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
              </CardBody>
          </Card>
          <Card variant="solid">
              <CardBody>
              <Stat>
                  <StatLabel>Collected Fees</StatLabel>
                  <StatNumber>??0.00</StatNumber>
                  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
              </CardBody>
          </Card>
          </SimpleGrid>
      </Container>
    </Box>
          </AppShell>
        </HStack>
       
    )
}