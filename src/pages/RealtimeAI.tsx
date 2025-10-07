import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RealtimeAI = () => {
  const navigate = useNavigate();

  const handleDownload = (type: string) => {
    if (type === '1-pager') {
      window.open('/Real-Time_AI_Toolkit.pdf', '_blank');
    } else if (type === 'worksheet') {
      window.open('/Real-Time_AI_Optimization_Worksheet.pdf', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Real-Time AI Toolkit for FinTech Founders
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Practical patterns to ship faster decisions with smaller bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
            <Button onClick={() => handleDownload('1-pager')} className="gap-2 w-full sm:w-auto">
              <Download className="h-4 w-4" />
              Download 1-Pager PDF
            </Button>
            <Button variant="outline" onClick={() => window.open('https://colab.research.google.com/drive/1BC9yA1GZ4g_I1-40DhI2UCJuBqQK8k1m#scrollTo=1c84a90e', '_blank')} className="gap-2 w-full sm:w-auto">
              <ExternalLink className="h-4 w-4" />
              Open Colab Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 - The 3 Golden Levers */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">The 3 Golden Levers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Model Choice</CardTitle>
              <CardDescription>
                Prefer small, task-specific. Use big LLM only on the 10–20% hard cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Start with tabular models (LightGBM/XGBoost) for risk, Distil* for text; add a rules layer for obvious wins. Route tough cases to a bigger model asynchronously.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infra Tricks</CardTitle>
              <CardDescription>
                Cache aggressively, batch opportunistically, retrieve approximately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Cache repeat decisions and feature vectors (Redis). Batch requests when possible. Use FAISS/Pinecone for ANN instead of brute-force scans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Decision Design</CardTitle>
              <CardDescription>
                Decide fast when confident; defer when not.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Set thresholds. If p &lt; τ, switch to fallback: heuristics → human review → delayed decision. Always log features, thresholds, and reasons.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2 - Copy-Paste Snippets */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-muted/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Copy-Paste Snippets</h2>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="fastapi" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
              <TabsTrigger value="fastapi">FastAPI + Redis</TabsTrigger>
              <TabsTrigger value="faiss">ANN with FAISS</TabsTrigger>
              <TabsTrigger value="threshold">Decision Threshold</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fastapi" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">FastAPI + Redis Cache</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`from fastapi import FastAPI
import redis, json
app = FastAPI()
r = redis.Redis(host="localhost", port=6379, decode_responses=True)

@app.get("/bnpl_score")
def score(user_id: str):
    cache_key = f"bnpl:{user_id}"
    if (hit := r.get(cache_key)):
        return json.loads(hit) | {"source": "cache"}
    features = get_features(user_id)          # your feature fetch
    p = model_predict(features)               # LightGBM/DistilBERT etc.
    decision = "approve" if p > 0.8 else "review" if p > 0.6 else "decline"
    payload = {"p": p, "decision": decision}
    r.setex(cache_key, 600, json.dumps(payload))  # 10-minute TTL
    return payload | {"source": "live"}`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faiss" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">ANN with FAISS</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`import faiss, numpy as np
index = faiss.IndexFlatIP(768)               # inner product
index.add(item_embeddings)                   # (N, 768) float32
D, I = index.search(query_embedding, 10)     # top-10 in ~ms`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="threshold" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Decision Threshold Ladder</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`if p >= 0.80 -> auto_approve (log: reason="high_conf")
elif 0.60 <= p < 0.80 -> manual_review (SLA: 5m, notify ops)
else -> auto_decline (reason="risk_high")`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 3 - FinTech Quick Patterns */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">FinTech Quick Patterns</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Jeddah Cohort</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="salamtech">
              <AccordionTrigger>SalamTech (Agri-FinTech)</AccordionTrigger>
              <AccordionContent>
                • Model: lightweight recsys for farmer-investor pairing • Infra: cache top matches • Decision: show only above confidence threshold.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="gersh">
              <AccordionTrigger>Gersh (BNPL)</AccordionTrigger>
              <AccordionContent>
                • Model: fast tabular (LightGBM) for credit • Infra: Redis cache repeat users • Decision: p&lt;0.75 → manual review.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="qurudi">
              <AccordionTrigger>Qurudi (Debt Management)</AccordionTrigger>
              <AccordionContent>
                • Model: small classifier for repayment risk • Infra: ANN retrieval for debt history • Decision: rules for hardship/edge cases.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tphish">
              <AccordionTrigger>TPhish (Cybersecurity)</AccordionTrigger>
              <AccordionContent>
                • Model: distilled email/text classifier at edge • Infra: batch scoring on spikes • Decision: escalate to LLM only when uncertain.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="halala">
              <AccordionTrigger>Halala (EndowmentTech)</AccordionTrigger>
              <AccordionContent>
                • Model: donor intent classifier • Infra: cache campaign recommendations • Decision: explain reasons for prompts.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="kayyel">
              <AccordionTrigger>Kayyel (Loyalty Data)</AccordionTrigger>
              <AccordionContent>
                • Model: lightweight event models for purchase signals • Infra: streaming + ANN lookups • Decision: throttle low-confidence nudges.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sariat">
              <AccordionTrigger>Sariat (Rent Financing)</AccordionTrigger>
              <AccordionContent>
                • Model: tabular risk + rules • Infra: 30-minute score cache • Decision: staged approval when uncertain.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="adalah">
              <AccordionTrigger>Adalah Chain (Compliance Tech)</AccordionTrigger>
              <AccordionContent>
                • Model: Shariah screening patterns • Infra: rules first, AI second • Decision: full audit log in &lt;1s.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="metaworks">
              <AccordionTrigger>Meta Works (RegTech)</AccordionTrigger>
              <AccordionContent>
                • Model: policy/compliance classifiers • Infra: cache prior verdicts • Decision: route gray zones to human review.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="half">
              <AccordionTrigger>Half (PropTech)</AccordionTrigger>
              <AccordionContent>
                • Model: dynamic pricing (small tabular) • Infra: periodic recompute + hot cache • Decision: freeze price if confidence drops.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="qunfin">
              <AccordionTrigger>Qunfin (AI Trading)</AccordionTrigger>
              <AccordionContent>
                • Model: fast signal models • Infra: precompute features; ANN for pattern search • Decision: alerts target p95 &lt;200ms.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sale">
              <AccordionTrigger>SALE (Crowdfunding)</AccordionTrigger>
              <AccordionContent>
                • Model: clustering/recs for project–backer matching • Infra: cache campaign embeddings • Decision: threshold before surfacing offers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="text-xl font-semibold mt-8 mb-4">Riyadh Cohort</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="markaba">
              <AccordionTrigger>Markaba (AutoFinance Brokerage)</AccordionTrigger>
              <AccordionContent>
                • Model: credit scoring + car valuation regressors • Infra: batch scoring, cache dealer offers • Decision: instant pre-approval vs manual review.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="finflow">
              <AccordionTrigger>FinFlow (SME Finance Platform)</AccordionTrigger>
              <AccordionContent>
                • Model: risk scoring using transaction embeddings • Infra: batch nightly reconciliations • Decision: loan thresholds with manual override.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rifd">
              <AccordionTrigger>RiFD (Receivables Securitization)</AccordionTrigger>
              <AccordionContent>
                • Model: default probability models on invoices • Infra: index receivables in FAISS-like vector store • Decision: high-confidence bundles auto-approve, edge cases flagged.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feddi">
              <AccordionTrigger>Feddi (Closed-Loop Loyalty Wallets)</AccordionTrigger>
              <AccordionContent>
                • Model: recommendation engine for offers • Infra: cache top-N personalized deals • Decision: boost merchants with high redemption rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="yasmina">
              <AccordionTrigger>Yasmina (Embedded Insurance)</AccordionTrigger>
              <AccordionContent>
                • Model: claim fraud detection (lightweight tree models) • Infra: rules engine + model ensemble • Decision: fast-approve &lt;70% risk, manual check otherwise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feelix">
              <AccordionTrigger>Feelix AI (Customer Engagement)</AccordionTrigger>
              <AccordionContent>
                • Model: intent classification + sentiment analysis • Infra: stream processing of chats • Decision: route urgent cases to human instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="labstation">
              <AccordionTrigger>LabStation (Healthcare Invoice Factoring)</AccordionTrigger>
              <AccordionContent>
                • Model: anomaly detection on invoice amounts • Infra: OCR + structured embeddings • Decision: flag outliers for manual verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bac">
              <AccordionTrigger>Bac (Cashback Platform)</AccordionTrigger>
              <AccordionContent>
                • Model: transaction classification for cashback eligibility • Infra: cache merchant categories • Decision: instant cashback on known merchants, review on new ones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="khazeena">
              <AccordionTrigger>Khazeena (Treasury Management)</AccordionTrigger>
              <AccordionContent>
                • Model: forecasting cash inflows/outflows (ARIMA/Prophet baseline) • Infra: daily batch forecasts + alerts • Decision: trigger buffer top-up alerts if &lt;X days liquidity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="parameter">
              <AccordionTrigger>Parameter (Smart Compliance)</AccordionTrigger>
              <AccordionContent>
                • Model: rule-based + anomaly detection on transactions • Infra: stream monitoring + audit logs • Decision: auto-approve clean, escalate suspicious.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="khutwah">
              <AccordionTrigger>Khutwah (Children's Wallet)</AccordionTrigger>
              <AccordionContent>
                • Model: spending pattern classifier (parental controls) • Infra: lightweight checks at transaction time • Decision: block risky categories, notify parents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="modrik">
              <AccordionTrigger>Modrik (OCR Accounting Integration)</AccordionTrigger>
              <AccordionContent>
                • Model: OCR + entity extraction (DocTR/Tesseract + classifier) • Infra: batch ingestion of receipts • Decision: high-confidence auto-posting, else manual check.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sarj">
              <AccordionTrigger>Sarj (Voice Automation for Banks)</AccordionTrigger>
              <AccordionContent>
                • Model: speech-to-intent (Whisper-small or DistilBERT classifier) • Infra: real-time streaming ASR • Decision: fallback to human agent if confidence &lt;80%.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eshtarek">
              <AccordionTrigger>Eshtarek (Subscription Management)</AccordionTrigger>
              <AccordionContent>
                • Model: churn prediction on subscription data • Infra: monthly batch risk scoring • Decision: auto-trigger retention offers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="athek">
              <AccordionTrigger>Athek (Digital Receipts)</AccordionTrigger>
              <AccordionContent>
                • Model: OCR + structured parsing • Infra: deduplication cache • Decision: merge with transaction only if match &gt;95%.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="adala">
              <AccordionTrigger>Adala AI (Legal Compliance)</AccordionTrigger>
              <AccordionContent>
                • Model: contract clause classification (MiniLM/BERT) • Infra: doc embeddings + FAISS retrieval • Decision: flag high-risk clauses to legal team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="letsgosky">
              <AccordionTrigger>LetsGoSky (AI Assistants for Ops)</AccordionTrigger>
              <AccordionContent>
                • Model: workflow intent recognition • Infra: integrate with ops APIs • Decision: auto-complete routine ops, escalate exceptions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bitmal">
              <AccordionTrigger>BitMal (Social FinTech)</AccordionTrigger>
              <AccordionContent>
                • Model: fraud detection + donor clustering • Infra: real-time scoring of donations • Decision: auto-greenlight small gifts, hold suspicious.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="malstream">
              <AccordionTrigger>Malstream (Real Estate Cashflow)</AccordionTrigger>
              <AccordionContent>
                • Model: rent payment forecasting (Prophet/XGBoost) • Infra: daily batch forecasts • Decision: trigger alerts on likely late payments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cepro">
              <AccordionTrigger>Cepro (Brand Protection)</AccordionTrigger>
              <AccordionContent>
                • Model: image/text similarity for counterfeit detection • Infra: vector search for logos/keywords • Decision: flag matches above 85% confidence.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-sm text-muted-foreground mt-6">
            Startups per Tech Champions 5 (Jeddah) cohort flyer.
          </p>
        </div>
      </section>

      {/* Section 4 - Colab Demo */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Interactive Demo</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Colab: Latency vs Accuracy Playground</CardTitle>
              <CardDescription className="text-sm">
                Explore real-time performance tradeoffs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-left space-y-2 text-sm px-4">
                <li>• Distil model vs large LLM timing on small text task</li>
                <li>• Effect of batching (1, 8, 32)</li>
                <li>• Simple Redis-like in-notebook cache simulation</li>
              </ul>
              <Button onClick={() => window.open('https://colab.research.google.com/drive/1BC9yA1GZ4g_I1-40DhI2UCJuBqQK8k1m#scrollTo=1c84a90e', '_blank')} className="gap-2 w-full sm:w-auto">
                <ExternalLink className="h-4 w-4" />
                Open Colab Notebook
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5 - One-Pager & Worksheet */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">One-Pager</CardTitle>
                <CardDescription className="text-sm">Quick reference guide</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('1-pager')} className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Worksheet</CardTitle>
                <CardDescription className="text-sm">Decision • Current p95 • Bottleneck • Lever(s) • Next 1-week step • Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => handleDownload('worksheet')} className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Worksheet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6 - Contact / Credits */}
      <section className="container mx-auto px-4 py-12 md:py-16 border-t">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground text-sm sm:text-base">
            This page is maintained for Tech Champions 5 Jeddah cohort.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            I'll refresh this page for two weeks post-talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
            <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/adeen-atif', '_blank')} className="w-full sm:w-auto">
              LinkedIn
            </Button>
            {/* <Button variant="outline" onClick={() => window.open('mailto:adeen@example.com', '_blank')} className="w-full sm:w-auto">
              Email
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealtimeAI;
