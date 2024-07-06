<template>
  <div class="h-100 d-flex align-center justify-space-between text-medium-emphasis">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Made With
      <VIcon
        icon="ri-heart-line"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="//JooTang.cn"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >JooTang</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="mailto:mp@jootang.cn"
        target="noopener noreferrer"
      >Documentation</a>
    </span>
  </div>
</template>
