import * as k8s from "@kubernetes/client-node";
import * as api from "@/gen/api";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

export const k8sCli = {
  coreV1: kc.makeApiClient(api.CoreV1Api),
  objectApi: k8s.KubernetesObjectApi.makeApiClient(kc),
};
