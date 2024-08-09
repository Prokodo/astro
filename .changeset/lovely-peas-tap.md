---
'astro': minor
---

Adds the ability to group routes together without altering the final URL structure.
Route groups can be created by wrapping a folder's name in parentheses, e.g. `(admin)`, which causes the folder name to be excluded from the URL.

**File Structure Example:**
- `/src/pages/index.astro` ➜ `/`
- `/src/pages/about.astro` ➜ `/about`
- `/src/pages/contact.astro` ➜ `/contact`
- `/src/pages/(admin)/dashboard.astro` ➜ `/dashboard`
- `/src/pages/(admin)/settings.astro` ➜ `/settings`
- `/src/pages/(admin)/users/[id].astro` ➜ `/users/:id`
- `/src/pages/(shop)/products.astro` ➜ `/products`
- `/src/pages/(shop)/products/[productId].astro` ➜ `/products/:productId`
- `/src/pages/(shop)/cart.astro` ➜ `/cart`
- `/src/pages/(user)/profile.astro` ➜ `/profile`
- `/src/pages/(user)/orders/[orderId].astro` ➜ `/orders/:orderId`
- `/src/pages/(user)/settings.astro` ➜ `/settings` 
