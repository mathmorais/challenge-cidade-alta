export const dateFormatter = (date: string) => {
	const currentDate = new Date(date);

	const day = String(currentDate.getDate()).padStart(2, "0");
	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
	const year = String(currentDate.getFullYear());

	return `${day}/${month}/${year}`;
};
