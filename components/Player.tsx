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
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useState, useEffect, useRef } from 'react';
import {
	MdSkipPrevious,
	MdSkipNext,
	MdPauseCircleFilled,
	MdShuffle,
	MdRepeat,
	MdPlayCircle,
} from 'react-icons/md';
import { useStore, useStoreActions } from 'easy-peasy';
import { formatTime } from '../lib/formatters';

const Player = ({ songs, activeSong }) => {
	const [isPlaying, setIsPlaying] = useState(true);
	const [isShuffle, setIsShuffle] = useState(false);
	const [isRepeat, setIsRepeat] = useState(false);
	const [isSeeking, setIsSeeking] = useState(false);
	const [duration, setDuration] = useState(0.0);
	const [seek, setSeek] = useState(0.0);
	const [index, setIndex] = useState(
		songs.findIndex((s) => s.id === activeSong.id)
	);
	const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);

	const audioRef = useRef(null);
	const repeatRef = useRef(isRepeat);

	useEffect(() => {
		let timerId: number;

		if (isPlaying && !isSeeking) {
			const f = () => {
				setSeek(audioRef.current.seek());
				/**
				 * requestAnimationFrame:
				 *    it's like setInterval that takes a callback func (f) and call it 60 times a sec
				 */
				timerId = requestAnimationFrame(f);
			};

			timerId = requestAnimationFrame(f);
			return () => cancelAnimationFrame(timerId);
		}

		cancelAnimationFrame(timerId);
	}, [isPlaying, isSeeking]);

	useEffect(() => {
		setActiveSong(songs[index]);
	}, [index, setActiveSong, songs]);

	useEffect(() => {
		repeatRef.current = isRepeat;
	}, [isRepeat]);

	const setPlayState = (value: boolean) => {
		setIsPlaying(value);
	};

	const toggleShuffleState = () => {
		setIsShuffle((prevValue) => !prevValue);
	};

	const toggleRepeatState = () => {
		setIsRepeat((prevValue) => !prevValue);
	};

	const prevSong = () => {
		setIndex((state) => (state ? state - 1 : songs.length - 1));
	};

	const nextSong = () => {
		setIndex((state) => {
			if (isShuffle) {
				/** shuffle logic */
				const next = Math.floor(Math.random() * songs.length);

				if (next === state) return nextSong() as unknown as number;
				return next;
			} else {
				return state === songs.length - 1 ? 0 : state + 1;
			}
		});
	};

	const onEnd = () => {
		if (repeatRef.current) {
			setSeek(0);
			audioRef.current.seek(0);
		} else nextSong();
	};

	const onLoad = () => {
		const songDuration = audioRef.current.duration();
		setDuration(songDuration);
	};

	const onSeek = (e) => {
		setSeek(parseFloat(e[0]));
		audioRef.current.seek(e[0]);
	};

	return (
		<Box marginInline='auto'>
			<Box>
				<ReactHowler
					ref={audioRef}
					src={activeSong?.url}
					playing={isPlaying}
					onLoad={onLoad}
					onEnd={onEnd}
				/>
			</Box>
			<Center>
				<ButtonGroup>
					<IconButton
						icon={<MdShuffle fontSize={26} />}
						aria-label='shuffle icon'
						color={isShuffle ? 'white' : 'gray.600'}
						outline='none'
						variant='link'
						isRound
						onClick={toggleShuffleState}
					/>
					<IconButton
						icon={<MdSkipPrevious fontSize={26} />}
						aria-label='skip previous icon'
						outline='none'
						variant='link'
						isRound
						onClick={prevSong}
					/>
					{isPlaying ? (
						<IconButton
							icon={<MdPauseCircleFilled fontSize={38} />}
							aria-label='play icon'
							outline='none'
							color={'white'}
							variant='link'
							isRound
							onClick={() => setPlayState(false)}
						/>
					) : (
						<IconButton
							icon={<MdPlayCircle fontSize={38} />}
							aria-label='play icon'
							outline='none'
							color={'white'}
							variant='link'
							isRound
							onClick={() => setPlayState(true)}
						/>
					)}
					<IconButton
						icon={<MdSkipNext fontSize={26} />}
						aria-label='skip next icon'
						outline='none'
						variant='link'
						isRound
						onClick={nextSong}
					/>
					<IconButton
						icon={<MdRepeat fontSize={26} />}
						aria-label='repeat icon'
						color={isRepeat ? 'white' : 'gray.600'}
						outline='none'
						variant='link'
						isRound
						onClick={toggleRepeatState}
					/>
				</ButtonGroup>
			</Center>
			<Box color='gray.600'>
				<Flex justify='center' align='center'>
					<Box w='10%'>
						<Text>{formatTime(seek)}</Text>
					</Box>
					<Box w='80%'>
						<RangeSlider
							id='playerRange'
							aria-label={['min', 'max']}
							step={0.1}
							min={0}
							max={duration ? parseInt(duration.toFixed(2)) : 0}
							value={[seek]}
							onChange={onSeek}
							onChangeStart={() => setIsSeeking(true)}
							onChangeEnd={() => setIsSeeking(false)}
						>
							<RangeSliderTrack bg='gray.800'>
								<RangeSliderFilledTrack bg='white' />
							</RangeSliderTrack>

							<RangeSliderThumb index={0} />
						</RangeSlider>
					</Box>
					<Box w='10%' textAlign='right'>
						<Text>{formatTime(duration)}</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default Player;
