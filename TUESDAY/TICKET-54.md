# 📋 TICKET #54: Modular E-Commerce UI

**Assigned:** Tuesday Week 15
**Due:** Thursday Week 15, 5:00 PM
**Type:** Independent Practice
**Worth:** 12.5 points
**Submission:** GitHub Repo Link in Discord #week-15-help

---

## 🎯 OBJECTIVE
Prove your mastery of Component Architecture, Props, Emits, and Composables by building a modular "Product Listing" interface.

---

## ✅ REQUIREMENTS

### 1. Component Structure
You must have at least three components:
- `App.vue` (The main container)
- `ProductList.vue` (The parent component holding the grid of products)
- `ProductCard.vue` (The child component displaying a single product)

### 2. The Composable (Data Fetching)
1. Create a file called `composables/useProducts.js`.
2. Inside it, write a `useProducts` composable that fetches data from the Fake Store API (`https://fakestoreapi.com/products`).
3. It should return a `ref` containing the array of products, and a `ref` for a loading state boolean.
4. `ProductList.vue` must use this composable to get its data.

> ⚠️ **API Fallback:** If the Fake Store API is unavailable, use this hardcoded array inside your composable instead of the fetch call:
> ```javascript
> const fallbackProducts = [
>   { id: 1, title: 'Laptop Pro', price: 999, image: 'https://via.placeholder.com/150' },
>   { id: 2, title: 'Wireless Mouse', price: 29, image: 'https://via.placeholder.com/150' },
>   { id: 3, title: 'USB-C Hub', price: 49, image: 'https://via.placeholder.com/150' },
> ]
> ```

### 3. Props Down
- `ProductList.vue` must loop over the fetched products and render a `<ProductCard>` for each one.
- Pass the product data (title, price, image URL) down to the `<ProductCard>` using props.

### 4. Events Up
- Inside `<ProductCard>`, add an "Add to Cart" button.
- When clicked, it must emit an `addToCart` event containing the product's ID or Title.
- `App.vue` or `ProductList.vue` must listen for this event and push the item into a `cart` array (a `ref`).
- Display the total number of items in the cart at the top of the page.

---

## 📸 SUBMISSION REQUIREMENTS

1. Push your code to a public GitHub repository named `vue-modular-store`.
2. Post the GitHub link in the Discord `#week-15-help` channel.
3. Message format: "Ticket 54 Completed ✅ [Your GitHub Link]"

---

## 📊 GRADING RUBRIC

| Criteria | Points |
|----------|--------|
| Components are properly separated | 2 |
| `useProducts` composable successfully fetches and returns data | 3 |
| Props are correctly defined and used in `ProductCard` | 2.5 |
| `addToCart` emit works and parent updates cart state | 3 |
| Loading state is handled correctly | 2 |
| **Total** | **12.5** |

**Focus on the logic first, styling second!**
