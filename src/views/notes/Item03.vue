<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h1 class="text-center">{{ item.title }}</h1>
    <section class="mt-0 font-medium">
      <p>
        Java distinguishes between checked and unchecked exceptions. The major difference is that
        checked exceptions need to be declared as part of the method signature, and the compiler
        forces the caller to either catch or declare these exceptions in the method's throws clause.
      </p>
      <p>Guidelines from my favourite books and personal experience.</p>
      <ul>
        <li>too many try-catch blocks decrease readability</li>
        <li>have a dedicated unit for error handling</li>
        <li>mostly favor unchecked over checked exceptions</li>
        <li>avoid signature pollution, by rethrowing checked exceptions as unchecked</li>
        <li>
          <a href="#footnote-1" class="underline"
            >consider replacing exceptions with optionals<sup>1</sup></a
          >
        </li>
      </ul>

      <h2 class="mt-0">Checked or Unchecked?</h2>
      <p>
        <a href="#footnote-2" class="underline"
          >Can the process recover from this exception?<sup>2</sup></a
        >
      </p>
      <ul>
        <li>Yes, it can recover → Throw checked exception</li>
        <li>No, the process has to stop/rollback → Throw unchecked exception</li>
      </ul>
      <p>
        Throwing a checked exception forces the caller to catch and implement a exceptional process
        flow.
      </p>
      <h2 class="mt-0">Rethrowing checked- as unchecked exceptions</h2>
      <p>
        Often an external library forces the handling of a checked exception on us. Should you
        decide that it is not recoverable, it can be rethrown as unchecked. Otherwise the checked
        exception has to be thrown through the whole calling hierarchy,
        <a href="#footnote-3" class="underline">polluting the signatures.<sup>3</sup></a>
      </p>

      <h2 class="mt-0">Common place for exception handling</h2>
      <p></p>
      <p>
        I would like to improve readability by avoiding unnecessary exception handling. Since
        unchecked exceptions do not need to be caught immediately, it is advisable to have a
        <a href="#footnote-4" class="underline"
          >dedicated class for exception handling<sup>4</sup></a
        >. Spring-Boot offers the <code>@ControllerAdvice</code> annotation, to specify exception
        handling classes. This class is meant to catch and log exceptions prior to handling the
        client response.
      </p>
    </section>

    <section class="mt-0 font-medium">
      <h2 class="mt-0">Example exception handling</h2>
      <p>
        This code snippet calls an external Api. It can be called either by single or batch request.
        On failure call throws a checked OpenWeatherApiRequestException.
      </p>
      <ul>
        <li>Single requests might fail.</li>
        <li>On batch requests, single failures should not stop the whole import.</li>
      </ul>
    </section>

    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <code>
        <pre>
public List&lt;Location> requestWeatherForBatch(List&lt;Location> locations) {
    return locations.stream()
        .map(location -> {
          try {
            return requestWeather(location);
          } catch (OpenWeatherApiRequestException e) {
            // single failure are recoverable and should not stop the batch import
            log.error("Import failed for locationId: {}", location.locationId(), e);
            return null;
          }
        })
        .filter(Objects::nonNull)
        .toList();
  }

  public Location requestWeather(Location location) {
    // failure is not recoverable, OpenWeatherApiRequestException propagates to @ControllerAdvice
    var body = request(location).getBody();
    return openWeatherApiMapper.mapToLocation(body, location);
  }

  private ResponseEntity&lt;GeneratedOpenWeatherApiResponse> request(Location location) {
    try {
      // throws checked WebClientResponseException
      return generatedOpenWeatherApi.getCurrentWeatherWithHttpInfo(location.latitude(), location.longitude()).block();
    } catch (WebClientResponseException e) {
      // rethrow as unchecked OpenWeatherApiRequestException, avoid signature pollution
      throw new OpenWeatherApiRequestException(
          String.format("Exception during OpenWeatherApi request. locationId: %s", location.locationId()), e);
    }
  }
          </pre
        >
      </code>
    </div>

    <div class="divider divider-info mb-0">Footnotes</div>

    <!-- Footnotes -->
    <div class="mb-6">
      <p id="footnote-1" class="text-xs text-gray-500">
        1. <strong>Item 55: Return optionals judiciously</strong> - J. Bloch, Effective Java,
        Edition 3, 2018, p. 249
      </p>
      <p id="footnote-2" class="text-xs text-gray-500">
        2.
        <strong
          >Item 70: Use exceptions for recoverable conditions and runtime exceptions for programming
          errors</strong
        >
        - J. Bloch, Effective Java, Edition 3, 2018, p. 296
      </p>
      <p id="footnote-3" class="text-xs text-gray-500">
        3.
        <strong>Error Handling: Use Unchecked Exceptions</strong> - Robert C. Martin, Clean Code,
        2009, p. 107
      </p>
      <p id="footnote-4" class="text-xs text-gray-500">
        4.
        <strong>10.7 Exception aggregation</strong> - John Ousterhout, A philoshophy of software
        design, Edition 2, 2022, p. 84
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
