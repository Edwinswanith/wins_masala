# PRD: Wins Chilli Powder Parallax Website

Version: 1.0  
Date: 2026-03-12  
Owner: Edwin Swanith / Bizzzup  
Brand: **WINS Chilli Powder**  
Tagline direction: **Since 1996** / **Tamil-rooted everyday spice trust**

---

## 1. Product Summary

Build a **single-page parallax storytelling website** for **WINS Chilli Powder** that feels premium, Tamil-rooted, and conversion-focused.

The website must open with a **scroll-driven hero transition video** placed in the **`video/` folder**, not an image sequence. The top section should behave like a cinematic story panel: as the user scrolls, the video transition moves from the clean studio product frame to the final powder-impact product frame. The **product remains right-weighted in the final composition**, leaving clean negative space on the **left side for headline, supporting copy, and CTA**.

This site is not a generic e-commerce template. It must sell trust, appetite, Tamil cultural relevance, and product confidence.

---

## 2. Research Summary and Strategic Direction

### 2.1 What the market tells us

Chilli powder in India is a **trust-first commodity category**. Buyers respond quickly to:
- familiar kitchen relevance
- visible hygiene and quality cues
- dependable heat and color
- regional authenticity
- fast confidence, not excessive storytelling

Major incumbent brands such as Aachi and Sakthi position chilli powder around **daily cooking utility, color, flavor, consistency, hygiene, and trust**, not abstract lifestyle branding. WINS should therefore position itself as:

> **Tamil household heritage + strong visual appetite + modern hygiene confidence**

### 2.2 What makes the website worth doing

A parallax website is justified here only if it does two jobs well:
1. Creates a **premium first impression** for the brand.
2. Converts that impression into **clarity, trust, and action**.

If the site becomes motion-heavy without clarity, it fails.

### 2.3 Brand positioning for WINS

Recommended brand position:
- **Not luxury gourmet**
- **Not cheap mass-market noise**
- **Mass-premium Tamil-rooted kitchen essential**

Target perception:
- trusted
- bold
- rooted
- appetizing
- hygienic
- repeat-purchase worthy

### 2.4 Cultural and story angle

Chilli peppers are native to the Americas and reached India through Portuguese trade in the 16th century, later becoming central to Indian cooking. This makes a brief “from global spice to Tamil kitchen essential” story historically valid. Use this as a **short supporting narrative**, not a history lecture.

### 2.5 Benefit messaging direction

Do not overclaim health effects.

Safe messaging directions:
- adds bold heat
- adds rich red color
- lifts aroma and flavor depth
- useful across gravies, fries, marinades, chutneys, and everyday cooking

Allowed caution:
- chili peppers contain capsaicin and are widely studied, but evidence for broad health outcomes is mixed. Therefore, this site should **avoid medical or disease-related claims**.

### 2.6 Important claim restrictions

Do **not** use claims like:
- 100% pure
- best ever
- healthiest
- cures anything
- guaranteed medical benefits

If purity or sourcing claims are used later, they must be validated by actual sourcing, testing, and compliance documents.

---

## 3. Objectives

### 3.1 Business goals
- Establish WINS as a credible spice brand.
- Create a visually memorable hero experience.
- Drive first-order intent.
- Support wholesale and retail enquiries.
- Build a scalable design pattern for future spice SKUs.

### 3.2 User goals
Visitors should quickly understand:
- what the product is
- why it is different
- why it is relevant to Tamil cooking
- whether it looks trustworthy and hygienic
- how to buy or enquire

### 3.3 Success criteria
Primary:
- CTA click-through rate
- add-to-cart or enquiry conversion rate
- scroll completion past hero
- time on page

Secondary:
- testimonial engagement
- FAQ interactions
- product detail expansion clicks
- repeat visitors

---

## 4. Audience

### Primary audience
- Tamil Nadu households
- home cooks aged roughly 24 to 55
- families who buy routine spice essentials
- buyers who care about taste, reliability, and familiarity

### Secondary audience
- Tamil diaspora buyers
- kirana/distributor/retail partners
- small food businesses, cloud kitchens, caterers

