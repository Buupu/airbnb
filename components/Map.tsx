import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';
import { Box, Icon, AspectRatio, Heading, Flex, Text } from '@chakra-ui/react';
import { TiLocation } from 'react-icons/ti';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center: any = getCenter(coordinates);

  const [viewPort, setViewport] = useState({
    height: '100%',
    width: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sammyfattah/cktj335ly6s9i17p7jkwztukq"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <Box key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-15}
            offsetTop={-15}
          >
            <Icon
              color="white"
              as={TiLocation}
              w="30px"
              h="30px"
              cursor="pointer"
              onClick={() => setSelectedLocation(result)}
              _hover={{ transform: 'scale(1.1)' }}
              transition="0.3s ease-out"
            />
          </Marker>
          {selectedLocation === result && (
            <Popup
              closeOnClick
              onClose={() => setSelectedLocation(null)}
              latitude={result.lat}
              longitude={result.long}
              offsetTop={-15}
              closeButton={false}
            >
              <Box minW="250px">
                <AspectRatio
                  h="180px"
                  w="100%"
                  position="relative"
                  ratio={5 / 3}
                >
                  <Image src={result.img} layout="fill" objectFit="cover" />
                </AspectRatio>
                <Heading fontSize="md" as="h4" pt={1}>
                  {result.title}
                </Heading>
                <Flex w="100%" justify="space-between" align="flex-end">
                  <Flex align="center" mt={1}>
                    <Icon as={IoIosStar} mr={1} color="red.300" />
                    <Text fontSize="sm">{result.star}</Text>
                  </Flex>
                  <Text fontSize="sm">{result.price}</Text>
                </Flex>
              </Box>
            </Popup>
          )}
        </Box>
      ))}
    </ReactMapGL>
  );
}
