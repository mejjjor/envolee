import { Honey } from "@/src/types/payloadcms";

export interface PayloadAPIResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface HoneyAPI {
  getHoneys: () => Promise<PayloadAPIResponse<Honey>>;
  getHoney(id: string, isDraft?: boolean): Promise<Honey>;
}
