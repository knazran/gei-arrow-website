<template>
  <BackgroundWrapper color="beige">
    <div class="container mx-auto">
      <div class="p-8 md:p-20">
        <div class="md:flex">
          <div class="md:w-2/3">
            <h3
              class="
                text-center
                md:text-left
                text-gei-tertiary-500 text-sm
                font-semibold
                mb-1
                font-sari
              "
            >
              Key Issue
            </h3>
            <PageTitle :title="issue.title" />
            <!-- <p class="text-gei-primary-400">
              {{ issue.subtitle }}
            </p> -->
          </div>
        </div>

        <div
          class="
            my-4
            py-4
            border
            border-b-0
            border-l-0
            border-r-0
            border-t-2
            border-gei-tertiary-500
          "
        >
          <nuxt-content
            class="prose prose-gei prose-md max-w-none"
            :document="issue"
          />

          <div v-if="issue.next_issue" class="mt-20 flex items-end justify-end" >
            <NuxtLink :to="issue.next_issue_link">
              <button
                class="
                  text-left text-sm
                  bg-gei-tertiary-500
                  text-white
                  rounded-md
                  py-1
                  px-2
                  font-sari
                "
              >
                <p>Next Issue:</p>
                <p>{{issue.next_issue}}</p>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let issue
    try {
      issue = await $content('key-issues', params.slug).fetch()
    } catch (e) {
      error({ message: 'Page not found' })
    }

    return {
      issue,
    }
  },
}
</script>
