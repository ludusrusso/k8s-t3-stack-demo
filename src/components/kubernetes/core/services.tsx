import type { V1Service } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";

export const ServicesList = ({ services }: { services: V1Service[] }) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>TYPE</th>
          <th>Cluster IP</th>
          <th>External IP</th>
          <th>Port(s)</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        {services.map((d) => (
          <ServiceRow key={d.metadata?.uid!} service={d} />
        ))}
      </tbody>
    </table>
  );
};

const ServiceRow = ({ service }: { service: V1Service }) => {
  const name = service.metadata?.name;
  const type = service.spec?.type;
  const clusterIP = service.spec?.clusterIP;
  const externalIP =
    service.status?.loadBalancer?.ingress?.map((i) => i.ip).join(",") ??
    "<NONE>";
  const ports = service.spec?.ports
    ?.map((p) => `${p.port}/${p.protocol}`)
    .join(",");
  const age = formatAge(service.metadata?.creationTimestamp);
  return (
    <tr className="cursor-pointer hover:bg-gray-100">
      <td>{name}</td>
      <td>{type}</td>
      <td>{clusterIP}</td>
      <td>{externalIP}</td>
      <td>{ports}</td>
      <td>{age}</td>
    </tr>
  );
};