### User mindset
These users are not looking for experimental design. They want to feel:
- this looks real
- this looks tasty
- this looks clean
- this looks like something I can trust in my kitchen

---

## 5. Website Type and Scope

### In scope
- single-page parallax brand landing page
- desktop-first experience with responsive mobile adaptation
- scroll-driven hero video section
- content blocks for product story, benefits, trust, heritage, about, CTA, FAQ
- optional ecommerce CTA or enquiry CTA

### Out of scope for version 1
- multi-product catalog
- deep recipe blog
- distributor dashboard
- full checkout if not already available
- multilingual localization beyond planned Tamil/English copy blocks

---

## 6. Information Architecture

Single page flow:

1. **Hero parallax intro**  
2. **Trust strip / quick proof points**  
3. **What makes Wins special**  
4. **How chilli changes the dish**  
5. **A short chilli history / Tamil kitchen story**  
6. **Usage versatility / meal contexts**  
7. **Testimonials / social proof section**  
8. **About Wins**  
9. **FAQ**  
10. **Final CTA**

---

## 7. Hero Section Requirements

### 7.1 Core hero behavior
The top of the site must use the **video from the `video/` folder** as the hero transition asset.

#### Primary asset path
- `video/wins-chilli-parallax.mp4`

#### Optional future fallback assets
- poster image: `images/wins-hero-poster.webp`
- reduced motion static: `images/wins-last-frame.webp`

### 7.2 Hero layout
- hero container height: **200vh to 240vh** recommended
- sticky viewport section: **100vh**
- video/video-canvas remains pinned while scroll drives the progression
- left side reserved for text and CTA
- right side reserved for packet and powder-heavy visuals

### 7.3 Scroll behavior
- user scroll advances the hero sequence smoothly
- no sudden jumps
- no auto-play drama disconnected from scroll
- motion must feel tied to user intent
- easing must feel premium and slow
- if video scrubbing is not feasible, use segment-based playback or lightweight canvas mapping

### 7.4 Hero copy placement
Text should live on the **left side** so it stays legible when the hero ends with a right-weighted product composition.

Suggested content stack:
- Eyebrow: **Since 1996**
- Heading: **WINS Chilli Powder**
- Subheading: **Bold colour. Honest heat. Made for Tamil kitchens.**
- Supporting line: **From everyday kuzhambu to weekend fry masala, bring depth, aroma, and a red finish that feels right.**
- CTA 1: **Shop Now** or **Order Now**
- CTA 2: **Wholesale Enquiry** or **See What Makes It Special**

### 7.5 Hero visual rules
- product is always the hero
- no extra dish or food bowl in hero end frame
- final hero visual uses powder impact, red dust, dried chillies, and negative space
- background left remains readable
- overlay gradient may be used to preserve copy contrast

---

## 8. Content Sections and Requirements

### 8.1 Trust Strip
Purpose: reduce hesitation immediately after the hero.

Recommended 3 to 4 cards:
- **Tamil-rooted taste**
- **Packed for everyday kitchen use**
- **Strong colour and flavour lift**
- **Made to become a household staple**

Important: if actual hygiene/testing/process data exists later, replace generic trust text with real proof.

### 8.2 What Makes Wins Special
Section goal: answer “why this product?”

Recommended bullets:
- balanced for daily Tamil cooking
- rich visual red tone in curries and fries
- strong masala presence without looking artificial
- brand rooted in long-term kitchen familiarity

Suggested headline:
- **What makes Wins different?**

Suggested body direction:
- not overcomplicated
- not gourmet nonsense
- focused on taste, aroma, color, and trust

### 8.3 How Chilli Changes the Dish
Purpose: connect product to appetite.

Use 3 blocks:
- **Colour**: richer red appearance in gravies, fries, marinades
- **Heat**: bold but controllable depending on quantity
- **Depth**: brings masala base alive when paired with onion, garlic, tomato, and oil

Suggested headline:
- **Small spoon. Big difference.**

### 8.4 Chilli Story / History Section
Purpose: add cultural depth without bloating the page.

Suggested title:
- **From global spice to Tamil kitchen essential**

