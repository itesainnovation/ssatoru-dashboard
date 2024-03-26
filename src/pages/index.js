import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

  const [qrs, setQrs] = useState([]);

  const getQrs = async () => {
    const allQrs = [];
    const querySnapshot = await getDocs(collection(db, "qrs"));
  
    querySnapshot.forEach((doc) => {
      allQrs.push(doc.data());
    });
    console.log(allQrs);
    setQrs(allQrs);
  };

  const textStyles = {
    fontFamily: "Inter",
    fontSize: "6xl",
    color: 'white',
    fontWeight: 'bold',
  }
  

  return (
    <>
      <Head>
        <title>QR-Generator</title>
        <meta name="description" content="QR Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w={'100%'} h={'100vh'} bg={'pink.200'}>
        <Text fontSize="6xl" fontFamily="Monospace" fontWeight={'bold'} color={'green.400'}>Dashboard</Text>
        <Flex gap={6}>
          <Text fontSize="2xl" fontFamily="Inter" color={'red.600'}>Dashboard</Text>
          <Text fontSize="2xl" fontFamily="Inter" color={'blue.500'}>Dashboard</Text>
        </Flex>
      </VStack>
    </>
  );
}
