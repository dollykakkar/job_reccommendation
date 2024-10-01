import { FeaturedEmployers } from "./Pages/FeaturedEmployers";
import { JobType } from "./Pages/JobType";
import { LatestJobs } from "./Pages/LatestJobs";
import { NewJobs } from "./Pages/NewJobs";
import { RecentJobs } from "./Pages/RecentJobs";

function App() {
  return (
    <>
      <RecentJobs/>
      <JobType/>
      <FeaturedEmployers/>
      <LatestJobs/>
      <NewJobs/>
    </>
  );
}

export default App;