Suggested short content:
- chillies came to India through 16th-century Portuguese trade
- over time they became central to Indian and especially South Indian cooking
- today chilli powder is one of the fastest-recognized building blocks of everyday flavour

Do not turn this into a long academic timeline.

### 8.5 Uses and Meal Contexts
Purpose: show versatility.

Use a visual grid with 6 use cases:
- kuzhambu
- curry base
- fry masala
- chutney / podi support use
- marinade
- vegetarian and non-vegetarian gravies

Suggested headline:
- **Made for the dishes you actually cook**

### 8.6 Testimonials / Reviews Section
Important: do **not** fabricate customer reviews.

Because verified reviews do not exist yet in this conversation, version 1 must use one of these two approaches:

#### Option A: Placeholder structure only
- section exists in layout
- hidden in production until real reviews are collected

#### Option B: Founder promise section for launch
Use:
- **Our promise to every kitchen**
- clean sourcing standards
- consistency in taste and color
- honest packaging and clear labeling

Once real reviews exist, replace with:
- verified buyer name or initials
- city
- one-line review
- optional rating

Recommended later review data model:
- `name`
- `city`
- `rating`
- `review`
- `verifiedPurchase`
- `date`

### 8.7 About Wins
Purpose: humanize the brand.

Suggested title:
- **About Wins**

Suggested content direction:
- rooted in Tamil kitchen culture
- focused on dependable everyday spice products
- tradition-forward but visually modern
- long-term goal is to become the default spice choice for families that care about both taste and trust

If “Since 1996” is real, mention legacy confidently.
If it is not legally defensible, remove it from website and pack.

### 8.8 FAQ
Include 5 to 7 concise questions:
- What kind of dishes is Wins Chilli Powder best for?
- Is it suited for daily cooking?
- Does it focus more on colour, heat, or both?
- How should I store it after opening?
- Is it suitable for vegetarian and non-vegetarian dishes?
- Is this available for wholesale orders?
- Do you deliver in Chennai / Tamil Nadu / across India?

### 8.9 Final CTA Section
Purpose: close decisively.

Recommended headline:
- **Bring bold Tamil flavour home**

CTA versions depending on business model:
- **Buy Now**
- **Order in Chennai**
- **Get Wholesale Pricing**
- **Contact Us**

If city-targeted CTA is needed, use dynamic text:
- `Delivering across Chennai and Tamil Nadu`
- only if logistics support it

---

## 9. UX and Visual Design Direction

### 9.1 Overall tone
- cinematic
- premium
- warm
- Tamil-rooted
- appetizing
- bold, not cluttered

### 9.2 Palette
- deep chilli red
- maroon
- muted gold
- warm off-white
- dark brown / shadow black

### 9.3 Typography
- bold display serif or slab for brand-adjacent headings
- readable sans serif for body and buttons
- optional bilingual Tamil highlights if typography is well controlled

### 9.4 Composition rules
- right side = product and powder intensity
- left side = copy clarity
- negative space is intentional, not empty
- use soft gradients and dust overlays to preserve contrast

### 9.5 Tamil touch
Use subtle cues only:
- kolam-inspired line motifs
- ornamental border details
- selective Tamil copy accents
- warm cultural textures

Do not use overdecorated temple-poster styling.

---

## 10. Technical Requirements

### 10.1 Stack expectation
The PRD is implementation-agnostic, but recommended frontend approach:
- React / Next.js or similar modern frontend
- CSS or Tailwind for layout and theme
- scroll-driven animation support where available
- JS fallback where necessary

### 10.2 Video handling
Preferred:
- compressed MP4 + optional WebM
- poster image provided
- video optimized for hero section use

Recommended asset files:
- `video/wins-chilli-parallax.mp4`
- `video/wins-chilli-parallax.webm` (optional)
- `images/wins-hero-poster.webp`

### 10.3 Scroll implementation
Preferred implementation order:
1. browser-native / CSS scroll-driven animations where suitable
2. smooth JS mapping to video currentTime if necessary
3. fallback to reduced-motion static hero

### 10.4 Performance rules
- do not bind heavy work to raw scroll events without throttling or a better animation model
- preload only the critical hero asset
- lazy load below-the-fold media
- compress video aggressively without ruining brand readability
- keep hero text HTML-based, not baked into the video

