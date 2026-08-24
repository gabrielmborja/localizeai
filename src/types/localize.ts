export type ObjectiveType = "sales" | "leads" | "awareness" | "retention";
export type ChannelType = "instagram" | "email" | "google_ads" | "landing_page" | "whatsapp";
export type SourceLanguageType = "pt-BR" | "en-US" | "es-ES";
export type MarketType = "BR" | "US" | "MX" | "DE";
export type ToneType = "professional" | "persuasive" | "casual" | "technical";

export interface LocalizeRequest {
  campaignName: string;
  product?: string;
  audience?: string;
  objective?: ObjectiveType;
  channel?: ChannelType;
  offer?: string;
  content: string;
  sourceLanguage: SourceLanguageType;
  markets: MarketType[];
  tone: ToneType;
  keywords?: string[];
}

export interface AdaptationNotes {
  cultural: string;
  currencyAndSeasonal: string;
  toneAndStyle: string;
}

export interface LocalizedItem {
  market: MarketType;
  country: string;
  flag: string;
  language: string;
  localizedTitle: string;
  localizedContent: string;
  localizedCta: string;
  keywords: string[];
  adaptationNotes: AdaptationNotes;
  needsHumanReview: boolean;
}

export interface LocalizeResponse {
  success: boolean;
  campaignName: string;
  results: LocalizedItem[];
}

export interface LocalizeErrorResponse {
  error: string;
  missingFields?: string[];
}
