<template>
  <div
    class="mt-4 prose w-full lg:w-3/5 xl:w-2/5 m-auto flex flex-col items-center text-base-content"
  >
    <h2 class="text-center">{{ item.title }}</h2>
    <section class="mt-0 font-medium">
      <p>
        Java distingueshes checked and unchecked exceptions. The major difference is, that checked
        exceptions need to be declared as part of the method signature and the compiler forces the
        caller to implement exception handling.
      </p>
      <p>
        When designing exceptional process flows, I mainly follow this guideline from Effective
        Java.
      </p>
      <h3 class="mt-0">Can the process recover from this exception? (Effective Java)</h3>
      <ul>
        <li>Yes, it can recover → Throw checked exception</li>
        <li>No, the process has to stop → Throw unchecked exception</li>
      </ul>
      <h3>Where to place exception handling? (software design?)</h3>
      <p>
        Unchecked exceptions do not need to be catched immediately by the caller. Try Catch blocks
        decrease readability. Therefore, it is advisable to have a dedicated class for error
        handling. Frameworks like Spring-Boot offer the
        <code>@ControllerAdvice</code> class. It is meant to catch and log exceptions, before
        responding to the client.
      </p>
      <h3>Rethrowing checked- as unchecked exceptions</h3>
      <p>
        Often an external library forces the handling of a checked exception on you. Should you
        decide that it is not recoverable, you can rethrow it as unchecked. Otherwise the checked
        exception has to be thrown through the whole calling hierarchy, polluting the signatures.
      </p>

      <h3>How to rethrow a checked exception as unchecked</h3>
      <ul>
        <li>Package the original exception (Java by comparison)</li>
        <li>Pass variables too</li>
        <li>Dont throw RuntimeException</li>
        <li>Provide good message</li>
      </ul>
      <p></p>
    </section>

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
