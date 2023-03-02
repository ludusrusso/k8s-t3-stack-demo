"use client";
import { Form } from "@/components/forms/form";
import { NumberInputField } from "@/components/forms/number-field";
import { TextField } from "@/components/forms/text-field";
import { DeploymentsList } from "@/components/kubernetes/core/deplyoment-list";
import { Error } from "@/components/ui/error";
import { Loading } from "@/components/ui/loading";
import type { IoK8sApiAppsV1Deployment } from "@/gen/api";
import { reactApi } from "@/utils/api";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import YAML from "yaml";
import { z } from "zod";
import { useDialogStore } from "../dialog.store";

const namespace = "react-milano-demo";

export default function Page() {
  const openDialog = useDialogStore((state) => state.setDialog);
  const res = reactApi.k8s.getDeployments.useQuery({
    namespace: namespace,
  });

  if (res.isLoading) {
    return <Loading />;
  }

  if (res.isError) {
    return <Error err={res.error} />;
  }

  return (
    <div className="m-auto mt-2 max-w-6xl overflow-x-scroll">
      <h3 className="text-bold mb-10 text-2xl"> Deplyoments List</h3>
      <DeploymentsList
        deployments={res.data || []}
        onSee={(deploy) => openDialog(<SeeDialog deploy={deploy} />)}
        onScale={(deploy) => openDialog(<ScaleDialog deploy={deploy} />)}
        onDelete={(deploy) => openDialog(<DeleteDialog deploy={deploy} />)}
      />
    </div>
  );
}

const SeeDialog = ({ deploy }: { deploy: IoK8sApiAppsV1Deployment }) => {
  const doc = new YAML.Document();
  doc.contents = deploy as any;
  return (
    <>
      <Dialog.Title as="h3" className="text-lg font-medium leading-6">
        See Pod {deploy.metadata?.name}
      </Dialog.Title>
      <div className="mt-4">
        <pre>{doc.toString()}</pre>
      </div>
    </>
  );
};

const DeleteDialog = ({ deploy }: { deploy: IoK8sApiAppsV1Deployment }) => {
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const deleteMut = reactApi.k8s.deleteDeployment.useMutation({
    onSuccess: () => {
      closeDialog();
    },
  });

  const name = deploy.metadata?.name || "";
  const namespace = deploy.metadata?.namespace || "";

  const CheckSchema = z.object({
    check: z.literal(name),
  });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-red-600"
      >
        Delete Deployment {name}
      </Dialog.Title>
      <Form
        schema={CheckSchema}
        onSubmit={async () => {
          await deleteMut.mutateAsync({
            name,
            namespace,
          });
        }}
      >
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

const ScaleDialog = ({ deploy }: { deploy: IoK8sApiAppsV1Deployment }) => {
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const scaleMut = reactApi.k8s.scaleDeployment.useMutation({
    onSuccess: () => {
      closeDialog();
    },
  });
  const name = deploy.metadata?.name || "";
  const namespace = deploy.metadata?.namespace || "";
  const replicas = deploy.spec?.replicas || 1;

  const CheckSchema = z.object({
    replicas: z.number().min(0).max(10),
  });

  return (
    <>
      <Dialog.Title as="h3" className="text-lg font-medium leading-6 ">
        Scale Deployment {name}
      </Dialog.Title>
      <Form
        schema={CheckSchema}
        initialValues={{ replicas }}
        onSubmit={async (value) => {
          await scaleMut.mutateAsync({
            name,
            namespace,
            replicas: value.replicas,
          });
        }}
      >
        {({ handleSubmit, submitting, invalid, submitErrors }) => (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <NumberInputField label={`replicas`} name="replicas" />
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
                className={clsx("btn-primary btn-sm btn", {
                  loading: submitting,
                })}
              >
                Scale
              </button>
            </div>
          </form>
        )}
      </Form>
    </>
  );
};
