export type KeywordSetKey = 'home' | 'locations' | 'contact';

/**
 * Centralized keyword sets for PageHead usage.
 * Keep these human-readable and avoid stuffing; pages can extend as needed.
 */
export const keywordSets: Record<KeywordSetKey, string> = {
  home:
    'macaw by stories bangalore, rooftop bar bangalore, rooftop dining bangalore, rooftop restaurant bangalore, fine dining restaurant bangalore, luxury restaurant bangalore, cocktail bar bangalore, nightlife bangalore, live music restaurant bangalore, date night restaurant bangalore, best bars in bangalore',
  locations:
    'macaw by stories bangalore, macaw aecs layout, macaw restaurant bangalore, restaurants in aecs layout bangalore, restaurants near aecs layout, rooftop bar aecs layout bangalore, rooftop bar bangalore, fine dining near whitefield bangalore, luxury restaurant bangalore, rooftop bar near whitefield bangalore',
  contact:
    'book table restaurant bangalore, macaw by stories bangalore, macaw aecs layout, macaw restaurant bangalore, rooftop bar bangalore, fine dining near whitefield bangalore, private dining bangalore, corporate party venue bangalore, date night restaurant bangalore, restaurants near me, fine dining near me',
};

