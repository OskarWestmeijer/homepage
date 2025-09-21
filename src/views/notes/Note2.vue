<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <blockquote class="border-primary mb-0">
      <h2 class="mb-0 mt-0">Goal:</h2>
      Make a shallow copy of a List. Prove the independence of original & copy. Understand the
      difference to a deep copy.
    </blockquote>

    <p>
      Every List can be copied. A shallow copy, copies the structure (order) of the original list.
      The original and copy are distinct objects. Subsequent modifications to the original do not
      propagate to the copy.
    </p>

    <img
      alt="Shallow copy"
      class="mt-0 min-w-xs max-w-xl rounded-xl"
      src="@/assets/notes/note-2-1.png"
    />

    <blockquote class="border-primary mb-0">
      The difference to a deep copy is, that the elements itself are not copied. After performing a
      shallow copy, both lists reference the same objects on the heap.
    </blockquote>

    <p>
      If the elements are mutable, the changes propagate accross original & shallowCopy. The class
      <code>BG2Character</code> allows mutability of the name attribute.
    </p>

    <img
      alt="Shallow copy, with referenced element being mutated in both lists"
      class="mt-0 min-w-xs max-w-xl rounded-xl"
      src="@/assets/notes/note-2-2.png"
    />

    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .overflow-x-auto {
    overflow-x: auto;
    max-width: 100%;
  }
}
</style>
