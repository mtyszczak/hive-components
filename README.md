# Hive Components

A collection of reusable Web Components for the Hive blockchain, built with TypeScript and Lit. These components provide an easy way to integrate Hive blockchain data and functionality into any web application.

## 🚀 Quick Start

### CDN Usage

```html
<!-- Include the components bundle -->
<script src="https://openhive.network/dev/hive-components.js" type="module"></script>

<!-- Use the components -->
<hive-witness theme="light" account="gtg" />
<hive-post theme="light" permlink="@gtg/hello-world" />
<hive-comments theme="light" permlink="@gtg/hello-world" />
<hive-tag theme="light" tag="biography" posts-per-page="4" url-template="/biography/{permlink}" />
```

### NPM Installation

```bash
npm install @hiveio/components
```

```javascript
import "@hiveio/components/all.js";
// Components are now available globally
```

## 📦 Components

### `<hive-witness>`

Display information about a Hive witness including their stats, proposals, and voting information.

**Attributes:**

- `theme` - Theme mode: `light`, `dark`, or `auto`
- `account` - Witness account name (required)

**Example:**

```html
<hive-witness theme="light" account="gtg"></hive-witness>
```

### `<hive-post>`

Display a Hive post with author information, content, and metadata.

**Attributes:**

- `theme` - Theme mode: `light`, `dark`, or `auto`
- `permlink` - Post permlink in format `@author/permlink` (required)
- `preview` - Show truncated preview (boolean)
- `max-length` - Maximum content length for preview mode (default: 300)

**Example:**

```html
<hive-post theme="light" permlink="@gtg/hello-world"></hive-post>
<hive-post theme="light" permlink="@gtg/hello-world" preview max-length="150"></hive-post>
```

### `<hive-controls>`

Interactive controls for Hive posts including voting, commenting, reblogging, and sharing.

**Attributes:**

- `theme` - Theme mode: `light`, `dark`, or `auto`
- `permlink` - Post permlink in format `@author/permlink` (required)
- `readonly` - Disable interactive features (boolean)

**Events:**

- `hive-vote` - Fired when vote button is clicked
- `hive-comment` - Fired when comment button is clicked
- `hive-reblog` - Fired when reblog button is clicked

**Example:**

```html
<hive-controls theme="light" permlink="@gtg/hello-world"></hive-controls>
```

### `<hive-comments>`

Display threaded comments for a Hive post with nested replies.

**Attributes:**

- `theme` - Theme mode: `light`, `dark`, or `auto`
- `permlink` - Post permlink in format `@author/permlink` (required)
- `max-depth` - Maximum nesting depth for replies (default: 3)
- `initial-limit` - Initial number of comments to show (default: 10)

**Example:**

```html
<hive-comments theme="light" permlink="@gtg/hello-world"></hive-comments>
```

### `<hive-tag>`

Display posts from a specific Hive tag with pagination.

**Attributes:**

- `theme` - Theme mode: `light`, `dark`, or `auto`
- `tag` - Tag name to fetch posts from (required)
- `posts-per-page` - Number of posts per page (default: 10)
- `url-template` - URL template for post links, use `{permlink}` and `{author}` placeholders
- `preview-length` - Length of post preview text (default: 150)

**Events:**

- `hive-post-click` - Fired when a post is clicked

**Example:**

```html
<hive-tag theme="light" tag="photography" posts-per-page="5" url-template="/post/{author}/{permlink}"></hive-tag>
```

## 🎨 Theming

All components support three theme modes:

- `light` - Light theme (default)
- `dark` - Dark theme
- `auto` - Automatically follows system preference

You can also customize the appearance using CSS custom properties:

```css
hive-witness {
  --hive-primary: #your-color;
  --hive-surface: #your-background;
  --hive-on-surface: #your-text-color;
  /* ... other custom properties */
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/hive-components.git
cd hive-components

# Install dependencies
pnpm install

# Start development server
pnpm catalog
```

### Project Structure

```text
hive-components/
├── packages/
│   ├── internal/           # Shared utilities and types
│   ├── component-witness/  # Witness component
│   ├── component-post/     # Post component
│   ├── component-controls/ # Controls component
│   ├── component-comments/ # Comments component
│   └── component-tag/      # Tag posts component
├── catalog/                # Development catalog
├── all.ts                  # Main bundle entry
└── package.json            # Root package.json
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @hiveio/component-post build

# Clean all builds
pnpm clean
```

### Testing

```bash
# Run linting
pnpm lint

# Run prettier
pnpm format

# Test
pnpm catalog
```

## 🔧 Architecture

This project follows the principles of:

- **KISS (Keep It Simple, Stupid)** - Simple, focused components
- **DRY (Don't Repeat Yourself)** - Shared utilities and styles
- **SOLID** - Well-structured, maintainable code

### Key Features

- **TypeScript** - Full type safety
- **Lit** - Lightweight, fast web components
- **pnpm Workspaces** - Efficient monorepo management
- **Modular** - Use only the components you need
- **Themeable** - Light, dark, and auto themes
- **Accessible** - Following web accessibility standards
- **Tree-shakeable** - Import only what you use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Add tests if applicable
5. Run `pnpm lint` and `pnpm format`
6. Commit your changes: `git commit -am 'Add my feature'`
7. Push to the branch: `git push origin feature/my-feature`
8. Create a Pull Request

## 📝 License

UNLICENSED

## 🔗 Links

- [Hive Blockchain](https://hive.io)
- [Lit Framework](https://lit.dev)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Material Web Components](https://github.com/material-components/material-web) (inspiration)
