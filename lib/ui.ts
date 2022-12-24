export const generateRandomColor = () => {
	const colors = [
		'gray',
		'red',
		'orange',
		'yellow',
		'green',
		'purple',
		'teal',
		'blue',
		'pink',
	];

	return colors[Math.floor(Math.random() * colors.length)];
};

export const capitalizeName = (name: string) => {
	return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
};
