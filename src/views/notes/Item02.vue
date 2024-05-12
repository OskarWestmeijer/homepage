<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        When working with collections in Java, managing the mutability and immutability of lists is
        crucial. Implementing various types of copies, such as shallow, deep, or defensive, requires
        knowledge of list behaviour.
      </p>
      <p>
        Three common methods stand out: <code>new ArrayList()</code>,
        <code>Collections.unmodifiableList()</code>, and <code>List.copyOf()</code>. Each serves a
        distinct purpose, offering varying degrees of mutability and immutability.
      </p>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Classification</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new ArrayList()</code></td>
            <td>Mutable Copy</td>
            <td>
              Provides a mutable copy of the original list. Changes to the original list do not
              propagate to the mutable copy.
            </td>
          </tr>
          <tr>
            <td><code>Collections.unmodifiableList()</code></td>
            <td>Read-only View</td>
            <td>
              Returns a read-only view of the original list. Changes to the original list propagate
              to the view.
            </td>
          </tr>
          <tr>
            <td><code>List.copyOf()</code></td>
            <td>Immutable Copy</td>
            <td>
              Creates an immutable copy of the original list. Changes to the original list do not
              propagate to the copy.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-center">Comparison</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
    List&lt;String> original = new ArrayList<>();
    original.add("one");

    List&lt;String> mutable = new ArrayList(original);
    List&lt;String> view = Collections.unmodifiableList(original);
    List&lt;String> copy = List.copyOf(original);

    original.add("two");
    mutable.add("three");
    // view.add("three"); -> UnsupportedOperationException!
    // copy.add("three"); -> UnsupportedOperationException!

    System.out.println("original: " + original); // original: [one, two]
    System.out.println("mutable: " + mutable); // mutable: [one, three]
    System.out.println("view: " + view); // view: [one, two]
    System.out.println("copy: " + copy); // copy: [one]
  </code></pre>
    </div>
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
