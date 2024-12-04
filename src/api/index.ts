import { Honey } from "@/src/types/payloadcms"
import { PayloadAPIResponse } from "@/src/types/api"

const apiUrl = process.env.API_URL ?? ""

export async function getHoneys (): Promise<PayloadAPIResponse<Honey>> {
  const url =`${apiUrl}/honeys`
  const data = await fetch(url)
  return await data.json()
}

export async function getHoney (id: string): Promise<Honey> {
  const url =`${apiUrl}/honeys/${id}?depth=1`
  const data = await fetch(url)
  return await data.json()
}