# Cloudflare canonical redirect rules

Use these edge redirects if/when Cloudflare is placed in front of `clarkemoyer.com` again. The Next.js static export keeps these aliases usable with canonical/noindex metadata and browser-side replacement, but GitHub Pages cannot emit true HTTP 301/308 redirects for static-exported app routes. Cloudflare Bulk Redirects or Redirect Rules are the correct place for permanent SEO consolidation at the HTTP edge.

## Canonical URL decision

The original short WordPress-era URLs are canonical because they are easier to say, share, and remember.

## Redirect map

| Source alias | Canonical target |
| --- | --- |
| `https://clarkemoyer.com/about/` | `https://clarkemoyer.com/who-i-am/` |
| `https://clarkemoyer.com/certification-guides/` | `https://clarkemoyer.com/certification/` |
| `https://clarkemoyer.com/free-for-charity/` | `https://clarkemoyer.com/charity/` |
| `https://clarkemoyer.com/western-governors-university-bs-it/` | `https://clarkemoyer.com/education/` |
| `https://clarkemoyer.com/it-project-management-resume-of-clarke-moyer/` | `https://clarkemoyer.com/resume/` |
| `https://clarkemoyer.com/psu-arl-referral-program/` | `https://clarkemoyer.com/psu-arl-referral/` |
| `https://clarkemoyer.com/wgu-referral-program/` | `https://clarkemoyer.com/wgu-referral/` |

## Recommended Cloudflare behavior

- Status code: `301` or `308` permanent redirect.
- Preserve query string: yes.
- Matching: exact path, trailing slash variant included if Cloudflare does not normalize it.
- Scope: `clarkemoyer.com` and `www.clarkemoyer.com` if both are proxied through Cloudflare.
- Do not redirect canonical pages back to aliases.

## Bulk Redirect CSV

```csv
source_url,target_url,status_code,preserve_query_string
https://clarkemoyer.com/about/,https://clarkemoyer.com/who-i-am/,301,true
https://clarkemoyer.com/certification-guides/,https://clarkemoyer.com/certification/,301,true
https://clarkemoyer.com/free-for-charity/,https://clarkemoyer.com/charity/,301,true
https://clarkemoyer.com/western-governors-university-bs-it/,https://clarkemoyer.com/education/,301,true
https://clarkemoyer.com/it-project-management-resume-of-clarke-moyer/,https://clarkemoyer.com/resume/,301,true
https://clarkemoyer.com/psu-arl-referral-program/,https://clarkemoyer.com/psu-arl-referral/,301,true
https://clarkemoyer.com/wgu-referral-program/,https://clarkemoyer.com/wgu-referral/,301,true
```
