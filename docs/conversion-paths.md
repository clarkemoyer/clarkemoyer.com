# Conversion paths

This site serves several distinct audiences. The homepage remains a neutral directory: it labels each audience clearly without choosing a new dominant audience. Each landing page then presents one contextual primary action and quieter support actions.

## Funnel and measurable success

| Audience                      | Entry and discovery                                     | Landing page                                | Primary action                                                      | Success event                                                                                                   |
| ----------------------------- | ------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Professional / consulting     | Homepage hero, Contact, Who I Am                        | `/walk-and-talk/` or `/contact/`            | Open Microsoft Bookings                                             | `conversion_click` with `conversion_path=professional_consulting` and `conversion_action=open_booking`          |
| PSU-ARL candidates            | Homepage audience card, navigation                      | `/psu-arl-referral/`                        | Open Clarke's LinkedIn profile to begin the stated referral process | `conversion_click` with `conversion_path=psu_arl_referral` and `conversion_action=open_linkedin_referral`       |
| Prospective WGU students      | Homepage audience card, certification-guide cross-links | `/wgu-referral/`                            | Message Clarke on LinkedIn about the existing referral instructions | `conversion_click` with `conversion_path=wgu_referral` and `conversion_action=open_linkedin_referral`           |
| Certification readers         | Search, homepage audience card, navigation              | `/certification/`, then an individual guide | Open an individual certification guide                              | `conversion_click` with `conversion_path=certification_reader` and `conversion_action=open_certification_guide` |
| Nonprofits / Free For Charity | Homepage audience card, Contact, Walk and Talk          | `/charity/`                                 | Visit FreeForCharity.org                                            | `conversion_click` with `conversion_path=free_for_charity` and `conversion_action=visit_free_for_charity`       |

These are intent events, not proof that a third-party booking, application, enrollment, or request was completed. The site does not claim visibility into completion on Microsoft Bookings, LinkedIn, Workday, WGU, or FreeForCharity.org.

## Event contract

All conversion interactions use one stable event name:

```text
event: conversion_click
conversion_path: professional_consulting | psu_arl_referral | wgu_referral | certification_reader | free_for_charity
conversion_action: lower_snake_case action
conversion_location: stable page/section identifier
conversion_destination: normalized external hostname or internal path/hash
```

Do not add names, email addresses, phone numbers, form values, link text, query-string campaign identifiers, or other visitor-provided data to these events. External destinations are reduced to a hostname; internal destinations retain only the path and hash. `mailto:`, `sms:`, and `tel:` destinations retain only the scheme.

Events are pushed to the existing Google Tag Manager `dataLayer` only when the stored `cookie-consent` preference has `analytics: true`. Declining analytics or not making a choice emits no conversion event. No additional analytics vendor, form, CRM, cookie, or storage key is introduced.

## CTA and content rules

- Keep homepage audience paths visually balanced until a business owner explicitly chooses a primary audience.
- Use destination-specific labels: for example, “Connect on LinkedIn,” not “Contact Clarke,” when the destination is LinkedIn.
- Keep the primary action aligned with the instructions already present on the landing page. Do not invent referral forms or imply guaranteed referrals, admission, employment, booking, or nonprofit eligibility.
- External actions open in a new tab with `rel="noopener noreferrer"`. Interactive controls retain visible keyboard focus and at least a 48px target height in conversion panels.
- Individual certification guides return readers to `/certification/`; the index supplies the tracked guide-selection success event and a contextual Walk and Talk support path.

## Audit summary (2026-09-12)

The source and production pages exposed the same key friction: a generic three-link CTA block appeared on WGU and Free For Charity pages and included an unrelated ARL jobs destination. The WGU page had referral instructions but its displayed email value was not usable, so the existing LinkedIn route is now the primary way to resolve the referral details. The Contact hero said there were two routes while rendering three. The homepage used “Contact Clarke” for a LinkedIn destination and repeated a large WGU promotion after the balanced audience grid.

This tranche removes those inconsistencies, retains all existing external destinations and claims, adds contextual actions, and adds consent-gated measurement. A future change to make one homepage audience dominant remains a strategic decision rather than an implementation assumption.
