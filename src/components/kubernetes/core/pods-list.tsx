import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { IoK8sApiCoreV1Pod } from "@/gen/model/ioK8sApiCoreV1Pod";
import { formatAge } from "./format-age";

export const PodsList = ({
  pods,
  onDelete,
  onSee,
}: {
  pods: IoK8sApiCoreV1Pod[];
  onSee?: (pod: IoK8sApiCoreV1Pod) => void;
  onDelete?: (pod: IoK8sApiCoreV1Pod) => void;
}) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ready</th>
          <th>Status</th>
          <th>Restarts</th>
          <th>AGE</th>
          <th>IP</th>
          <th>Node</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pods.map((p) => {
          const containers = p.status?.containerStatuses?.length || 0;
          const containersReady =
            p.status?.containerStatuses?.filter((c) => c.ready).length || 0;
          const status = p.status?.phase;
          const age = formatAge(p.status?.startTime);
          return (
            <tr key={p.metadata?.uid}>
              <th>{p.metadata?.name}</th>
              <td>
                {containersReady} / {containers}
              </td>
              <td>{status}</td>
              <td>{p.status?.podIP}</td>
              <td>{age}</td>
              <td>{p.status?.podIP}</td>
              <td>{p.spec?.nodeName}</td>
              <td>
                {onSee && (
                  <button
                    className="btn-ghost btn-circle btn"
                    onClick={() => onSee(p)}
                  >
                    <EyeIcon className="w-6" />
                  </button>
                )}
                {onDelete && (
                  <button
                    className="btn-ghost btn-circle btn"
                    onClick={() => onDelete(p)}
                  >
                    <TrashIcon className="w-6" />
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
