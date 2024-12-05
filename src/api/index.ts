import { Honey } from "@/src/types/payloadcms"
import { PayloadAPIResponse } from "@/src/types/api"

const apiUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api`

export async function getHoneys (): Promise<PayloadAPIResponse<Honey>> {
  const url =`${apiUrl}/honeys`
  const response = await fetch(url)
  return await response.json()
}

export async function getHoney (id: string, isDraft?: boolean): Promise<Honey> {
  const url =`${apiUrl}/honeys/${id}?isDraft=${isDraft}`
  const response = await fetch(url)
  return await response.json()
}