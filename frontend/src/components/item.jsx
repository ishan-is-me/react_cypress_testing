import {
	Flex,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	chakra,
	Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';


function Item(data) {
	const { name, price, isNew, imageURL } = data.data;
	return (
		<>
			<Box
				maxW="sm"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative">
				<Image
					src={imageURL}
					alt={`Picture of ${name}`}
					roundedTop="lg"
				/>

				<Box p="6">
					<Box d="flex" alignItems="baseline" flexWrap="wrap">
						{isNew && (
							<Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
								{isNew}
							</Badge>
						)}
					</Box>
					<Flex mt="1" justifyContent="space-between" alignContent="center">
						<Box
							fontSize="2xl"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight">
							{name}
						</Box>
						<Tooltip
							label="Add to cart"
							bg="white"
							placement={'top'}
							color={'gray.800'}
							fontSize={'1.2em'}>
							<chakra.a href={'#'} display={'flex'}>
								<Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
							</chakra.a>
						</Tooltip>
					</Flex>

					<Flex justifyContent="space-between" alignContent="center">
						<Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
							<Box as="span" color={'gray.600'} fontSize="lg">
								£
							</Box>
							{price}
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
}

export default Item;