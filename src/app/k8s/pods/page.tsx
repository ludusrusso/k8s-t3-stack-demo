"use client";
import { Form } from "@/components/forms/form";
import { TextField } from "@/components/forms/text-field";
import { PodsList } from "@/components/kubernetes/core/pods-list";
import { Error } from "@/components/ui/error";
import { Loading } from "@/components/ui/loading";
import type { IoK8sApiCoreV1Pod } from "@/gen/api";
import { reactApi } from "@/utils/api";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { z } from "zod";
import { useDialogStore } from "../dialog.store";
import YAML from "yaml";

export default function Page() {
  const openDialog = useDialogStore((state) => state.setDialog);
  const res = reactApi.k8s.getPods.useQuery({
    namespace: "fy",
  });

  if (res.isLoading) {
    return <Loading />;
  }

  if (res.isError) {
    return <Error err={res.error} />;
  }

  return (
    <div className="m-auto mt-2 max-w-6xl overflow-x-scroll">
      <h3 className="text-bold mb-10 text-2xl"> Pod List</h3>
      <PodsList
        pods={res.data || []}
        onSee={(pod) => openDialog(<SeeDialog pod={pod} />)}
        onDelete={(pod) => openDialog(<DeleteDialog pod={pod} />)}
      />
    </div>
  );
}

const SeeDialog = ({ pod }: { pod: IoK8sApiCoreV1Pod }) => {
  const doc = new YAML.Document();
  doc.contents = pod as any;
  return (
    <>
      <Dialog.Title as="h3" className="text-lg font-medium leading-6">
        See Pod {pod.metadata?.name}
      </Dialog.Title>
      <div className="mt-4">
        <pre>{doc.toString()}</pre>
      </div>
    </>
  );
};

const DeleteDialog = ({ pod }: { pod: IoK8sApiCoreV1Pod }) => {
  const name = pod.metadata?.name || "";
  const namespace = pod.metadata?.namespace || "";

  const CheckSchema = z.object({
    check: z.literal(name),
  });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-orange-600"
      >
        Delete Pod {name}
      </Dialog.Title>
      <Form schema={CheckSchema} onSubmit={async (value) => {}}>
        {({ handleSubmit, submitting, invalid, submitErrors }) => (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <TextField label={`Type \`${name}\` to procede`} name="check" />
            <div>
              {submitErrors?.error && (
                <span className="text-sm text-red-500">
                  {submitErrors.error}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={invalid || submitting}
                className={clsx("btn-error btn-sm btn", {
                  loading: submitting,
                })}
              >
                Delete
              </button>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
