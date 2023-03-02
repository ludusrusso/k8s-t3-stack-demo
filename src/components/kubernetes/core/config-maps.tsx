import type { V1ConfigMap } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";

export const ConfigMapsList = ({
  configMaps,
}: {
  configMaps: V1ConfigMap[];
}) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>DATA</th>
          <th>AGE</th>{" "}
        </tr>
      </thead>
      <tbody>
        {configMaps.map((d) => (
          <ConfigMapRow key={d.metadata?.uid!} configMap={d} />
        ))}
      </tbody>
    </table>
  );
};

const ConfigMapRow = ({ configMap }: { configMap: V1ConfigMap }) => {
  const name = configMap.metadata?.name;
  const data = Object.keys(configMap.data || {}).length;
  const age = formatAge(configMap.metadata?.creationTimestamp);
  return (
    <tr className="cursor-pointer hover:bg-gray-100">
      <td>{name}</td>
      <td>{data}</td>
      <td>{age}</td>
    </tr>
  );
};
