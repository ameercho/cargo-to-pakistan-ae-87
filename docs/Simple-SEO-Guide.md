
# Simple SEO Guide - WordPress Style

## How to Add SEO to Any Page (Manual Control)

### Step 1: Import PageSEO Component

```tsx
import PageSEO from "@/components/SEO/PageSEO";
```

### Step 2: Add SEO to Your Page

```tsx
const YourPage = () => {
  return (
    <div>
      {/* Add this at the top of your component */}
      <PageSEO
        title="Your Page Title | Cargo to Pakistan"
        description="Your page description (150-160 characters max)"
        keywords="keyword1, keyword2, keyword3"
        canonical="https://cargotopakistan.ae/your-page"
        robots="index,follow"
      />
      
      {/* Your page content */}
    </div>
  );
};
```

### Step 3: Required Props

| Prop | Required | Description | Example |
|------|----------|-------------|---------|
| `title` | ✅ | Page title (60 chars max) | "Cargo to Karachi Pakistan" |
| `description` | ✅ | Meta description | "Professional cargo shipping..." |
| `keywords` | ❌ | SEO keywords | "cargo karachi, shipping" |
| `canonical` | ❌ | Canonical URL | "https://cargotopakistan.ae/page" |
| `robots` | ❌ | Robot instructions | "index,follow" or "noindex" |

### Step 4: HTML Structure Requirements

#### Every page MUST have:

1. **Exactly ONE H1 tag**
```tsx
<h1>Main Page Title</h1>
```

2. **Proper heading hierarchy**
```tsx
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

3. **Bold important keywords**
```tsx
<p>Our <strong>cargo services</strong> are reliable.</p>
<h1><strong>Cargo to Pakistan</strong> from Dubai</h1>
```

4. **Image alt text**
```tsx
<img src="/image.jpg" alt="Cargo truck loading packages in Dubai warehouse" />
```

5. **Internal links**
```tsx
<Link to="/pakistan-cargo-to-karachi">Cargo to Karachi</Link>
```

### Step 5: Quick Examples

#### City Page SEO:
```tsx
<PageSEO
  title="Cargo to Karachi Pakistan | Dubai to Karachi Shipping"
  description="Professional cargo shipping from Dubai to Karachi with door-to-door delivery. Fast and reliable Pakistan cargo service. Call +971504948135"
  keywords="cargo to karachi, dubai karachi shipping, pakistan cargo"
  canonical="https://cargotopakistan.ae/pakistan-cargo-to-karachi"
/>
```

#### Area Page SEO:
```tsx
<PageSEO
  title="Cargo to Pakistan from Dubai | Door-to-Door Shipping Service"
  description="Professional cargo shipping from Dubai to Pakistan. Serving Dubai Marina, Downtown, Business Bay & all Dubai areas. Call +971504948135"
  keywords="cargo to pakistan dubai, dubai pakistan shipping"
  canonical="https://cargotopakistan.ae/areas/dubai"
/>
```

#### Service Page SEO:
```tsx
<PageSEO
  title="Sea Freight Cargo to Pakistan | Dubai Abu Dhabi Sharjah"
  description="Cost-effective sea freight services from UAE to Pakistan. Reliable ocean cargo shipping with secure handling. Get quote today!"
  keywords="sea freight pakistan, ocean cargo uae"
  canonical="https://cargotopakistan.ae/services/sea-freight"
/>
```

### Step 6: SEO Checklist

Before publishing any page, ensure:

- [ ] Added `<PageSEO>` component with title and description
- [ ] Page has exactly one `<h1>` tag
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Important keywords wrapped in `<strong>` tags
- [ ] All images have descriptive `alt` attributes
- [ ] Added internal links to related pages
- [ ] Meta description is 150-160 characters
- [ ] Title includes target keywords and is under 60 characters
- [ ] Page loads without errors

This gives you complete manual control over SEO, just like WordPress!
