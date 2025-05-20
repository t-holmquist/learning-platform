import Link from "next/link";


const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <Link href={"/learn"} className="underline">Continue lesson</Link>
    </>
  )
}

export default Dashboard;