export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1519415994601443468/ahJ-VrswRBo-Xw0gsT4sq-CfszUHP6cHn_4DOImwvW1fCQUuewOiXbmOEgMgiBkvEm6x";

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });

  return res.status(response.status).end();
}
