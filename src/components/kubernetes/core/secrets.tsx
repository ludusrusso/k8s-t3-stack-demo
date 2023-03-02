import type { V1Secret } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";

export const SecretsList = ({ secrets }: { secrets: V1Secret[] }) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>TYPE</th>
          <th>DATA</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        {secrets.map((d) => (
          <SecretRow key={d.metadata?.uid!} secret={d} />
        ))}
      </tbody>
    </table>
  );
};

const SecretRow = ({ secret }: { secret: V1Secret }) => {
  const name = secret.metadata?.name;
  const type = secret.type;
  const data = Object.keys(secret.data || {}).length;
  const age = formatAge(secret.metadata?.creationTimestamp);
  return (
    <tr className="cursor-pointer hover:bg-gray-100">
      <td>{name}</td>
      <td>{type}</td>
      <td>{data}</td>
      <td>{age}</td>
    </tr>
  );
};
