<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <blockquote class="border-primary mb-0">
      <h2 class="mb-0 mt-0">Goal:</h2>
      Prove how immutable lists do not allow changes to structure. Understand that
      immutability of a list does not include immutability of its elements.
    </blockquote>
    <p>
      Lists can be initialized as mutable or immutable. If no modifications to the list
      are intended, it is advisable to work with a immutable list. The snippet below
      shows, how modifying the immutable list after initialization throws an exception.
    </p>
    <img
      alt="Immutable List throws exception on modification"
      class="mt-0 min-w-xs max-w-xl rounded-xl"
      src="@/assets/notes/note-1-1.png"
    />
    <blockquote class="border-primary mb-0">
      Note! An immutable list only guarantees the structure of the list, it does not
      prevent the possibility of its elements being mutated.
    </blockquote>
    <p>
      The example below works with a simple class, which is mutable. To reduce code, I
      used some annotations from the Lombok library.
    </p>
    <img
      alt="Immutable List does not prevent its elements being mutated"
      class="mt-0 mb-0 min-w-xs max-w-xl rounded-xl"
      src="@/assets/notes/note-1-2.png"
    />
    <p>
      While the immutable list maintains the order of elements, we were able to mutate the
      element. In case immutability of the element is required, you can use Java
      <code>records</code>, or Lomboks <code>@Value</code> annotation.
    </p>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
};
</script>
