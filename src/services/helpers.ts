import { Honey } from "@/src/types/payloadcms";
import {
  honeyAPIBuilder,
  stubPayloadcmsBuilder,
} from "@/src/services/builders";

export function getStubHoneysAPI(docs: Honey[]) {
  return honeyAPIBuilder()
    .getHoneys(async () => stubPayloadcmsBuilder<Honey>().docs(docs).build())
    .build();
}
