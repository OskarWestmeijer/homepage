<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        In Java, when passing collections around in code, we have the possibility to
        create shallow copies to control mutability and avoid unintentional side effects
        to the
        <span class="font-bold">collections structure</span>. One common use case is
        <a href="#footnote-1" class="underline">defensive copying.<sup>1</sup></a>
      </p>
      <p>
        This note focuses on lists and compares three techniques:
        <code>new ArrayList()</code>,
        <a href="#footnote-1" class="underline"
          ><code>Collections.unmodifiableList()</code><sup>2</sup></a
        >, and <code>List.copyOf()</code>. Each approach has its distinct behavior in
        terms of mutability of structure.
      </p>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Technique</th>
            <th>Classification</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new ArrayList(original)</code></td>
            <td>Mutable shallow copy</td>
            <td>
              Creates a new list containing references to the original elements.
              Structural changes to both, original & copy do not affect each other.
              Mutations to the elements do affect both.
            </td>
          </tr>
          <tr>
            <td><code>Collections.unmodifiableList(original)</code></td>
            <td>Read-only view</td>
            <td>
              Returns a read-only view of the original list. Structural changes to the
              original list are visible in the view. Mutations to the elements are
              reflected in the view.
            </td>
          </tr>
          <tr>
            <td><code>List.copyOf(original)</code></td>
            <td>Immutable shallow copy</td>
            <td>
              Creates an immutable copy of the original list. Structural changes to the
              original list do not propagate. Mutations to the elements do affect both.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <blockquote>
      Note regarding "immutability":
      <code>List.copyOf()</code> ensures the immutability of the list's structure.
      However, if the elements are mutable, their state can still be modified. To ensure
      true immutability of both the list and its elements, the elements themselves must
      also be immutable (deep copy).
    </blockquote>

    <h3 class="text-center">Comparison</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
    List&lt;String> original = new ArrayList<>();
    original.add("one");

    List&lt;String> mutableCopy = new ArrayList(original);
    List&lt;String> view = Collections.unmodifiableList(original);
    List&lt;String> immutableCopy = List.copyOf(original);

    original.add("two");
    mutableCopy.add("three");
    // view.add("four"); -> UnsupportedOperationException!
    // immutableCopy.add("five"); -> UnsupportedOperationException!

    System.out.println("original: " + original);           // original: [one, two]
    System.out.println("mutableCopy: " + mutableCopy);     // mutableCopy: [one, three]
    System.out.println("view: " + view);                   // view: [one, two]
    System.out.println("immutableCopy: " + immutableCopy); // immutableCopy: [one]
  </code></pre>
    </div>

    <!-- Footnotes -->
    <div class="divider divider-info mb-0">Footnotes</div>
    <div class="mb-6">
      <p id="footnote-1" class="text-xs text-gray-500">
        1. <strong>Item 50: Make defensive copies when needed</strong> - J. Bloch,
        Effective Java, Edition 3, 2018, p. 231
      </p>
      <p id="footnote-2" class="text-xs text-gray-500">
        2. <strong>Design Your Objects: Avoid Leaking References</strong> - S. Harrer,
        Java by Comparison, Edition 1, 2018, p. 124
      </p>
    </div>
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

<style scoped>
@media (max-width: 768px) {
  .overflow-x-auto {
    overflow-x: auto;
    max-width: 100%;
  }
}
</style>
