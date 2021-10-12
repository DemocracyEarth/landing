import {
  Box,
  Grid,
  Image,
  Flex,
  VStack,
  Text,
  HStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import * as React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import bgGradientSM from "../images/bg-gradient-sm.jpg";
import bgGradientMD from "../images/bg-gradient-md.jpg";
import bgGradientLG from "../images/bg-gradient-lg.jpg";
import LogoIcon from "../images/icon.png";
import headerBgSM from "../images/header-img-sm.png";
import headerBgMD from "../images/header-img-md.png";
import headerBgLG from "../images/header-img-lg.png";

import Fonts from "../components/Font";
import { isOdd } from "../lib/util";

// markup
const IndexPage = ({ data }) => {
  const { projectsData } = data.allProjectsJson;

  return (
    <main>
      <Helmet>
        <title>Democracy Earth</title>
      </Helmet>
      <Fonts />
      <Flex
        bg={{
          base: `url(${bgGradientSM}) no-repeat`,
          md: `url(${bgGradientMD}) no-repeat`,
          lg: `url(${bgGradientLG}) no-repeat`,
        }}
        bgSize={{ base: "cover", md: "cover", lg: "cover" }}
        px='16px'
        py='24px'
        flexDir='column'
        alignItems='center'
      >
        <Grid
          rowGap={{ base: "256px", md: "279px" }}
          bg={{
            base: `url(${headerBgSM}) no-repeat`,
            md: `url(${headerBgMD}) no-repeat`,
            lg: `url(${headerBgLG}) no-repeat`,
          }}
          px='23px'
          pt={{ base: "28px", md: "40px" }}
          pb={{ base: "56px", md: "73px" }}
          bgSize={{ base: "cover", md: "cover", lg: "cover" }}
          borderTopRadius='24px'
          w={{ lg: "1232px" }}
        >
          <Flex justifyContent='space-between'>
            <Box
              as={Link}
              to='/'
              bg='logoBg'
              p={{ base: "4px 24px", md: "8px 32px" }}
              borderRadius='32px'
            >
              <HStack spacing='8px'>
                <Image w='40px' h='40px' src={LogoIcon} alt='Logo' />
                <Text
                  textStyle='paragraph-1'
                  color='buttonBg'
                  display={{ base: "none", md: "inline-block" }}
                >
                  Democracy earth
                </Text>
              </HStack>
            </Box>
            <Button w={{ md: "170px" }} variant='primary'>
              Start App
            </Button>
          </Flex>
          <VStack spacing='8px' textAlign='center'>
            <Text
              textStyle={{ base: "subHeader" }}
              color='secondaryText'
              textShadow='0px 2px 4px rgba(27, 26, 27, 0.8)'
            >
              Welcome to
            </Text>
            <Text
              maxW={{ base: "294px", md: "100%" }}
              textStyle={{ base: "defaultHeader", md: "mainHeader" }}
              color='primaryText'
              textShadow='0px 4px 8px rgba(27, 26, 27, 0.8)'
              textTransform={{ base: "uppercase", md: "capitalize" }}
            >
              Democracy Earth
            </Text>
            <Text
              maxW={{ base: "294px", md: "554px" }}
              textStyle={{
                base: "subHeader",
                md: "subHeader-2",
                lg: "subHeader-3",
              }}
              color='secondaryText'
              textShadow='0px 2px 4px rgba(27, 26, 27, 0.8)'
              fontWeight='300'
            >
              Work together to end poverty with crypto
            </Text>
          </VStack>
        </Grid>
        <Flex
          boxShadow='0px 16px 32px rgba(27, 26, 27, 0.1)'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
          pb='48px'
          borderBottomRadius='32px'
        >
          {projectsData.map(({ project }, index) => {
            const projectImage = getImage(project.picture);
            return (
              <Grid
                borderTop='8px solid'
                borderTopColor={project.borderColor}
                bg='primaryText'
                p={{ base: "24px 16px" }}
                justifyItems='center'
                key={index.toString()}
                w={{ lg: "1232px" }}
                placeItems='center'
              >
                <Box>
                  <Flex
                    flexDir={{
                      base: "column",
                      md: isOdd(index) ? "row" : "row-reverse",
                    }}
                    mb='32px'
                    alignItems={{ lg: "flex-end" }}
                  >
                    <Box
                      mb='30px'
                      width={{ base: "310px", md: "344px", lg: "600px" }}
                    >
                      <GatsbyImage image={projectImage} alt={project.title} />
                    </Box>
                    <Box ml={{ md: "16px" }}>
                      <Text
                        mb='8px'
                        textStyle={{ base: "paragraph-1", lg: "subHeader" }}
                        color={project.colorCode}
                      >
                        {project.title}
                      </Text>
                      <Text
                        textStyle={{ base: "title" }}
                        color='tertiaryText'
                        textTransform='uppercase'
                        mb='16px'
                        fontWeight='300'
                      >
                        {project.name}
                      </Text>
                      <Text
                        maxW={{ base: "294px", md: "328px", lg: "571px" }}
                        textStyle={{ base: "subHeader", lg: "paragraph-1" }}
                        color='tertiaryText'
                        mb='24px'
                        fontWeight='300'
                      >
                        {project.description}
                      </Text>
                      <Button
                        as={ChakraLink}
                        href={project.projectLink}
                        isExternal
                        variant='primary'
                        bg={project.colorCode}
                      >
                        Visit website
                      </Button>
                    </Box>
                  </Flex>
                  <Box
                    bg='card1'
                    border='1px solid'
                    borderColor='card1BorderColor'
                    borderRadius='8px'
                    p='24px'
                    w={{ base: "310px", md: "688px", lg: "100%" }}
                  >
                    <Text
                      textStyle='buttonLabel'
                      color='cardTextTitle'
                      textTransform='uppercase'
                      fontWeight='500'
                      pl='16px'
                    >
                      Related with UBI Token
                    </Text>
                    <HStack spacing='48px' w='100%' overflow='auto'>
                      {project.resources.map((resource, resourceIndex) => (
                        <Box
                          p='16px'
                          _hover={{
                            bg: project.colorCode,
                            cursor: "pointer",
                            textDecoration: "none",
                            borderRadius: "8px",
                            p: {
                              color: "#fff",
                            },
                            "p:last-of-type": {
                              color: project.moreInfoColor,
                            },
                          }}
                          as={ChakraLink}
                          isExternal
                          href={resource.link}
                          key={resourceIndex.toString()}
                        >
                          <Text
                            textStyle='paragraph-1'
                            color={project.colorCode}
                          >
                            {resource.title}
                          </Text>
                          <Text
                            className='moreInfo'
                            textStyle='smallText'
                            color='cardTextTitle'
                          >
                            More info →
                          </Text>
                        </Box>
                      ))}
                    </HStack>
                  </Box>
                </Box>
              </Grid>
            );
          })}
          <Flex mt='80px' justifyContent='center' alignItems='center'>
            <Box
              bg='footerBg'
              textAlign='center'
              w={{ base: "294px", md: "512px" }}
              p='24px'
              borderRadius='32px'
            >
              <Text
                textStyle='buttonLabel'
                fontWeight='500'
                color='cardTextTitle'
              >
                Democracy earth
              </Text>
              <Text
                textStyle='buttonLabel'
                textTransform='uppercase'
                color='tertiaryText'
              >
                END POVERTY WITH CRYPTO
              </Text>
              <Text textStyle='smallText' mt='24px' color='copyRightNote'>
                Copyright © 2021 Open Collective Foundation, a 501(c)(3)
                nonprofit
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export const query = graphql`
  {
    allProjectsJson {
      projectsData: edges {
        project: node {
          id
          title
          projectLink
          name
          resources {
            link
            title
          }
          borderColor
          colorCode
          description
          picture {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
