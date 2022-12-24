/* eslint-disable jsx-a11y/aria-proptypes */
import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useState, useEffect } from "react";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPauseCircleFilled,
  MdShuffle,
  MdRepeat,
  MdPlayCircle,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box marginInline="auto">
      <Center>
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle fontSize={26} />}
            aria-label="shuffle icon"
            outline="none"
            variant="link"
            isRound
          />
          <IconButton
            icon={<MdSkipPrevious fontSize={26} />}
            aria-label="skip previous icon"
            outline="none"
            variant="link"
            isRound
          />
          <IconButton
            icon={<MdPlayCircle fontSize={38} />}
            aria-label="play icon"
            outline="none"
            color={"white"}
            variant="link"
            isRound
          />
          <IconButton
            icon={<MdSkipNext fontSize={26} />}
            aria-label="skip next icon"
            outline="none"
            variant="link"
            isRound
          />
          <IconButton
            icon={<MdRepeat fontSize={26} />}
            aria-label="repeat icon"
            outline="none"
            variant="link"
            isRound
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box w="10%">
            <Text>1.20</Text>
          </Box>
          <Box w="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={1.0}
              min={0}
              max={321}
              id="playerRange"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>

              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box w="10%" textAlign="right">
            <Text>2.00</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