### 10.5 Accessibility rules
- support `prefers-reduced-motion`
- provide a static fallback for users who disable motion
- maintain readable contrast over motion background
- ensure keyboard-accessible CTAs
- motion must not be required to understand the product

---

## 11. Content Copy Recommendations

### 11.1 Hero
**Since 1996**  
**WINS Chilli Powder**  
**Bold colour. Honest heat. Made for Tamil kitchens.**

Support copy:
> Bring depth, aroma, and a rich red finish to the dishes your home actually cooks.

### 11.2 What makes Wins special
> WINS is built for everyday cooking, not for shelf decoration. It is meant to show up where flavour matters most: gravies, fries, marinades, and masala bases that need colour, heat, and presence.

### 11.3 Chilli history short copy
> Chillies travelled to India through early global trade and quickly found a permanent place in South Indian kitchens. Today, chilli powder is not just a spice. It is one of the fastest ways to build colour, aroma, and appetite.

### 11.4 About Wins
> WINS exists to bring dependable spice character back into everyday cooking. Tamil-rooted in tone and bold in expression, the brand is built around one idea: make the kitchen trust the pack.

### 11.5 Final CTA
> Ready to bring bold flavour home?

Button options:
- Shop Wins
- Order Now
- Contact for Wholesale

---

## 12. Compliance and Risk Requirements

### 12.1 Packaging and claims alignment
Website claims must not conflict with packaging claims.

### 12.2 Required caution in messaging
Avoid unverified statements around:
- purity
- adulteration-free promise unless tested
- medical benefits
- superiority claims

### 12.3 Labeling alignment
If pack visuals appear on site, final production packaging should align with Indian food labeling requirements, including FSSAI logo/license and other mandatory declarations.

### 12.4 Review authenticity
Only verified reviews should be published.

---

## 13. Functional Requirements

### FR-1 Hero video loads from `video/` folder
The hero must pull from a configured path in the `video/` directory.

### FR-2 Scroll-synced hero progression
The hero transition should progress with scroll and remain visually smooth.

### FR-3 Left-side text readability
The left copy block must stay readable through the entire hero sequence.

### FR-4 Right-side final composition
The final hero state must place the product on the right side with powder-heavy visuals and open text space on the left.

### FR-5 CTA visibility
At least one primary CTA must remain visible without requiring full scroll completion.

### FR-6 Responsive adaptation
On mobile/tablet, hero motion may be simplified, but brand clarity must remain intact.

### FR-7 Reduced-motion fallback
Users with reduced-motion preferences must receive a static or simplified experience.

### FR-8 SEO-ready content blocks
All major copy should be accessible HTML text, not embedded in media.

### FR-9 Review module
Review section must support hidden state until verified data exists.

### FR-10 Analytics hooks
Track hero entry, hero completion, CTA clicks, section visibility, and scroll depth.

---

## 14. Non-Functional Requirements

- visually premium
- smooth scrolling on modern desktop devices
- acceptable mobile fallback performance
- strong contrast and readability
- easy maintainability for future product pages
- no motion-induced chaos
- page should not feel heavy or delayed due to hero media

---

## 15. Analytics Plan

Track:
- hero section impression
- hero 25%, 50%, 75%, 100% scroll completion
- primary CTA click
- secondary CTA click
- FAQ expand events
- testimonial section view
- final CTA click
- wholesale form open / submit

---

## 16. Suggested File / Component Structure

```text
/video
  wins-chilli-parallax.mp4
  wins-chilli-parallax.webm (optional)

/images
  wins-hero-poster.webp
  wins-pack-shot.webp
  wins-uses-1.webp
  wins-uses-2.webp

/components
  HeroParallax.tsx
  TrustStrip.tsx
  SpecialSection.tsx
  UsesGrid.tsx
  Testimonials.tsx
  AboutWins.tsx
  FAQ.tsx
  FinalCTA.tsx
```

---

## 17. Testing Plan

### 17.1 Important note on “MCPE”
The term **MCPE** is not a standard web testing term. For this PRD, it is interpreted as **MCP-assisted end-to-end testing**, most likely using a browser automation layer such as **Playwright MCP**.

