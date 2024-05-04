<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        Input parameter validation is important to avoid unexpected side-effects. I prefer to design
        processes with <a href="#footnote-1" class="underline">fail-fast<sup>1</sup></a> on my mind.
        Suitable passages to apply validations on:
      </p>
      <ul>
        <li>Constructors</li>
        <li>Public methods</li>
        <li>Especially mutating public methods</li>
      </ul>
      <p>
        Validations improve safety and force me to write better tests. Another welcoming benefit is
        that they document the code. In case of validation failure, the thrown exceptions can be
        utilized to write meaningful error messages.
      </p>
      <p>
        Instead of coding an own implementation, well maintained libraries like
        <a href="#footnote-2" class="underline">Guava<sup>2</sup></a> or
        <a href="#footnote-3" class="underline">Apache Commons<sup>3</sup></a> can be used. They
        offer plenty of useful static methods, to validate Strings and Collections.
      </p>
    </section>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Static method</th>
            <th>Library</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Objects.requireNonNull(T obj)</code></td>
            <td><code>java.util</code> (since 1.7)</td>
            <td>
              Throws <code>NullPointerException</code> if reference is <code>null</code>. Otherwise
              returns the passed Object. Info! Guava advises using their
              <code>Preconditions.checkNotNull(Object)</code> implementation instead.
            </td>
          </tr>
          <tr>
            <td><code>Preconditions.checkArgument(boolean expression)</code></td>
            <td><code>com.google.common.base</code> (Guava)</td>
            <td>
              Throws <code>IllegalArgumentException</code> if condition is not met. Place other
              valdiation calls inside.
            </td>
          </tr>
          <tr>
            <td><code>CollectionUtils.isNotEmpty(Collection<> col)</code></td>
            <td><code>org.apache.commons.collections4</code> (Apache Commons)</td>
            <td>
              Returns a <code>boolean</code> and is able to handle <code>null</code> inputs.
              Therefore it is more flexible than a regular <code>!List.isEmpty()</code>.
            </td>
          </tr>
          <tr>
            <td><code>StringUtils.isNumeric(CharSequence cs)</code></td>
            <td><code>org.apache.commons.lang3</code> (Apache Commons)</td>
            <td>Returns a <code>boolean</code> and is able to handle <code>null</code> inputs.</td>
          </tr>
          <tr>
            <td><code>Strings.isNullOrEmpty(String string)</code></td>
            <td><code>com.google.common.base</code> (Guava)</td>
            <td>Returns a <code>boolean</code> and is able to handle <code>null</code> inputs.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="font-medium">
      Scenario of validating a Java record during its construction phase. Note the countryCodes
      validation error message, it specifies exactly the required format. In case of exception, the
      related error log simplifies the troubleshooting process.
    </p>

    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <pre><code><span class="text-orange-500">public record</span> Location(
      Integer locationId,
      String localZipCode,
      String countryCode,
      List&lt;Weather&gt; weather) {
  
      <span class="text-orange-500">private static final</span> Pattern <span class="text-purple-500">countryCodePattern</span> = Pattern.compile(<span class="text-success">"</span><span class="bg-green-800"><span class="text-orange-500">^</span>[A<span class="text-orange-500">-</span>Z]{<span class="text-info">3</span>}<span class="text-orange-500">$</span></span><span class="text-success">"</span>);
  
      <span class="text-orange-500">public</span> <span class="text-info">Location</span> {
        Objects.requireNonNull(locationId, <span class="text-success">"locationId is required"</span>);
        
        Preconditions.checkArgument(StringUtils.isNumeric(localZipCode), 
        <span class="text-success">"localZipCode is required and must be numeric"</span>, locationId);
  
        Preconditions.checkArgument(!Strings.isNullOrEmpty(countryCode) 
        && <span class="text-purple-500">countryCodePattern</span>.matcher(countryCode).matches(),
        <span class="text-success">"countryCode is required (ISO 3166-1 alpha-3 code)"</span>, locationId);
  
        weather = List.copyOf(Objects.requireNonNull(weather, <span class="text-success">"weather is required"</span>));
      }
  
    }</code></pre>
    </div>

    <div class="divider divider-info mb-0">Footnotes</div>

    <!-- Footnotes -->
    <div class="mb-6">
      <p id="footnote-1" class="text-xs text-gray-500">
        1. <strong>Fail-fast:</strong> Programming concept emphasizing immediate error detection and
        handling. See
        <a href="https://en.wikipedia.org/wiki/Fail-fast_system" class="underline">Wikipedia</a>.
      </p>
      <p id="footnote-2" class="text-xs text-gray-500">
        2. <strong>Guava:</strong> Core Java libraries providing essential utilities. See
        <a href="https://github.com/google/guava" class="underline">GitHub</a>.
      </p>
      <p id="footnote-3" class="text-xs text-gray-500">
        3. <strong>Apache Commons:</strong> Java libraries offering reusable components. See
        <a href="https://github.com/apache/commons-lang" class="underline">Lang</a> and
        <a href="https://github.com/apache/commons-collections" class="underline">Collections</a> on
        GitHub.
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
    max-width: 100%; /* Ensure the table fits within the viewport */
  }
}
</style>
