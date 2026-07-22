<script setup>
// This component just provides the structural layout.
// It relies on the parent to inject the actual HTML content via <slot>
</script>

<template>
  <div style="border: 2px dashed purple; padding: 1rem; margin: 1rem 0; border-radius: 8px;">
    <!-- Named Slot for the header -->
    <header style="border-bottom: 1px solid #ccc; margin-bottom: 1rem;">
      <slot name="header">
        <h4>Default Modal Title</h4>
      </slot>
    </header>

    <!-- Default Slot for the main body -->
    <main>
      <slot>
        <p>Default body content goes here if the parent doesn't provide any.</p>
      </slot>
    </main>
  </div>
</template>
