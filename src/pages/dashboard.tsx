// import BarChartCard, { type dataType} from "@/components/privateComponent/barChart";
// import MainCard from "@/components/privateComponent/mainCard";
// import ProgressCard, { type progressData } from "@/components/privateComponent/progressCard";
// import GridSection from "@/components/section/gridSection";
// import { useEffect, useState } from "react";
// import DarkArrow from "@/assets/CarouselArrow - D.svg?react";
// import LightArrow from "@/assets/CarouselArrow - L.svg?react";
// import useMode from "@/context/useMode";
// import useSetting from "@/context/useSettings";

// type usageType = {
// 	cpu: progressData
// 	ram: progressData
// 	bandwidth: progressData
// 	storage: progressData
// 	uptime: string
// 	loadAverage: string
// }

// type appType = {
// 	title: string
// 	status: "Running" | "Stopped" | "Failed"
// 	lastDeployTime: string
// 	domainPort: string
// 	runtime: string 
// }

// const mockUsage: usageType = {
//     cpu: { progress: 64, currentUsage: 1, maximumUsage: 2 },
//     ram: { progress: 56, currentUsage: 2.4, maximumUsage: 4 },
//     bandwidth: { progress: 50, currentUsage: 2, maximumUsage: 4 },
//     storage: { progress: 20, currentUsage: 20, maximumUsage: 100 },
// 	uptime: "5 Years 3 Days 1 Hour 44 Minutes 3 Seconds",
// 	loadAverage: "2 Minute"
// };

// const mockTraffic: dataType = {
// 	monthly:{
// 		total: 9174,
// 		data: [
// 			{name: "January", value: 568},
// 			{name: "Febuary", value: 587},
// 			{name: "March", value: 621},
// 			{name: "April", value: 568},
// 			{name: "May", value: 768},
// 			{name: "June", value: 1134},
// 			{name: "July", value: 895},
// 			{name: "August", value: 789},
// 			{name: "September", value: 576},
// 			{name: "October", value: 653},
// 			{name: "Novermber", value: 987},
// 			{name: "December", value: 1028},
// 		],
// 	},
// 	yearly: {
// 		total: 33510,
// 		data: [
// 			{name: "2021", value: 4597},
// 			{name: "2022", value: 5892},
// 			{name: "2023", value: 6149},
// 			{name: "2024", value: 7698},
// 			{name: "2025", value: 9174},
// 		]
// 	}
// }

// const mockApp: appType[] = [
// 	{title: "ESP32-Hydroponics-Web", status: "Stopped", lastDeployTime: "22 August 2024", domainPort: "https://myhydroponic.com:5173", runtime: "Flask"},
// 	{title: "", status: "Stopped", lastDeployTime: "22 August 2024", domainPort: "https://myhydroponic.com:5173", runtime: "Flask"},
// 	{title: "ESP32-Hydroponics-Web", status: "Stopped", lastDeployTime: "22 August 2024", domainPort: "https://myhydroponic.com:5173", runtime: "Flask"},
// 	{title: "ESP32-Hydroponics-Web", status: "Stopped", lastDeployTime: "22 August 2024", domainPort: "https://myhydroponic.com:5173", runtime: "Flask"},
// ]



// type usageData = typeof mockUsage;

// const DashboardPage = () => {
//     const [usage, setUsage] = useState<usageData>(mockUsage);
// 	const mode = useMode(state => state.mode);
// 	const deploymentMode = useSetting(state => state.deploymentMode);
//     const getUsageData = () => {
//         return mockUsage;
//     };

//     useEffect(() => {
//         (async () => {
//             const data = await getUsageData();
//             setUsage(data);
//         })();
//     }, []);

//     return (
//         <div className="page">
//             <section className="mt-40 w-full px-8 md:px-12">
//                 <h1>Dashboard</h1>
//             </section>
// 			<section className="section w-full h-60">
				
// 			</section>
//             <GridSection>
//                 <ProgressCard
//                     className="w-full md:w-80"
//                     title="CPU"
//                     progress={usage.cpu}
//                     text="vCPU"
//                 />
//                 <ProgressCard
//                     className="w-full md:w-80"
//                     title="RAM"
//                     progress={usage.ram}
//                     text="GB"
//                 />
//                 <ProgressCard
//                     className="w-full md:w-80"
//                     title="Bandwidth"
//                     progress={usage.bandwidth}
//                     text="GB"
//                 />
//                 <ProgressCard
//                     className="w-full md:w-80"
//                     title="Storage"
//                     progress={usage.storage}
//                     text="GB"
//                 />
//             </GridSection>
//             <section className="section flex w-full flex-col xl:flex-row">
// 				<BarChartCard
// 					data={mockTraffic}
// 					title="Traffic"
// 					text="Your overall app traffic the past months/years"
// 					className="w-full xl:w-3/5 h-140 xl:h-100"
// 				/>
// 				<section className="justify-start mt-16 xl:mt-0 xl:px-8 flex flex-col w-full xl:w-2/5 gap-4">
// 					<h4>Up Time & Load Time</h4>
// 					<MainCard
// 						className="w-full"
// 						title="Up Time"
// 						text={mockUsage.uptime}
// 						type="flex-row"
// 						action={
//                                 mode === "dark" ? <DarkArrow /> : <LightArrow />
//                             }
// 					/>
// 					<MainCard
// 						title="Load Average"
// 						text={mockUsage.loadAverage}
// 						type="flex-row"
// 					action={
//                                 mode === "dark" ? <DarkArrow /> : <LightArrow />
//                             }
// 					/>

// 				</section>
// 				<section className="section">
// 					{deploymentMode ? (
// 						<div>

// 						</div>
// 					) : (
// 						<div>

// 						</div>
// 					)}
// 				</section>
// 			</section>
//         </div>
//     );
// };

// export default DashboardPage;


import { AppSidebar } from "@/components/ui/app-sidebar"
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive"
import { DataTable } from "@/components/ui/data-table"
import { SectionCards } from "@/components/ui/section-cards"
import { SiteHeader } from "@/components/ui/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "@/data/dashboard/data.json"

const DashboardPage = () => {
  return (
	<div>
		<SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>

	</div>
  )
};

export default DashboardPage;
