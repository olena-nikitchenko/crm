import React from "react";
import Toolbar from "../components/toolbar";
import SearchInput from "../components/search-input";
import CompanyTable from "../components/company-table";
import CompanyRow from "../components/company-row";
import { Status } from "../components/status-label";

interface PageProps {}

export default function Page({}: PageProps) {
	return (
		<>
			<header>Companies</header>
			<Toolbar>
				<SearchInput />
			</Toolbar>
			<CompanyTable>
				<CompanyRow
					id={1}
					category={"Products"}
					company={"Costco"}
					status={Status.Pending}
					promotion={true}
					country={"USA"}
					joinedDate={"02.19.2023"}
				/>
			</CompanyTable>
		</>
	);
}
