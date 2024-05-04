<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        There are different ways to work with collections. Frequently we pass collections to model
        objects. Depending on the use-case we can implement this in different ways:
      </p>
      <ul>
        <li>Keep it mutable</li>
        <li>Defensive Copy</li>
        <li>Unmodifiable View</li>
      </ul>
      <p>
        I would like to analyse these differences with a simple Java record. A record guarantees,
        that the reference to the object held by the record cannot be changed. (<code>final</code>)
        However, it does not guarantee immutability of the assigned object itself.
      </p>
    </section>

    <h3 class="text-center">Keep it mutable</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
  <span class="text-orange-500">record</span> Order(List&lt;String&gt; items) {

  }
        
  <span class="text-yellow-400">@Test</span>
  <span class="text-orange-500">void</span> <span class="text-blue-400">shouldNotMakeDefensiveCopy</span>() {
    List&lt;String&gt; mutableList = <span class="text-orange-500">new</span> ArrayList<>();
    mutableList.add(<span class="text-green-500">"one"</span>);

    <span class="text-orange-500">var</span> order = <span class="text-orange-500">new</span> Order(mutableList);
    System.out.println(order.items());
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
        There are two ways to enhance this implementiation, depending on what is required. Both ways
        prevent modification to the records assigned list.
      </p>
      <p>
        Recommendation: Always implement defensive copies, if the process does not specify/require
        otherwise.
      </p>
    </section>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Static method</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>List.copyOf()</code></td>
            <td>Defensive copy. Changes to the original list do not cascade.</td>
          </tr>
          <tr>
            <td><code>Collections.unmodifiableList()</code></td>
            <td>Defensive View. Changes to the original list do cascade.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="font-medium">
      Record comparison for defensive copy and view. Changes to the original list only modify the
      view!
    </p>

    <h3 class="text-center">Defensive Copy & Unmodifiable View</h3>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code>
  <span class="text-orange-500">record</span> Order(List&lt;String&gt; itemsCopy, List&lt;String&gt; itemsView) {

    <span class="text-orange-500">public</span> <span class="text-blue-400">Order</span> {
      checkArgument(itemsCopy.equals(itemsView), "Ensure same list is assigned");
      itemsCopy = List.copyOf(itemsCopy);
      itemsView = Collections.unmodifiableList(itemsView);
    }

  }

  <span class="text-yellow-400">@Test</span>
  <span class="text-orange-500">void</span> <span class="text-blue-400">shouldMakeDefensiveCopyAndView</span>() {
    List&lt;String&gt; mutableList = new ArrayList<>();
    mutableList.add("one");

    var order = new Order(mutableList, mutableList);
    System.<span class="text-purple-500">out</span>.printf("copy: %s, view: %s%n", order.itemsCopy(), order.itemsView());
    <span class="text-gray-400">// ["one"], ["one"]</span>

    <span class="text-gray-400">// order.itemsCopy().add("two"); -> UnsupportedOperationException!</span>
    <span class="text-gray-400">// order.itemsView().add("two"); -> UnsupportedOperationException!</span>

    mutableList.add("two");
    System.<span class="text-purple-500">out</span>.printf("copy: %s, view: %s%n", order.itemsCopy(), order.itemsView());
    <span class="text-gray-400">// copy: ["one"], view: ["one", "two"]</span>

    assertThat(order.itemsCopy()).hasSize(1);
    assertThat(order.itemsView()).hasSize(2);
    assertThat(order.itemsView()).isEqualTo(mutableList);
  }
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
    max-width: 100%; /* Ensure the table fits within the viewport */
  }
}
</style>
