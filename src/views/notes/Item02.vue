<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        Frequently we pass collections to model classes. Depending on the use-case we can assign the
        collection in different ways:
      </p>
      <ul>
        <li>Keep it mutable</li>
        <li>Defensive Copy</li>
        <li>Unmodifiable View</li>
      </ul>
      <p>
        I would like to analyze these differences with a Java record. A record ensures, that the
        references held by the record cannot be changed. They are considered <code>final</code>.
        However, it does not guarantee the immutability of the referenced object itself.
      </p>
    </section>

    <h3 class="text-center">Keeping the list mutable</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto w-full">
      <pre><code>
  <span class="text-orange-500">record</span> Order(List&lt;String&gt; items) {

  }
        
  <span class="text-yellow-400">@Test</span>
  <span class="text-orange-500">void</span> <span class="text-blue-400">shouldKeepItMutable</span>() {
    List&lt;String&gt; mutableList = <span class="text-orange-500">new</span> ArrayList<>();
    mutableList.add(<span class="text-green-500">"one"</span>);

    <span class="text-orange-500">var</span> order = <span class="text-orange-500">new</span> Order(mutableList);
    System.<span class="text-purple-500">out</span>.println(order.items());
    <span class="text-gray-400">// ["one"]</span>

    order.items().add(<span class="text-green-500">"two"</span>);
    mutableList.add(<span class="text-green-500">"three"</span>);
    System.<span class="text-purple-500">out</span>.println(order.items());
    <span class="text-gray-400">// ["one", "two", "three"]</span>

    assertThat(order.items()).hasSize(<span class="text-blue-500">3</span>);
    assertThat(order.items()).isEqualTo(mutableList);
  }
</code></pre>
    </div>

    <section class="mt-0 font-medium">
      <p>
        The list has no protection from modifications. The record has no clue if this list might be
        referenced in other classes as well.
        <a href="#footnote-1" class="underline"
          >Therefore modifications to the list might have unintended consequences.<sup>1</sup></a
        >
      </p>
      <p>
        There are two approaches to tighten access restrictions. Both methods prevent modifications
        when calling the records getter.
      </p>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Static method</th>
            <th>Classification</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>List.copyOf()</code></td>
            <td>Defensive copy</td>
            <td>Most restrictive. Changes from the original list do NOT cascade.</td>
          </tr>
          <tr>
            <td><code>Collections.unmodifiableList()</code></td>
            <td>Read only view</td>
            <td>Less restrictive. Changes from the original list DO cascade.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <section class="font-medium">
      <h3>
        Recommendation:
        <a href="#footnote-2" class="underline">Prefer defensive copies.<sup>2</sup></a>
      </h3>
      <p></p>
      <p>
        If the list must remain mutable, it is advisable to safeguard it by returning
        <a href="#footnote-3" class="underline">read-only views from the getter.<sup>3</sup></a>
      </p>
    </section>
    <h3 class="text-center">Comparison of Defensive Copy & Unmodifiable View</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
  <span class="text-orange-500">record</span> Order(List&lt;String&gt; itemsCopy, List&lt;String&gt; itemsView) {

    <span class="text-orange-500">public</span> <span class="text-blue-400">Order</span> {
      checkArgument(itemsCopy.equals(itemsView), <span class="text-green-500">"Ensure same list is assigned"</span>);
      itemsCopy = List.copyOf(itemsCopy);
      itemsView = Collections.unmodifiableList(itemsView);
    }

  }

  <span class="text-yellow-400">@Test</span>
  <span class="text-orange-500">void</span> <span class="text-blue-400">shouldMakeDefensiveCopyAndUnmodifiableView</span>() {
    List&lt;String&gt; mutableList = <span class="text-orange-500">new</span> ArrayList<>();
    mutableList.add(<span class="text-green-500">"one"</span>);

    <span class="text-orange-500">var</span> order = <span class="text-orange-500">new</span> Order(mutableList, mutableList);
    System.<span class="text-purple-500">out</span>.printf(<span class="text-green-500">"copy: %s, view: %s%n"</span>, order.itemsCopy(), order.itemsView());
    <span class="text-gray-400">// ["one"], ["one"]</span>

    <span class="text-gray-400">// order.itemsCopy().add("two"); -> UnsupportedOperationException!</span>
    <span class="text-gray-400">// order.itemsView().add("two"); -> UnsupportedOperationException!</span>

    mutableList.add(<span class="text-green-500">"two"</span>);
    System.<span class="text-purple-500">out</span>.printf(<span class="text-green-500">"copy: %s, view: %s%n"</span>, order.itemsCopy(), order.itemsView());
    <span class="text-gray-400">// copy: ["one"], view: ["one", "two"]</span>

    assertThat(order.itemsCopy()).hasSize(<span class="text-blue-500">1</span>);
    assertThat(order.itemsView()).hasSize(<span class="text-blue-500">2</span>);
    assertThat(order.itemsView()).isEqualTo(mutableList);
  }
      </code></pre>
    </div>

    <div class="divider divider-info mb-0">Footnotes</div>

    <!-- Footnotes -->
    <div class="mb-6">
      <p id="footnote-1" class="text-xs text-gray-500">
        1. <strong>Item 17: Minimize mutability</strong> - J. Bloch, Effective Java, Edition 3,
        2018, p. 80
      </p>
      <p id="footnote-2" class="text-xs text-gray-500">
        2. <strong>Item 50: Make defensive copies when needed</strong> - J. Bloch, Effective Java,
        Edition 3, 2018, p. 231
      </p>
      <p id="footnote-3" class="text-xs text-gray-500">
        3.
        <strong>Design your objects: Avoid Leaking references</strong> - S. Harrer, Java by
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
