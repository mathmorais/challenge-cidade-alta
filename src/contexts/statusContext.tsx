import axios from "axios";
import { IStatus } from "interfaces/IStatus";
import { createContext, useEffect, useState } from "react";

type StatusState =
	| {
			[key: number]: string;
	  }
	| undefined;

type StatusContextProps = {
	status: StatusState;
};

export const StatusContext = createContext({} as StatusContextProps);

export const StatusContextProvider: React.FC = ({ children }) => {
	const [status, setStatus] = useState<StatusState>();

	const handleSerializeStatus = (status: IStatus[]) => {
		let newObject = {};

		status.forEach(
			(item) => (newObject = { ...newObject, [item.id]: item.descricao })
		);

		return newObject;
	};

	const handleGetApplicationStatus = async () => {
		const response = await axios.get<IStatus[]>(
			"https://my-json-server.typicode.com/cidadealta/exercise/status"
		);

		return setStatus(handleSerializeStatus(response.data));
	};

	useEffect(() => {
		handleGetApplicationStatus();
	}, []);

	return (
		<StatusContext.Provider value={{ status }}>
			{children}
		</StatusContext.Provider>
	);
};
