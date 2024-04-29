<template>
  <div class="mt-4 prose max-w-full lg:w-2/5 m-auto flex flex-col items-center">
    <h2 class="text-center">Item01: My favourite validation libraries in Java</h2>

    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Library</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Objects.requireNonNull()</td>
            <td>java.util</td>
            <td>Since Java 8</td>
          </tr>
          <tr>
            <td>Preconditions.checkArgument()</td>
            <td>Guava</td>
            <td>Throws exception if condition is not met</td>
          </tr>
          <tr>
            <td>CollectionUtils.isNotEmpty()</td>
            <td>Apache commons</td>
            <td>Verifies is not null or empty</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mockup-code">
      <pre><code>Objects.requireNonNull(...)</code></pre>
      <pre><code>package westmeijer.oskar.models.server</code></pre>
      <pre><code>data class AirportCode( val code: String )</code></pre>
    </div>
  </div>
</template>
