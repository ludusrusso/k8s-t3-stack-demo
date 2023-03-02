import type { V1Deployment } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";

export const DeploymentsList = ({
  deployments,
}: {
  deployments: V1Deployment[];
}) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ready</th>
          <th>Up to date</th>
          <th>Available</th>
          <th>AGE</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {deployments.map((d) => (
          <DeploymentRow key={d.metadata?.uid!} deployment={d} />
        ))}
      </tbody>
    </table>
  );
};

const DeploymentRow = ({ deployment }: { deployment: V1Deployment }) => {
  const name = deployment.metadata?.name;
  const replicas = deployment.spec?.replicas || "-";
  const availabe = deployment.status?.availableReplicas || 0;
  const updated = deployment.status?.updatedReplicas || 0;

  const age = formatAge(deployment.metadata?.creationTimestamp);
  return (
    <tr className="cursor-pointer hover:bg-gray-100">
      <td>{name}</td>
      <td>
        {availabe} / {replicas}
      </td>
      <td>{updated}</td>
      <td>{availabe}</td>
      <td>{age}</td>
    </tr>
  );
};
