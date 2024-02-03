import { headers } from "next/headers";
import StatusLabel, { Status } from "./components/status-lable";

export default function Home() {
	return (
		<main>
			<h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
			<StatusLabel status={Status.Active}> Active</StatusLabel>
			<StatusLabel status={Status.NotActive}> Not Active</StatusLabel>
			<StatusLabel status={Status.Pending}> Pending</StatusLabel>
			<StatusLabel status={Status.Suspended}> Suspended</StatusLabel>
		</main>
	);
}
