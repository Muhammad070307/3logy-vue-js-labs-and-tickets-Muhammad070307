# 📋 TICKET #55: Multi-Page E-Commerce Router

**Assigned:** Wednesday Week 15
**Due:** Monday Week 16, 2:00 PM
**Type:** Independent Practice
**Worth:** 12.5 points
**Submission:** GitHub Repo Link in Discord #week-15-help

---

## 🎯 OBJECTIVE
Prove your mastery of Vue Router, Dynamic Routing, and Form Validation by expanding on the e-commerce structure you built yesterday.

---

## ✅ REQUIREMENTS

### 1. Project Setup
- Scaffold a new project using `npm create vue@latest`. **Ensure you select YES for Vue Router**.
- Name the project `vue-router-store`.

### 2. Routes Required
Your application must have the following routes configured in `router/index.js`:
- `/`: The Home view (Welcome message and a link to the store).
- `/products`: The Products view (Displays a list of products).
- `/products/:id`: The Product Details view (Displays a single product dynamically based on the ID in the URL).
- `/checkout`: The Checkout view (A form to collect user shipping information).

### 3. Dynamic Routing Implementation
- In the Products view, loop over a hardcoded array of 5 products (or fetch from the Fake Store API if you prefer).
- Each product should have a `<RouterLink>` that goes to `/products/:id`.
- The Product Details view must read the ID from the URL using `useRoute().params.id` and display the matching product's details.

> 📖 **How to use `useRoute`:** `useRoute` is a composable provided by Vue Router that gives you access to the current URL.
> ```javascript
> import { useRoute } from 'vue-router'
> const route = useRoute()
> console.log(route.params.id) // e.g., '3' if URL is /products/3
> ```
> Note: The `id` will be a **string**, not a number. Use `Number(route.params.id)` or `parseInt` when comparing to your products array.

### 4. Checkout Form Validation
The `/checkout` route must contain a form with:
- Full Name
- Address
- Credit Card Number (just a string for now)
- Submit Button

**Validation Rules (Use a computed property):**
- Name cannot be empty.
- Address must be at least 10 characters long.
- Credit Card must be exactly 16 characters long.
- The submit button must be `:disabled` until all rules are met.
- Upon submission, show a success message or alert.

---

## 📸 SUBMISSION REQUIREMENTS

1. Push your code to a public GitHub repository named `vue-router-store`.
2. Post the GitHub link in the Discord `#week-15-help` channel.
3. Message format: "Ticket 55 Completed ✅ [Your GitHub Link]"

---

## 📊 GRADING RUBRIC

| Criteria | Points |
|----------|--------|
| Router setup correctly with all 4 base routes | 2.5 |
| Dynamic route (`/products/:id`) correctly displays specific data | 3 |
| Navigation between pages works without full browser reload | 2 |
| Checkout form includes all required fields with `v-model` | 2 |
| Computed property correctly disables button until validation passes | 3 |
| **Total** | **12.5** |

**Remember: You have until Monday to finish this, but don't leave it until Sunday night!**
