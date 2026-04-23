/**
 * Global type declarations for third-party scripts loaded via Django templates.
 */

/**
 * Segment Analytics.js API
 * Loaded via templates/base.html
 * @see https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
 */
interface SegmentAnalytics {
  /**
   * Track an event with optional properties.
   * @param event - The name of the event (e.g. Button Clicked)
   * @param properties - Optional properties associated with the event
   */
  track(event: string, properties?: Record<string, unknown>): void

  /**
   * Identify a user with optional traits.
   * @param userId - Unique identifier for the user
   * @param traits - Optional user traits
   */
  identify(userId: string, traits?: Record<string, unknown>): void

  /**
   * Record a page view with optional category, name, and properties.
   */
  page(
    category?: string,
    name?: string,
    properties?: Record<string, unknown>
  ): void

  /**
   * Run callback when analytics library is ready.
   */
  ready(callback: () => void): void
}

type GtagParams = Record<string, string | number | boolean | undefined>

type GtagCommand =
  | 'config'
  | 'event'
  | 'js'
  | 'set'
  | 'consent'

type Gtag = (
  command: GtagCommand,
  targetOrValue: string | Date,
  params?: GtagParams
) => void

type OperarioAITrackCtaPayload = {
  cta_id: string
  intent?: string
  destination?: string
  cta_label?: string
  source_page?: string
  page_slug?: string
  placement?: string
  cta_type?: string
}

type OperarioAITrackCta = (
  payload: OperarioAITrackCtaPayload
) => void

declare global {
  interface Window {
    analytics?: SegmentAnalytics
    gtag?: Gtag
    operarioTrackCta?: OperarioAITrackCta
  }
}

export {}