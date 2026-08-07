# Image Prompts, status: pending (all placeholders are CSS blocks, no photos yet)

Every hero, thumbnail, and inline body photo on this site is currently a
dashed CSS placeholder (`.inline-photo` / `.inline-photo-float`, or the
hero's own patterned background) with a short on-page caption naming the
intended shot. None of the files below exist yet. Generate each with your
own AI image tool, then send the files back for resizing, optimizing, and
wiring into place.

Style guardrails every prompt below was written against: realistic
photography (not illustration or 3D render), natural daylight, a generic
"trusted local contractor" look rather than a stylized or luxury feel,
Southern California residential setting (craftsman bungalows, mid-century
stucco and wood-sided homes, dry hillside backdrop where visible), no
readable text or logos anywhere in frame, and no faces close enough or
clear enough to need a model release.

Suggested pipeline once you have source images: convert with `sips` (or
equivalent) to JPEG quality ~80, matching the target dimensions listed
per image, then drop the finished files into `images/` at the exact paths
below and swap the corresponding placeholder `<div>`/caption for a real
`<img>` tag (the CSS already supports both, see `img.inline-photo` and
`img.inline-photo-float` in `css/style.css`).

---

## Homepage (`index.html`)

- `images/house-painters-burbank-ca-hero.jpg` (1600x900, 16:9), hero
  background, Prompt: "Wide exterior photo of a freshly painted single-
  story stucco home in Burbank, California at golden hour, warm late-
  afternoon light, clean modern neutral exterior paint color, palm tree
  or hillside faintly visible in the background, no people, no visible
  house numbers or text.", Alt text: "Freshly painted stucco home
  exterior in Burbank CA at golden hour"
- `images/house-painters-burbank-ca-exterior-stucco.jpg` (1200x675,
  16:9), intro section inline photo, Prompt: "Photo of a painter in
  plain work clothes rolling exterior paint onto a stucco wall in
  daylight, ladder and drop cloth visible, Southern California
  residential neighborhood in soft focus behind, no readable text or
  logos, face not clearly visible.", Alt text: "House painter rolling
  exterior stucco wall in Burbank CA"
- `images/house-painters-burbank-ca-og.jpg` (1200x630), Open Graph /
  Twitter card image, derive from the hero photo above, resized and
  center-cropped.
- `images/interior-painting-burbank-ca-thumbnail.jpg` (800x600, 4:3), service card thumbnail, Prompt: "Bright, freshly painted living room
  interior, soft neutral wall color, natural daylight through a window,
  clean and tidy, no people, no artwork with readable text.", Alt text:
  "Freshly painted living room, interior painting in Burbank CA"
- `images/exterior-painting-burbank-ca-thumbnail.jpg` (800x600, 4:3), service card thumbnail, Prompt: "Stucco home exterior mid repaint,
  painter on a ladder applying paint to an upper wall section, daylight,
  Southern California residential street, no readable text or logos.", Alt text: "Stucco home mid exterior painting in Burbank CA"
- `images/deck-staining-burbank-ca-thumbnail.jpg` (800x600, 4:3), service card thumbnail, Prompt: "Wood deck partway through staining,
  clear line between newly stained rich wood tone and older weathered
  gray wood, stain brush and can visible with no readable label text,
  daylight, backyard setting.", Alt text: "Wood deck staining in
  progress in Burbank CA"

## Interior Painting (`services/interior-painting.html`)

- `images/interior-painting-burbank-ca-hero.jpg` (1600x900, 16:9), hero
  background, Prompt: "Bright, freshly painted living room with soft
  neutral wall color, natural light, clean modern furniture, no people,
  no readable text or artwork.", Alt text: "Bright freshly painted
  living room, interior painting in Burbank CA"
- `images/interior-painting-burbank-ca-trim-detail.jpg` (900x1200, 3:4
  portrait), inline float photo, Prompt: "Close-up of a painter's hand
  and brush cutting in a crisp trim line where a wall meets white trim,
  shallow depth of field, natural light, no readable text.", Alt text:
  "Painter cutting in trim line during interior painting in Burbank CA"
- `images/interior-painting-burbank-ca-og.jpg` (1200x630), Open Graph /
  Twitter card image, derive from the hero photo above.

## Exterior Painting (`services/exterior-painting.html`)

- `images/exterior-painting-burbank-ca-hero.jpg` (1600x900, 16:9), hero
  background, Prompt: "Painter on a ladder applying exterior paint to a
  stucco home in Burbank California, daylight, clean neutral paint
  color, Southern California residential street in the background, no
  readable text or logos, face not clearly visible.", Alt text:
  "Exterior painting in progress on a stucco home in Burbank CA,
  painter on ladder"
- `images/exterior-painting-burbank-ca-trim-detail.jpg` (900x1200, 3:4
  portrait), inline float photo, Prompt: "Close-up of exterior wood
  trim being caulked and primed before painting, painter's gloved hand
  with a caulk gun, natural daylight, shallow depth of field, no
  readable text.", Alt text: "Exterior trim being caulked and primed
  before exterior painting in Burbank CA"
- `images/exterior-painting-burbank-ca-og.jpg` (1200x630), Open Graph /
  Twitter card image, derive from the hero photo above.

## Deck & Fence Staining (`services/deck-fence-staining.html`)

- `images/deck-staining-burbank-ca-hero.jpg` (1600x900, 16:9), hero
  background, Prompt: "Wood deck partway through staining in a
  Southern California backyard, clear line between freshly stained rich
  wood tone and older weathered gray wood, stain brush and unlabeled can
  in frame, daylight, no readable text or logos, no people.", Alt text:
  "Wood deck mid stain during deck staining in Burbank CA"
- `images/deck-staining-burbank-ca-detail.jpg` (900x1200, 3:4 portrait), inline float photo, Prompt: "Close-up of a stain brush applying
  wood stain to a fence board, visible wood grain, natural daylight,
  shallow depth of field, no readable text.", Alt text: "Stain brush on
  fence board during fence staining in Burbank CA"
- `images/deck-staining-burbank-ca-og.jpg` (1200x630), Open Graph /
  Twitter card image, derive from the hero photo above.

---

## Not a photo placeholder

- Footer map: the homepage footer (`index.html`, Company Info column)
  has a `.map-embed` placeholder block reading "Google Map embed
  pending GMB approval." Swap it for a real Google My Business map
  embed once the GMB listing is approved. This is not a photo, so it
  is not one of the AI-generation prompts above.
