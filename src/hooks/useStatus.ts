import { StatusContext } from "contexts/statusContext";
import { useContext } from "react";

export const useStatus = (status: number) => {
	const context = useContext(StatusContext);
	return context.status ? context.status[status] : "...";
};
