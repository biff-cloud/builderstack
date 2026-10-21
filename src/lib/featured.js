// Paid Featured slots from src/data/featured.json: {"slug","start":"YYYY-MM-DD","end":"YYYY-MM-DD","guide"?:"rpc-for-evm"}.
// An entry is active while start <= build date (UTC) < end.
import tools from "../data/tools.json"; import featured from "../data/featured.json";
export const GUIDES=["oracles","smart-contract-frameworks","rpc-for-evm","rpc-for-solana","indexer-for-evm","crypto-market-data-apis","smart-contract-security-tools","block-explorers","crypto-payment-gateways","wallet-screening","tokenized-stock-trackers","crypto-futures-market-monitors"];
export function activeFeatured({category,guide}={}){
  const today=new Date().toISOString().slice(0,10);
  return featured.filter(f=>f.start<=today&&today<f.end).map(f=>{const t=tools.find(x=>x.slug===f.slug);if(!t)throw new Error(`featured.json: unknown slug "${f.slug}"`);if(f.guide&&!GUIDES.includes(f.guide))throw new Error(`featured.json: unknown guide "${f.guide}"`);return {...t,guide:f.guide};}).filter(t=>guide?t.guide===guide:(!category||t.category===category));
}
