import ApplicationReqGraph from "@/components/application-req-graph";

export default function Home() {
  return (
    <div className="max-w-screen h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <ApplicationReqGraph />
      </div>
    </div>
  );
}
