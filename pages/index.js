import dynamic from "next/dynamic";

const ClientOnlyApp = dynamic(() => import("./_app"), { ssr: false });

const ClientOnly = () => {
  return <ClientOnlyApp />;
};

export default ClientOnly;
