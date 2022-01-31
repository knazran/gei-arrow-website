<template>
  <BackgroundWrapper>
    <div class="overflow-hidden">
      <section id="intro">
        <div class="flex">
          <div class="w-1/2 p-20">
            <h3 class="text-gei-tertiary-500 text-sm font-semibold mb-1">
              About Us
            </h3>
            <PageTitle title="Malaysia and Gender Equality" />
            <p class="text-gei-primary-400">
              Malaysia is an upper-middle-income country that is already scoring
              well in some areas of gender equality and SDG5 indicators (such as
              female student enrolment in higher education, female labour force
              participation and women in decision-making roles in the public
              sector) while lagging behind on the implementation of
              international human rights agreements, particularly with regard to
              women, girls and LGBTIQ persons.
            </p>
          </div>
          <div class="w-1/2">
            <img src="~/static/img/about-us/about-us.jpg" />
          </div>
        </div>

        <div class="mt-8 px-20 flex">
          <div class="w-1/2 pr-20">
            <p class="text-gei-primary-400">
              There are significant gaps that continue to exist in the
              implementation of constitutional provisions, laws and policies
              around gender equality in Malaysia which are mainly the result of
              a lack of governance and implementation mechanisms to hold
              duty-bearers accountable.
            </p>
          </div>
          <div class="w-1/2">
            <p class="text-gei-primary-400">
              For example, child marriage is prevalent in Malaysia and approved
              under Sharia and civil law – one of the major issues flagged in
              the CEDAW report. In theory, the fact that Malaysia acceded to
              CEDAW in 1995, should have put an end to discrimination against
              women. However, problems with the implementation of CEDAW continue
              to this day. As a signatory to CEDAW, Malaysia is reviewed by the
              UN every four years (although Malaysia did not submit the report
              periodically as stipulated).
            </p>
          </div>
        </div>
      </section>

      <section id="goals">
        <div class="flex items-center">
          <div class="w-1/2">
            <img src="~/static/img/about-us/about-us-2.jpg" />
          </div>
          <div class="w-1/2 p-20">
            <h3 class="text-gei-tertiary-500 text-sm font-semibold mb-1">
              Our Goal
            </h3>
            <PageTitle title="An Equal Malaysia" />
            <p class="text-gei-primary-400">
              To enable a wide range of Malaysian CSOs to conduct advocacy
              activities on the ratification and implementation of core
              international human rights conventions as well as o the adoption
              of the gender equality act and on the fulfilment of human rights
              of women, girls and LGBTI communities in Malaysia as well as to
              encourage broad-based public engagement with these issues.
            </p>
            <br />
            <p class="text-gei-primary-400">
              To enhance the capacities of decision-makers at state (2 states)
              and federal levels to implement the concluding observation from
              the last CEDAW review (2018) and UPR recommendations and to work
              towards fulfilling the human rights of women, girls and LGBTIQ
              communities against discrimination and violence in Malaysia, based
              on monitoring data.
            </p>
          </div>
        </div>
      </section>

      <section id="issues">
        <div class="flex flex-wrap">
          <div class="w-full mx-12">
            <PageTitle title="Key Issues" />
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 1,
                    'text-white bg-gei-tertiary-500': openTab === 1,
                  }"
                  @click="toggleTabs(1)"
                >
                  Child Marriage
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 2,
                    'text-white bg-gei-tertiary-500': openTab === 2,
                  }"
                  @click="toggleTabs(2)"
                >
                  Comprehensive Sexuality Education (CSE)
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 3,
                    'text-white bg-gei-tertiary-500': openTab === 3,
                  }"
                  @click="toggleTabs(3)"
                >
                  Discrimination towards sexual and gender minorities
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 4,
                    'text-white bg-gei-tertiary-500': openTab === 4,
                  }"
                  @click="toggleTabs(4)"
                >
                  Female Genital Mutilation
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 5,
                    'text-white bg-gei-tertiary-500': openTab === 5,
                  }"
                  @click="toggleTabs(5)"
                >
                  Sexual Reproductive Health & Rights Services.
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1">
                <a
                  class="
                    text-xs
                    font-bold
                    uppercase
                    px-5
                    py-3
                    shadow-lg
                    rounded
                    block
                    leading-normal
                    hover:text-white hover:bg-gei-tertiary-500
                  "
                  :class="{
                    'text-gei-tertiary-500 bg-white': openTab !== 6,
                    'text-white bg-gei-tertiary-500': openTab === 6,
                  }"
                  @click="toggleTabs(6)"
                >
                  Gender Based Violence
                </a>
              </li>
            </ul>
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6">
              <div class="px-4 py-8 flex-auto">
                <div class="tab-content tab-space">
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 1, block: openTab === 1 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Child Marriage
                      </h3>
                      <p class="text-gei-primary-500">
                        We are calling on the government to raise the minimum
                        age of marriage in 7 states in Malaysia to 18 years old
                        for all. (Sarawak, Pahang, Terengganu, Perlis, Negeri
                        Sembilan, Kedah and Kelantan)
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="~/static/img/about-us/issue1.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 2, block: openTab === 2 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Comprehensive Sexuality Education (CSE)
                      </h3>
                      <p class="text-gei-primary-500">
                        We want to ensure Comprehensive Sexuality Education is
                        available and accessible for all.
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="static/img/about-us/issue2.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 3, block: openTab === 3 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Discrimination towards sexual and gender minorities
                      </h3>
                      <p class="text-gei-primary-500">
                        We want to advocate for the tabling of the Gender
                        Equality Act is in place to protect sexual and gender
                        minorities in Malaysia.
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="~/static/img/about-us/issue3.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 4, block: openTab === 4 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Female Genital Mutilation
                      </h3>
                      <p class="text-gei-primary-500">
                        We want to end any form of Female Genital Mutilation/
                        Circumcision in Malaysia.
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="~/static/img/about-us/issue4.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 5, block: openTab === 5 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Sexual Reproductive Health & Rights Services.
                      </h3>
                      <p class="text-gei-primary-500">
                        We want to ensure that everyone in Malaysia can access
                        Sexual Reproductive Health & Rights without any
                        prejudice.
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="~/static/img/about-us/issue5.jpg"
                      />
                    </div>
                  </div>
                  <div
                    class="flex"
                    :class="{ hidden: openTab !== 6, block: openTab === 6 }"
                  >
                    <div class="w-1/2 pr-12">
                      <h3
                        class="text-gei-tertiary-500 font-semibold text-xl mb-4"
                      >
                        Gender Based Violence
                      </h3>
                      <p class="text-gei-primary-500">
                        Leave No One Behind, End GBV NOW!
                      </p>
                    </div>
                    <div class="w-1/2">
                      <img
                        class="rounded-lg"
                        src="~/static/img/about-us/issue5.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="targets">
        <div class="w-full p-12">
          <PageTitle
            title="Our Advocacy Targets"
            description="To reach our goal for the Gender Equality Initiative in Malaysia, we need to ensure that the target groups for our advocacy efforts reach the identified stakeholders"
          />
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="flex rounded-lg shadow-md bg-gei-secondary-200">
              <div class="w-2/5">
                <img src="~/static/img/about-us/decision maker.png" />
              </div>
              <div class="w-3/5 py-8 px-6">
                <h3 class="text-gei-primary-500 font-semibold text-lg mb-4">
                  State & National-level decision-makers
                </h3>
                <p class="text-gei-primary-500 text-sm">
                  At least 50 high-level leaders and MPs (of which 20 are
                  female), and at least 80 senior officials (35 female) at
                  relevant ministries at the state and federal level (total of
                  130)
                </p>
              </div>
            </div>
            <div class="flex rounded-lg shadow-md bg-gei-secondary-200">
              <div class="w-2/5">
                <img src="~/static/img/about-us/CSO.png" />
              </div>
              <div class="w-3/5 py-8 px-6">
                <h3 class="text-gei-primary-500 font-semibold text-lg mb-4">
                  Civil Society Organizations/Non-Governmental Individuals
                </h3>
                <p class="text-gei-primary-500 text-sm">
                  At least 150 (60 per state and 30 at federal) representatives
                  of CSOs and other relevant advocacy stakeholders, such as
                  volunteers.
                </p>
              </div>
            </div>
            <div class="flex rounded-lg shadow-md bg-gei-secondary-200">
              <div class="w-2/5">
                <img src="~/static/img/about-us/media.png" />
              </div>
              <div class="w-3/5 py-8 px-6">
                <h3 class="text-gei-primary-500 font-semibold text-lg mb-4">
                  Media Personnel
                </h3>
                <p class="text-gei-primary-500 text-sm">
                  At least 50 journalists and media professionals, media and
                  social influencers
                </p>
              </div>
            </div>
            <div class="flex rounded-lg shadow-md bg-gei-secondary-200">
              <div class="w-2/5">
                <img src="~/static/img/about-us/4.png" />
              </div>
              <div class="w-3/5 py-8 px-6">
                <h3 class="text-gei-primary-500 font-semibold text-lg mb-4">
                  General Public
                </h3>
                <p class="text-gei-primary-500 text-sm">
                  At least 3000 members of the public to be engaged in public
                  advocacy campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  data() {
    return {
      openTab: 1,
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
  },
}
</script>
