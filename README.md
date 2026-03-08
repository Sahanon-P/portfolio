# Portfolio — Sahanon Phisetpaksit (Ping)

Personal portfolio website for Sahanon Phisetpaksit, a full-stack software engineer based in Christchurch, New Zealand. Designed with a [Teenage Engineering K.O. II](https://teenage.engineering/products/ko2) sampler aesthetic — flat, monospace, hardware-like.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui v3 |
| Animations | Framer Motion |
| CMS | Contentful |
| Font | IBM Plex Mono |
| Theme | next-themes (light/dark) |
| Contact form | Web3Forms |
| Package manager | Yarn Berry v4 |

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4 (`corepack enable`)

### Installation

```bash
yarn install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key
```

- **Contentful**: Create a space and add content types for `experience`, `research`, and `project` (see [Content Model](#content-model))
- **Web3Forms**: Get a free key at [web3forms.com](https://web3forms.com) — just enter your email

### Development

```bash
yarn dev
```

### Build

```bash
yarn build
yarn start
```

## Content Model (Contentful)

### `experience`
| Field | Type |
|---|---|
| `company` | Short text |
| `role` | Short text |
| `startDate` | Short text |
| `endDate` | Short text |
| `responsibilities` | Rich text |

### `research`
| Field | Type |
|---|---|
| `title` | Short text |
| `institution` | Short text |
| `year` | Short text |
| `type` | Short text |
| `keyFindings` | Rich text |
| `pdfUrl` | Media (Asset) |

### `project`
| Field | Type |
|---|---|
| `title` | Short text |
| `description` | Rich text |
| `techStack` | Short text (comma-separated) |
| `githubUrl` | Short text |
| `liveUrl` | Short text |
| `order` | Integer |

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind v4 design system + K.O. II palette
│   ├── layout.tsx         # Root layout, fonts, ThemeProvider
│   └── page.tsx           # Server component, fetches Contentful data
├── components/
│   ├── sections/          # Page sections (Hero, About, Skills, Experience, Research, Projects, Contact)
│   ├── ui/                # shadcn/ui components
│   └── rich-text-renderer.tsx  # Contentful rich text → styled React
├── data/
│   └── portfolio.ts       # Static data (skills, personal info)
├── lib/
│   ├── api.ts             # Contentful fetchers (server-side)
│   ├── contentful.ts      # Contentful client
│   └── contentful-types.ts # Typed Contentful skeletons
└── public/                # Static assets (images, resume)
```

## Design System

All colours and tokens are defined in `app/globals.css` under `@theme inline` and `:root` / `.dark`.

| Token | Light | Dark |
|---|---|---|
| `--background` | `#F0EDE8` | `#1A1A1A` |
| `--surface` | `#E8E4DE` | `#242424` |
| `--accent-orange` | `#FF5500` | `#FF5500` |
| `--foreground` | `#1A1A1A` | `#F0EDE8` |

All border radii are set to `0` — sharp corners throughout.

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com). Add the environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## License

MIT
