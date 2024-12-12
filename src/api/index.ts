import { HoneyAPI } from "@/src/types/api"

const apiUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api`

async function getHoneys() {
  const url =`${apiUrl}/honeys`
  const response = await fetch(url)
  return await response.json()
}

async function getHoney(id: string, isDraft?: boolean) {
  const url =`${apiUrl}/honeys/${id}?isDraft=${isDraft}`
  const response = await fetch(url)
  return await response.json()
}

const honeyAPI: HoneyAPI = {
  getHoneys,
  getHoney,
};

export default honeyAPI;