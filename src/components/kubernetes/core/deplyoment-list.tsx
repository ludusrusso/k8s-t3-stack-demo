import type { IoK8sApiAppsV1Deployment } from "@/gen/model/ioK8sApiAppsV1Deployment";
import {
  ArrowUpRightIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { formatAge } from "./format-age";

type DeplomentFunction = (d: IoK8sApiAppsV1Deployment) => void;

export const DeploymentsList = ({
  deployments,
  onDelete,
  onScale,
  onSee,
}: {
  deployments: IoK8sApiAppsV1Deployment[];
  onSee?: DeplomentFunction;
  onDelete?: DeplomentFunction;
  onScale?: DeplomentFunction;
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
          <DeploymentRow
            key={d.metadata?.uid!}
            deployment={d}
            onDelete={onDelete}
            onScale={onScale}
            onSee={onSee}
          />
        ))}
      </tbody>
    </table>
  );
};

const DeploymentRow = ({
  deployment,
  onDelete,
  onScale,
  onSee,
}: {
  deployment: IoK8sApiAppsV1Deployment;
  onSee?: DeplomentFunction;
  onDelete?: DeplomentFunction;
  onScale?: DeplomentFunction;
}) => {
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
      <td>
        {onSee && (
          <button
            className="btn-ghost btn-circle btn"
            onClick={() => onSee(deployment)}
          >
            <EyeIcon className="w-6" />
          </button>
        )}
        {onScale && (
          <button
            className="btn-ghost btn-circle btn"
            onClick={() => onScale(deployment)}
          >
            <ArrowUpRightIcon className="w-6" />
          </button>
        )}
        {onDelete && (
          <button
            className="btn-ghost btn-circle btn"
            onClick={() => onDelete(deployment)}
          >
            <TrashIcon className="w-6" />
          </button>
        )}
      </td>
    </tr>
  );
};
