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
      <p>Main guidelines from my favourite books and personal experience.</p>
      <ul>
        <li>frequent try-catch blocks decrease readability</li>
        <li>have a dedicated unit for error handling</li>
        <li>favor unchecked over checked exceptions</li>
        <li>consider rethrowing checked exceptions as unchecked, to avoid signature pollution</li>
      </ul>
      <h2 class="mt-0">Checked or Unchecked?(Effective Java)</h2>
      <p>I mainly follow this question from Effective Java.</p>

      <p class="underline italic">Can the process recover from this exception?</p>
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
        exception has to be thrown through the whole calling hierarchy, polluting the signatures.
      </p>

      <h2 class="mt-0">Where to place exception handling? (software design?)</h2>
      <p></p>
      <p>
        Readability of a process is one of my top priorities, therefore I would like to reduce
        unnecessary exception handling. Since unchecked exceptions do not need to be caught
        immediately by the caller, it is advisable to have a dedicated class for exception handling.
        Frameworks like Spring Boot offer the <code>@ControllerAdvice</code> class. It is meant to
        catch and <span class="underline">log exceptions</span> prior to responding to the client.
      </p>
    </section>

    <section class="mt-0 font-medium">
      <h2 class="mt-0">Example of rethrowing a checked exception as unchecked</h2>
      <p>
        This code snippet calls an external Api. It can be called either by single or batch request.
        The Api call throws a checked exception, which is simply rethrown as unchecked.
      </p>
      <ul>
        <li>
          Batch requests have the requirement, that single failures should not stop the whole
          import.
        </li>
        <li>
          The process for single request only, should not be recoverable. The exception is thrown
          further up the callstack. If the single request process was invoked by a http call, it is
          handled in the <code>@ControllerAdvice</code>.
        </li>
      </ul>
    </section>
    <div class="mockup-code not-prose mb-4 overflow-x-auto">
      <code>
        <pre>
public List&lt;Location> requestWeatherForBatch(List&lt;Location> locations) {
    checkArgument(CollectionUtils.isNotEmpty(locations), "locations are required");
    return locations.stream()
        .map(location -> {
          try {
            return requestWeather(location);
          } catch (Exception e) {
            // single failures should not stop the batch import
            log.error("Import failed for locationId: {}", location.locationId(), e);
            return null;
          }
        })
        .filter(Objects::nonNull)
        .toList();
  }

  public Location requestWeather(Location location) {
    requireNonNull(location, "location is required");
    var response = requireNonNull(request(location), "response is required");
    var body = requireNonNull(response.getBody(), "body is required");
    return openWeatherApiMapper.mapToLocation(body, location);
  }

  private ResponseEntity&lt;GeneratedOpenWeatherApiResponse> request(Location location) {
    try {
      // throws checked WebClientResponseException
      return generatedOpenWeatherApi.getCurrentWeatherWithHttpInfo(
          location.latitude(), location.longitude(), "metric", appId).block();
    } catch (Exception e) {
      // rethrow as unchecked OpenWeatherApiRequestException, minimize exception handling
      throw new OpenWeatherApiRequestException("Exception during OpenWeatherApi request.", e);
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
