export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1519184081114370078/pFWxcOwajLP5mlKilL1sGEAEDBdKuHEvQdRwG6pN_RP3gsrurcmG28IOshlTl2o_klxW";

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });

  return res.status(response.status).end();
}
