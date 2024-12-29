<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        Defensive copies are supposed to protect the internal state of an object. It's generally
        advisable to ensure the immutability of an object.
        <a href="#footnote-1" class="underline"
          >This means we should avoid returning direct references<sup>1</sup></a
        >
        to internal mutable state from getters.
      </p>
      <p>
        In this test, we attempt to modify the list returned by
        <code>getItems()</code>. As expected, an <code>UnsupportedOperationException</code> is
        thrown, confirming that the original list remains unchanged.
      </p>

      <p>Depending on the requirements, the preferred options for defensive copying are:</p>
      <ul>
        <li>
          <a href="#footnote-1" class="underline"
            ><code>Collections.unmodifiableList(items)</code><sup>2</sup></a
          >
          returns a view of the original list that cannot be modified. Suitable when changes from
          the original list should propagate to the defensive copy.
        </li>
        <li>
          <code>List.copyOf(items)</code> creates a new immutable list containing the same elements
          as the original list. Suitable when you want to ensure that clients receive a completely
          independent copy of the list.
        </li>
      </ul>
      <p>
        For a more detailed comparison of mutable, view, and copy operations for lists, please refer
        to
        <a href="item02-comparing-list-view-and-copy"
          >Item02: Comparing lists - Mutable, View and Copy</a
        >.
      </p>
    </section>

    <h3 class="text-center">Comparison</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
  class Order {

    private final List&lt;String> items;

    public Order(List&lt;String> items) {
      this.items = items;
    }

    /**
    * Defensive copy.
    *
    * @return items
    */
    public List&lt;String> getItems() {
      // alternative: Collections.unmodifiableList(items);
      return List.copyOf(items);
    }

  }

  @Test
  void defensiveCopyTest() {
    List&lt;String> mutable = new ArrayList<>();
    mutable.add("one");

    Order order = new Order(mutable);

    assertThatThrownBy(() -> order.getItems().add("two"))
        .isInstanceOf(UnsupportedOperationException.class);

    System.out.println("items: " + order.getItems()); // items: [one]
  }
    </code></pre>
    </div>

    <!-- Footnotes -->
    <div class="divider divider-info mb-0">Footnotes</div>
    <div class="mb-6">
      <p id="footnote-1" class="text-xs text-gray-500">
        1. <strong>Item 50: Make defensive copies when needed</strong> - J. Bloch, Effective Java,
        Edition 3, 2018, p. 231
      </p>
      <p id="footnote-2" class="text-xs text-gray-500">
        2. <strong>Design Your Objects: Avoid Leaking References</strong> - S. Harrer, Java by
        Comparison, Edition 1, 2018, p. 124
      </p>
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
