export const Error = ({ err }: { err: any }) => {
  return (
    <div className="">
      <pre>{JSON.stringify(err, null, 2)}</pre>
    </div>
  );
};