### 17.2 Manual QA checklist
- hero video loads correctly from `video/`
- first paint shows readable copy and visible product
- scroll progression is smooth
- no white flashes or frame jumps
- final frame composition leaves left-side space readable
- CTA buttons are visible and clickable
- below-the-fold sections align properly
- no text overlap with media on common desktop breakpoints
- mobile fallback displays correctly
- reduced-motion mode works

### 17.3 MCP / Playwright-style E2E test cases

#### Test Case 1: Hero loads
- open homepage
- assert hero video element exists
- assert poster/fallback exists if video load stalls
- assert primary heading visible

#### Test Case 2: Scroll progression
- scroll page from top to hero end in steps
- confirm hero remains sticky through intended viewport range
- confirm no abrupt layout shift
- confirm final right-weighted composition visible

#### Test Case 3: CTA availability
- assert primary CTA visible on initial hero
- click CTA and verify expected route or modal

#### Test Case 4: Reduced motion
- emulate `prefers-reduced-motion: reduce`
- assert static or simplified hero loads
- assert no scroll-scrub motion required

#### Test Case 5: Content readability
- confirm left-side copy maintains contrast ratio and readability over hero states
- confirm no section text overlaps with powder-heavy right-side visuals

#### Test Case 6: Responsive fallback
- test desktop, tablet, and mobile widths
- confirm hero degrades gracefully on smaller screens

#### Test Case 7: Accessibility
- keyboard tab through all interactive elements
- verify focus states visible
- ensure buttons have accessible names

### 17.4 Acceptance criteria for testing
The site passes when:
- motion is smooth on supported browsers
- CTA is clear and usable
- reduced motion works
- layout is stable
- product remains dominant and readable
- content sections load cleanly after hero

---

## 18. Launch Readiness Checklist

Before launch, confirm:
- real packaging artwork finalized
- actual legal brand status checked
- genuine pricing ready
- shipping coverage defined
- verified contact details present
- review section either real or hidden
- claims legally safe
- analytics configured
- compressed hero media deployed

---

## 19. Recommended MVP Version

### MVP includes
- hero parallax video section
- trust strip
- what makes Wins special
- uses section
- about section
- FAQ
- final CTA

### V1.1 later
- real testimonials
- recipe cards
- distributor enquiry form
- Tamil + English switch
- SKU selector

---

## 20. References Used for This PRD

1. Britannica, *Chili pepper*  
   https://www.britannica.com/plant/chili-pepper

2. Britannica, *Portuguese traders introduced spicy chili peppers to India in the 16th century*  
   https://www.britannica.com/one-good-fact/what-famous-indian-dish-has-portuguese-roots

3. Aachi Foods, *Chilli Powder product page*  
   https://aachifoods.com/products/chilli-powder

4. Aachi Foods, *Byadgi Chilli Powder product page*  
   https://aachifoods.com/products/byadgi-chilli-powder

5. MDN, *Web accessibility for seizures and physical reactions*  
   https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Seizure_disorders

6. W3C, *Using the CSS prefers-reduced-motion query to prevent motion*  
   https://www.w3.org/WAI/WCAG22/Techniques/css/C39

7. Chrome for Developers, *A case study on scroll-driven animations performance*  
   https://developer.chrome.com/blog/scroll-animation-performance-case-study

8. web.dev, *Lazy loading video*  
   https://web.dev/articles/lazy-loading-video

9. FSSAI, *Food Safety and Standards (Labelling and Display) Regulations / Compendium*  
   https://www.fssai.gov.in/upload/uploadfiles/files/Comp_Labelling%20Display_Version%20VII_03042025.pdf

10. FSSAI, *Advisory against the use of “100%” on food labels*  
    https://fssai.gov.in/upload/advisories/2025/05/683854948c294Advisory%20-%20100_%20claim.pdf

11. PMC review, *Dietary Capsaicin: A Spicy Way to Improve Cardio-Metabolic Health?*  
    https://pmc.ncbi.nlm.nih.gov/articles/PMC9775666/

12. Microsoft Playwright MCP repository  
    https://github.com/microsoft/playwright-mcp

