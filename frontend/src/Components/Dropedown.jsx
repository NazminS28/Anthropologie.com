import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./midnav.module.css";

const MenSubNav = () => {
  const { pathname } = useLocation();

  return (
    <Box w="100%" h={"50px"} bgColor={"#dd0285"} className={styles.nav}>
      <Box className={styles.wrapper}>
        <ul className={styles.navLink}>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>MAKEUP</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}
                // style={{ border: "1px solid red" }}
              >
                <div className={styles.row}>
                  <header>Face</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">BB Cream</a>
                    </li>
                    <li>
                      <Link to={"/"}>Blush</Link>
                    </li>
                    <li>
                      <Link>Bronzers</Link>
                    </li>
                    <li>
                      <a href="#">CC Cream</a>
                    </li>
                    <li>
                      <a href="#">Countour</a>
                    </li>
                    <li>
                      <a href="#">Concealer</a>
                    </li>
                    <li>
                      <a href="#">Compact</a>
                    </li>
                    <li>
                      <a href="#">Face Primer</a>
                    </li>
                    <li>
                      <a href="#">Foundation</a>
                    </li>
                    <li>
                      <a href="#">Highlighters</a>
                    </li>
                    <li>
                      <a href="#">Loose Powder</a>
                    </li>
                    <li>
                      <a href="#">Makeup Kits</a>
                    </li>
                    <li>
                      <a href="#">Makeup</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>EYE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Contact Lenses</a>
                    </li>
                    <li>
                      <Link to={"/"}>Eye Liner</Link>
                    </li>
                    <li>
                      <Link>Eye Shadow</Link>
                    </li>
                    <li>
                      <a href="#">Eye Primer</a>
                    </li>
                    <li>
                      <a href="#">Eye-Pallets</a>
                    </li>
                    <li>
                      <a href="#">Eye Makeup Remover</a>
                    </li>
                    <li>
                      <a href="#">EyeBrow Enhancer</a>
                    </li>
                    <li>
                      <a href="#">False Eyelashes</a>
                    </li>
                    <li>
                      <a href="#">Kajal</a>
                    </li>
                    <li>
                      <a href="#">Masacara</a>
                    </li>
                    <li>
                      <a href="#">Under Eye Concealer</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>Lips</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Lipsticks</a>
                    </li>
                    <li>
                      <Link to={"/"}>Liquid Sticks</Link>
                    </li>
                    <li>
                      <Link>Lip Liner</Link>
                    </li>
                    <li>
                      <a href="#">Lip Gloss</a>
                    </li>
                    <li>
                      <a href="#">Lip Balm</a>
                    </li>
                    <li>
                      <a href="#">Lip Crayon</a>
                    </li>
                    <li>
                      <a href="#">Lip Stain</a>
                    </li>
                    <li>
                      <a href="#">Lip Plumber</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>NAILS</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Mainicure & Pedicure</a>
                    </li>
                    <li>
                      <Link to={"/"}>Nail Polish</Link>
                    </li>
                    <li>
                      <Link>Nail Arts Kits</Link>
                    </li>
                    <li>
                      <a href="#">Nail Care</a>
                    </li>
                    <li>
                      <a href="#">Nail Polish Sets</a>
                    </li>
                    <li>
                      <a href="#">Nail Polish Remover</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>TOOL BRUSHES</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Blush Brush</a>
                    </li>
                    <li>
                      <Link>Eyelash Curls</Link>
                    </li>
                    <li>
                      <a href="#">Eye Brush</a>
                    </li>
                    <li>
                      <a href="#">Face Brush</a>
                    </li>
                    <li>
                      <a href="#">Lip Brush</a>
                    </li>
                    <li>
                      <a href="#">Makeup Pouches</a>
                    </li>
                    <li>
                      <a href="#">Mirrors</a>
                    </li>
                    <li>
                      <a href="#">Sponges</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}></div>

              </div>
            </div>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>SKIN</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}>
                <div className={styles.row}>
                  <header>EYE CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Dark Circle</a>
                    </li>
                    <li>
                      <Link to={"/"}>Eye Contour Care</Link>
                    </li>
                    <li>
                      <Link>Eye Cream</Link>
                    </li>
                    <li>
                      <a href="#">Eye Mask</a>
                    </li>
                    <li>
                      <a href="#">Eye Serums</a>
                    </li>
                    <li>
                      <a href="#">Pffiness</a>
                    </li>
                    <li>
                      <a href="#">Under Eye Creams</a>
                    </li>
                    <li>
                      <a href="#">Under Eye Wrinkles</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>FACE CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Anti-Aging Creams</a>
                    </li>
                    <li>
                      <Link to={"/"}>Bleach Creams</Link>
                    </li>
                    <li>
                      <Link>Face Wash</Link>
                    </li>
                    <li>
                      <a href="#">Facial Wipes</a>
                    </li>
                    <li>
                      <a href="#">Face Oil</a>
                    </li>
                    <li>
                      <a href="#">Face Cleansers</a>
                    </li>
                    <li>
                      <a href="#">Face Kits</a>
                    </li>
                    <li>
                      <a href="#">Face Tools</a>
                    </li>
                    <li>
                      <a href="#">Moisturisers</a>
                    </li>
                    <li>
                      <a href="#">Mask and Peels</a>
                    </li>
                    <li>
                      <a href="#">Serum</a>
                    </li>
                    <li>
                      <a href="#">Toner</a>
                    </li>
                    <li>
                      <a href="#">Cleanser</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>BODY CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">All Creams</a>
                    </li>
                    <li>
                      <Link to={"/"}>Body Mosturizers</Link>
                    </li>
                    <li>
                      <Link>Body Toners</Link>
                    </li>
                    <li>
                      <a href="#">Body Sun Care</a>
                    </li>
                    <li>
                      <a href="#">Brightening Lotions</a>
                    </li>
                    <li>
                      <a href="#">Wrinkles</a>
                    </li>
                    <li>
                      <a href="#">Hand Creams</a>
                    </li>
                    <li>
                      <a href="#">Hand and Feet</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?b=1&s=170667a&w=0&k=20&c=dc-QT1-XScBSIvYwtM9_rmMwq1ke1QOAFuxXoYFM7Mo="
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* hair */}
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>HAIR</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}
                // style={{ border: "1px solid red" }}
              >
                <div className={styles.row}>
                  <header>HAIR CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Color Protection</a>
                    </li>
                    <li>
                      <Link to={"/"}>Dandruff</Link>
                    </li>
                    <li>
                      <Link>Dry Shampoo</Link>
                    </li>
                    <li>
                      <a href="#">Gels & Waxes</a>
                    </li>
                    <li>
                      <a href="#">Hair Spray</a>
                    </li>
                    <li>
                      <a href="#">Hair Dye</a>
                    </li>
                    <li>
                      <a href="#">Hair Creams</a>
                    </li>
                    <li>
                      <a href="#">Hair Styling</a>
                    </li>
                    <li>
                      <a href="#">Hairfall & Thinning</a>
                    </li>
                    <li>
                      <a href="#">Straightners</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>HAIR LOSS</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Conditioners</a>
                    </li>
                    <li>
                      <Link to={"/"}>Hair Oil</Link>
                    </li>
                    <li>
                      <Link>Hair Serum</Link>
                    </li>
                    <li>
                      <a href="#">Hair Growth Solutions</a>
                    </li>
                    <li>
                      <a href="#">Shampoo</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <div className={styles.midNavImg} style={{ width: "760px" }}>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* personal care  */}

          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="180px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>PERSONAL CARE</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}
                // style={{ border: "1px solid red" }}
              >
                <div className={styles.row}>
                  <header>BATH & BODY</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Body Cleansers</a>
                    </li>
                    <li>
                      <Link to={"/"}>Body Massage Oil</Link>
                    </li>
                    <li>
                      <Link>Body Wash</Link>
                    </li>
                    <li>
                      <a href="#">Essential Oil</a>
                    </li>
                    <li>
                      <a href="#">Foot Cream</a>
                    </li>
                    <li>
                      <a href="#">Scrubs & Exfolitants</a>
                    </li>
                    <li>
                      <a href="#">Ubtan and Face Packs</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>BATH ACCESSORIES</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Bath & Brushes</a>
                    </li>
                    <li>
                      <Link to={"/"}>Loofaas</Link>
                    </li>
                    <li>
                      <Link>Shower Caps</Link>
                    </li>
                    <li>
                      <a href="#">Sponges</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>BATH & SHOWER</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Body Soaps</a>
                    </li>
                    <li>
                      <Link to={"/"}>Shower Gel</Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <div className={styles.midNavImg} style={{ width: "580px" }}>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* mom and care */}
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>HAIR</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}
                // style={{ border: "1px solid red" }}
              >
                <div className={styles.row}>
                  <header>BABY CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Bath Time</a>
                    </li>
                    <li>
                      <Link to={"/"}>Diapers</Link>
                    </li>
                    <li>
                      <Link>Lotions</Link>
                    </li>
                    <li>
                      <a href="#">Powder</a>
                    </li>
                    <li>
                      <a href="#">Shmapoos</a>
                    </li>
                    <li>
                      <a href="#">Soaps</a>
                    </li>
                    <li>
                      <a href="#">Sterilizers</a>
                    </li>
                    <li>
                      <a href="#">Rash Creams</a>
                    </li>
                    <li>
                      <a href="#">Wipes</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>MOM CARE</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Lotion & Creams</a>
                    </li>
                    <li>
                      <Link to={"/"}>Personal Care</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <div className={styles.midNavImg} style={{ width: "760px" }}>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/*fragrances */}
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>FRAGRANCE</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox} style={{height: "auto" }}>
              <div>
                
                <br/>
                <Flex gap={4}>
                  <Button colorScheme="green" width="400px">LAKME</Button>
                  <Button colorScheme="green" width="400px">L-OREAL-PARIS</Button>
                  <Button colorScheme="green" width="400px">JOY</Button>
                  
                </Flex>
              </div>
            </div>
          </li>
          {/*Ayurveda */}
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>AYURVEDA</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div
                className={styles.content}
                // style={{ border: "1px solid red" }}
              >
                <div className={styles.row}>
                  <header>NATURAL SKIN</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Body Wash</a>
                    </li>
                    <li>
                      <Link to={"/"}>Body Lotion</Link>
                    </li>
                    <li>
                      <Link>Cleanser</Link>
                    </li>
                    <li>
                      <a href="#">Cream</a>
                    </li>
                    <li>
                      <a href="#">Eye Care</a>
                    </li>
                    <li>
                      <a href="#">Face Wash</a>
                    </li>
                    <li>
                      <a href="#">Gel</a>
                    </li>
                    <li>
                      <a href="#">Lip Care</a>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                    </li>
                    <li>
                      <a href="#">Pack</a>
                    </li>
                    <li>
                      <a href="#">Scrub</a>
                    </li>
                    <li>
                      <a href="#">Sun Protection</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>NAURAL HAIR</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Conditioners</a>
                    </li>
                    <li>
                      <Link to={"/"}>Hair Oils</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Hair Serum</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Hair Hair Gel</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Shampoo</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <div className={styles.midNavImg} style={{ width: "760px" }}>
                    <div>
                      <img
                        src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/*Brands */}
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="120px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text className={styles.text}>BRANDS</Text>
                <ChevronDownIcon />
              </Link>
            </Flex>
            <div className={styles.megaBox} style={{height: "auto"}}>
              <div>
                <Flex>
                  <Heading size="lg">
                    Top Brands
                  </Heading>
                  <Spacer />
                  <Button colorScheme="red">VIEW ALL</Button>
                  
                </Flex>
                <br/>
                <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                  <Button colorScheme="green">LAKME</Button>
                  <Button colorScheme="green">L-OREAL-PARIS</Button>
                  <Button colorScheme="green">JOY</Button>
                  <Button colorScheme="green">AROMA MAGIC</Button>
                  <Button colorScheme="green">LOTUS HERBERLS</Button>
                  <Button colorScheme="green">BIOTIQUE</Button>
                  <Button colorScheme="green">VLCC</Button>
                  <Button colorScheme="green">VEGA</Button>
                  <Button colorScheme="green">MAYBELLINE</Button>
                  <Button colorScheme="green">MAMAEARTH</Button>
                  <Button colorScheme="green">CHICCO</Button>
                  <Button colorScheme="green">NEUTROGENA</Button>
                </Grid>
              </div>
            </div>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default MenSubNav;
