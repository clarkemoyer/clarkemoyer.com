# Conversion events (GA4 via GTM)

The site pushes conversion events to the GTM `dataLayer` from
`src/components/ConversionTracker.tsx` (logic in `src/lib/analytics.ts`).
A push happens **only** when the visitor has saved cookie consent with
analytics enabled. Visitors who decline, or who have not answered the banner,
send nothing.

The code alone does not reach GA4. GTM (`GTM-5JL6TDQW`) needs one trigger and
one tag, described below, before the events show up in GA4 (`G-C2Q1HC0GVQ`).

## Events

| Event | Fires when someone clicks | Parameters | Mark as key event? |
| --- | --- | --- | --- |
| `walk_and_talk_booking_click` | A Microsoft Bookings link (`outlook.office.com/bookwithme/...`) on any page | `booking_type` (meeting type id, or `booking_page`), `link_url` (always `https://outlook.office.com/bookwithme/`), `link_text`, `page_path` | **Yes.** Primary conversion. |
| `contact_click` | `mailto:`, `sms:`, `tel:` links, or Clarke's LinkedIn profile | `contact_method` (`mailto`, `sms`, `tel`, `linkedin`), `link_url` and `link_text` (for mailto/sms/tel both are just the method name), `page_path` | **Yes.** Secondary lead. |
| `affiliate_click` | Any Amazon link | `affiliate_network` (`amazon`), `affiliate_tag`, `asin` (when the link has one), `link_url`, `page_path` | **Yes**, if you want affiliate clicks in the key-event report. Revenue itself stays in Amazon Associates. |
| `referral_click` | Outbound links for the WGU (`wgu.edu`) or Penn State ARL (`psu.wd1.myworkdayjobs.com`, `arl.army.mil`) programs | `referral_program` (`wgu`, `psu_arl`), `link_url`, `page_path` | Optional. Low volume, so a key event makes it easy to see. |
| `walk_and_talk_cta_click` | An internal link to `/walk-and-talk/` or `/contact/` from another page | `cta_destination`, `link_url`, `link_text`, `page_path` | **No.** This is a funnel step, useful for seeing which pages send people to the booking page. |

Privacy notes: the Bookings URL contains a mailbox address and `mailto:`/`sms:`
links contain an address or phone number, and the visible text of those links
often repeats it. For mailto/sms/tel clicks the tracker replaces both `link_url`
and `link_text` with the method name, so GA4 never receives contact details.

All events are click intent, not completed bookings. Microsoft Bookings runs
on Microsoft's domain, so a finished booking can't be measured on this site.
Compare `walk_and_talk_booking_click` counts against actual Bookings
confirmations to estimate the completion rate.

## GTM setup (one time)

1. **Variables → New → Data Layer Variable**, one per parameter:
   `booking_type`, `contact_method`, `affiliate_network`, `affiliate_tag`,
   `asin`, `referral_program`, `cta_destination`, `link_text`, `link_url`,
   `page_path`. Name each `DLV - <param>`.
2. **Triggers → New → Custom Event**
   - Name: `CE - Conversion events`
   - Event name: `^(walk_and_talk_booking_click|contact_click|affiliate_click|referral_click|walk_and_talk_cta_click)$`
   - Check **Use regex matching**. Fires on all custom events.
3. **Tags → New → Google Analytics: GA4 Event**
   - Measurement ID: `G-C2Q1HC0GVQ` (or the existing Google tag)
   - Event name: `{{Event}}`
   - Event parameters: add each parameter above mapped to its `DLV - ...` variable.
   - Trigger: `CE - Conversion events`.
   - If the existing GA4 configuration tag uses a consent condition, add the
     same condition here. The site already withholds these pushes without
     consent, so this is a second safeguard.
4. **Preview** in Tag Assistant: accept analytics on the cookie banner, click
   a Bookings link on `/walk-and-talk/`, and confirm the tag fires. Decline
   analytics and confirm nothing fires.
5. **Submit / Publish** the container.

## GA4 setup (one time)

1. **Admin → Data display → Custom definitions → Create custom dimension**
   (event scope) for `booking_type`, `contact_method`, `affiliate_network`,
   `asin`, `referral_program` and `cta_destination`. Without this, the
   parameters are collected but can't be used in reports.
2. **Admin → Data display → Events**: after the first events arrive (up to 24
   hours), turn on **Mark as key event** for `walk_and_talk_booking_click` and
   `contact_click`, plus `affiliate_click` and `referral_click` if wanted.
   You can also create them ahead of time under **Key events → New key event**
   with the exact event name.
3. Optional: in **Admin → Key events**, give `walk_and_talk_booking_click` a
   default value (for example an expected value per booking click) so GA4
   reports estimated revenue for it.

## Reading the results

- **Reports → Engagement → Events**, filtered to the names above, shows volume.
- **Explore → Free form** with `page_path` (or Landing page) as rows and key
  events as values shows which pages produce bookings and affiliate clicks.
- **Explore → Funnel**: `page_view` of `/walk-and-talk/` →
  `walk_and_talk_booking_click` shows booking-page conversion.
