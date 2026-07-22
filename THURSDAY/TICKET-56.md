# 📋 TICKET #56: Pinia E-Commerce Cart

**Assigned:** Thursday Week 15
**Due:** Sunday Week 15, 11:59 PM
**Type:** Independent Practice
**Worth:** 12.5 points
**Submission:** GitHub Repo Link in Discord #week-15-help

---

## 🎯 OBJECTIVE
Prove your mastery of Global State Management by refactoring your multi-page E-Commerce store (Ticket 55) to use Pinia for the Shopping Cart.

---

## ✅ REQUIREMENTS

### 1. Pinia Setup
- Install Pinia and inject it into `main.js`.
- Create a `src/stores/cartStore.js` file.

### 2. The Cart Store
Your store must contain:
1. **State:** An array of `cartItems`.
2. **Getter (Cart Total):** A computed property that calculates the total price of all items in the cart (e.g., `$1,299.00`).
3. **Getter (Item Count):** A computed property that calculates the total number of items in the cart.
4. **Action (Add to Cart):** A function that accepts a product object. If the product is already in the cart, increase its quantity. If it's not, push it into the array with `quantity: 1`.
5. **Action (Remove from Cart):** A function that removes an item entirely based on its ID.

### 3. Implementing the Store
- **Navigation Bar:** Create a global Navbar component that displays the Item Count getter. This should update instantly no matter what page you are on.
- **Product Detail Page:** The "Add to Cart" button should call the store action directly.
- **Checkout Page:** This page should now loop over `store.cartItems`, displaying each item, its quantity, and a "Remove" button. At the bottom, it must display the Cart Total getter.

---

## 📸 SUBMISSION REQUIREMENTS

1. Push your code to your existing `vue-router-store` repository (make a new branch if you want, or just push to main).
2. Post the GitHub link in the Discord `#week-15-help` channel.
3. Message format: "Ticket 56 Completed ✅ [Your GitHub Link]"

---

## 📊 GRADING RUBRIC

| Criteria | Points |
|----------|--------|
| Pinia successfully installed and configured | 2 |
| `cartStore.js` uses Setup syntax and exports state/getters/actions | 2.5 |
| Add to Cart logic correctly handles quantities | 3 |
| Navbar instantly reflects global cart count changes | 2.5 |
| Checkout page correctly calculates total price using a Getter | 2.5 |
| **Total** | **12.5** |

**Congratulations on completing the Vue.js week!**
