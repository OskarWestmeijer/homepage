<template>
    <div
      class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
    >
      <h2 class="text-center">Item01: Validation libraries in Java</h2>
      <section class="mt-0 font-medium">
        <p>
          Input parameter validation is important to avoid unexpected side-effects. I mostly apply
          validations on:
        </p>
        <ul>
          <li>Constructors</li>
          <li>Public methods</li>
          <li>Especially mutating public methods</li>
        </ul>
        <p>
          Validations improve safety and force me to write better tests. Another welcoming benefit is
          that they document the code. Thrown error messages should contain useful information.
        </p>
        <p>
          Instead of writing an own implementation, use well maintained libraries like Guava or Apache
          Commons. They offer plenty of useful static methods.
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
                Throws NullPointerException if reference is null. Otherwise returns the passed Object.
              </td>
            </tr>
            <tr>
              <td><code>Preconditions.checkArgument(boolean expression)</code></td>
              <td><code>com.google.common.base</code> (Guava)</td>
              <td>
                Throws IllegalArgumentException if condition is not met. Place other valdiation calls
                inside.
              </td>
            </tr>
            <tr>
              <td><code>CollectionUtils.isNotEmpty(Collection<> col)</code></td>
              <td><code>org.apache.commons.collections4</code> (Apache Commons)</td>
              <td>
                Returns a boolean and is able to handle null inputs. Therefore it is more flexible
                than a regular !isEmpty().
              </td>
            </tr>
            <tr>
              <td><code>StringUtils.isNumeric(CharSequence cs)</code></td>
              <td><code>org.apache.commons.lang3</code> (Apache Commons)</td>
              <td>Returns a boolean and is able to handle null inputs.</td>
            </tr>
            <tr>
              <td><code>Strings.isNullOrEmpty(String string)</code></td>
              <td><code>com.google.common.base</code> (Guava)</td>
              <td>Returns a boolean and is able to handle null inputs.</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <p class="font-medium">Validating a Java record during construction.</p>
  
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
    </div>
  </template>
  
  <style scoped>
  @media (max-width: 768px) {
    .overflow-x-auto {
      overflow-x: auto;
      max-width: 100%; /* Ensure the table fits within the viewport */
    }
  }
  </style>
  