import { StrictBuilder } from "builder-pattern";
import { Honey } from "@/src/types/payloadcms";
import { Services } from "@/src//types/services";
import honeyAPI from "@/src/api";
import { HoneyAPI, PayloadAPIResponse } from "@/src/types/api";


export function honeyAPIBuilder() {
    return StrictBuilder<HoneyAPI>()
    .getHoneys(honeyAPI.getHoneys)
    .getHoney(honeyAPI.getHoney)
}

export function serviceInjectionBuilder() {
    return StrictBuilder<Services>()
    .honeyAPI(honeyAPIBuilder().build())
}

export function stubHoneyBuilder() {
    return StrictBuilder<Honey>()
    .id(1)
    .title("Miel_1")
    .slug("miel_1")
    .createdAt("2024-12-12T01:06:26.114Z")
    .updatedAt("2024-12-12T01:06:26.114Z")
    .description(null)
    .flowers([])
}

export function stubPayloadcmsBuilder<T>() {
    return StrictBuilder<PayloadAPIResponse<T>>()
    .docs([])
    .totalDocs(10)
    .limit(10)
    .totalPages(1)
    .page(1)
    .pagingCounter(1)
    .hasPrevPage(false)
    .hasNextPage(false)
    .prevPage(null)
    .nextPage(null)
}