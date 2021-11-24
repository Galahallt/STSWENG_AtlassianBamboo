<template>
  <div
    class="
      bg-gradient-to-tr
      via-blue-300
      from-green-500
      to-purple-to-tr
      w-full
      h-screen
      block
    "
  >
    <nav-bar />
    <!-- top navigation bar -->
    <!-- <div class="flex items-center justify-around ml-20 mr-20">
      <div class="mt-6">
        <a href="#" class="hover:underline">Home</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">View Professors</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">FAQs</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">Contact Us</a>
      </div>
    </div> -->

    <!-- <div>
      <hr class="ml-32 mr-32" />
    </div> -->

    <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
      <div>
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-900
            shadow-lg
          "
        >
          Admin Access
        </button>
      </div>
      <div>
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-900
            shadow-lg
          "
          @click="toggleAddProfModal"
        >
          Add Professor
        </button>
      </div>
      <addProfModal :addProf="showAddProfModal" @close="toggleAddProfModal">
        <div class="flex flex-col mt-10">
          <div class="flex mb-5">
            <label
              for="lastName"
              class="relative manrope-bold text-gray-600 text-md mt-4"
              >Last Name:</label
            >
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                class="manrope-regular input-text-field w-80 ml-10"
              />
            </div>
          </div>

          <div class="flex mb-5">
            <label
              for="firstName"
              class="relative manrope-bold text-gray-600 text-md mt-4"
              >First Name:</label
            >
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                class="manrope-regular input-text-field w-80 ml-10"
              />
            </div>
          </div>

          <div class="flex mb-9">
            <label
              for="email"
              class="relative manrope-bold text-gray-600 text-md mt-4"
              >DLSU Email:</label
            >
            <div>
              <input
                id="email"
                name="email"
                type="email"
                class="manrope-regular input-text-field w-80 ml-9"
              />
            </div>
          </div>

          <div class="flex mb-9">
            <label
              for="college"
              class="
                relative
                manrope-bold
                text-gray-600 text-md
                mt-2
                text-primary-blue
              "
              >College:</label
            >
            <select
              name="college"
              id="college"
              class="
                w-72
                ml-16
                border-solid border-2
                rounded-md
                border-gray-500
              "
              v-model="state.college"
            >
              <option selected disabled hidden>Choose One</option>
              <option value="BAGCED">BAGCED</option>
              <option value="CCS">CCS</option>
              <option value="COL">COL</option>
              <option value="CLA">CLA</option>
              <option value="COS">COS</option>
              <option value="GCOE">GCOE</option>
              <option value="RVR-COB">RVR-COB</option>
              <option value="SOE">SOE</option>
            </select>
          </div>

          <div class="flex mb-5">
            <label
              for="department"
              class="relative manrope-bold text-gray-600 text-md mt-2"
              >Department:</label
            >
            <select
              name="department"
              id="department"
              class="w-72 ml-8 border-solid border-2 rounded-md border-gray-500"
            >
              <option selected disabled hidden>Choose One</option>

              <!-- CCS -->
              <optgroup
                v-if="state.college === 'CCS'"
                label="College of Computer Studies"
              >
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Computer Technology">Computer Technology</option>
                <option value="Software Technology">Software Technology</option>
              </optgroup>

              <!-- BAGCED -->
              <optgroup
                v-if="state.college === 'BAGCED'"
                label="Brother Andrew Gonzales College of Education"
              >
                <option value="Counseling and Educational Psychology">
                  Counseling and Educational Psychology
                </option>
                <option value="Educational Leadership and Management">
                  Educational Leadership and Management
                </option>
                <option value="English and Applied Linguistics">
                  English and Applied Linguistics
                </option>
                <option value="Physical Education">Physical Education</option>
                <option value="Science Education">Science Education</option>
              </optgroup>

              <!-- RVR-COB -->
              <optgroup
                v-if="state.college === 'RVR-COB'"
                label="Ramon V. del Rosario College of Business"
              >
                <option value="Accountancy">Accountancy</option>
                <option value="Commercial Law">Commercial Law</option>
                <option value="Decision Sciences and Innovation">
                  Decision Sciences and Innovation
                </option>
                <option value="Management of Financial Institutions">
                  Management of Financial Institutions
                </option>
                <option value="Management and Organization">
                  Management and Organization
                </option>
                <option value="Marketing Management">
                  Marketing Management
                </option>
              </optgroup>

              <!-- CLA -->
              <optgroup
                v-if="state.college === 'CLA'"
                label="College of Liberal Arts"
              >
                <option value="Behavioral Science">Behavioral Science</option>
                <option value="Communication">Communication</option>
                <option value="Filipino">Filipino</option>
                <option value="History">History</option>
                <option value="International Studies">
                  International Studies
                </option>
                <option value="Literature">Literature</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Political Science">Political Science</option>
                <option value="Psychology">Psychology</option>
                <option value="Theology and Religious Education">
                  Theology and Religious Education
                </option>
              </optgroup>

              <!-- COS -->
              <optgroup
                v-if="state.college === 'COS'"
                label="College of Science"
              >
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
              </optgroup>

              <!-- SOE  -->
              <optgroup
                v-if="state.college === 'SOE'"
                label="School of Economics"
              >
                <option value="School of Economics">School of Economics</option>
              </optgroup>

              <!-- GCOE -->
              <optgroup
                v-if="state.college === 'GCOE'"
                label="Gokongwei College of Engineering"
              >
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electronics and Communications Engineering">
                  Electronics and Communications Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Industrial Engineering">
                  Industrial Engineering
                </option>
                <option value="Manufacturing Engineering and Management">
                  Manufacturing Engineering and Management
                </option>
              </optgroup>

              <!-- COL -->
              <optgroup v-if="state.college === 'COL'" label="College of Law">
                <option value="College of Law">College of Law</option>
              </optgroup>
              <option value="N/A">N/A</option>
            </select>
          </div>

          <div class="flex">
            <label
              for="courses"
              class="relative manrope-bold text-gray-600 text-md mt-4"
              >Courses:</label
            >
            <div class="tag-div">
              <input
                name="courses"
                class="ml-14 input-text-field w-80"
                v-model="newTag"
                type="text"
                @keydown.enter="addTag(newTag)"
                @keydown.prevent.tab="addTag(newTag)"
                @keydown.delete="newTag.length || removeTag(tags.length - 1)"
                :style="{ 'padding-left': `${paddingLeft}px` }"
              />
              <ul class="tags ml-14" ref="tagsUl">
                <li v-for="tag in tags" :key="tag" class="tag">
                  {{ tag }}
                  <button class="delete" @click="removeTag(index)">x</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex">
          <button
            class="
              px-6
              py-2
              mt-4
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
              flex-shrink
              content-center
              update-btn
            "
          >
            Add Professor
          </button>
        </div>
      </addProfModal>
      <button
        class="
          px-6
          py-2
          mt-4
          text-white
          bg-green-600
          rounded-lg
          hover:bg-green-900
          shadow-lg
        "
      >
        Add Multiple Professors
      </button>
    </div>
    <br />
    <div class="flex space-x-4 ml-8 mr-8">
      <div class="flex-col items-center justify-center bg-gray-400 p-6">
        <div>
          <label class="text-white underline">FILTER BY</label>
        </div>
        <div>
          <label>College</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <label>Department</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <label>Course</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <button
            class="
              px-6
              py-2
              mt-4
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
            "
          >
            Modify Filter
          </button>
        </div>
      </div>

      <br />

      <div class="flex-col flex-grow">
        <div class="grid grid-cols-4 bg-gray-400">
          <div class="text-white">Name</div>
          <div class="text-white">College</div>
          <div class="text-white">Department</div>
          <div class="text-white">Rating</div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.input-text-field {
  outline: 0;
  border-width: 0 0 2px;
  border-bottom-color: #c4c4c4;
  width: 48rem;
  height: 3rem;
}

.update-btn {
  position: absolute;
  background-color: #0f4c81;
  color: white;
  border-radius: 20px;
  bottom: 15px;
  width: 50%;
  left: 25%;
  height: 3rem;
  vertical-align: middle;
  outline: none;
}

.manrope-bold {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
}

.manrope-extrabold {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  max-width: 55%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
}

.tag-div {
  position: relative;
}

.tag-input {
  width: 100%;
  padding: 5px;
}

.tag {
  --tw-bg-opacity: 1;
  background-color: rgba(5, 150, 105, var(--tw-bg-opacity));
  padding: 5px;
  border-radius: 4px;
  color: white;
  white-space: nowrap;
  transition: 0.1s ease background;
}

.delete {
  color: white;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>

<script>
import NavBar from '../components/NavBar.vue';
import addProfModal from '../components/addProfessorModal.vue';

import { ref, watch, nextTick, onMounted, reactive } from 'vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    addProfModal,
  },
  setup(props) {
    const state = reactive({
      college: 'Choose One',
      deparment: 'Choose One',
    });

    const showAddProfModal = ref(false);

    const tags = ref([]);
    const newTag = ref('');
    const paddingLeft = ref(10);
    const tagsUl = ref(null);

    function onTagsChange() {
      // set left padding
      const extraCushion = 15;
      paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
      // scroll tags ul to end
      tagsUl.value.scrollTo(tagsUl.value.scrollWidth, 0);
    }

    watch(tags, () => nextTick(onTagsChange), { deep: true });

    onMounted(onTagsChange);

    function addTag(tag) {
      tags.value.push(tag); // add the new tag to the tags array
      newTag.value = '';
      console.log(tags.value);
    }

    function removeTag(index) {
      tags.value.splice(index, 1);
    }

    function toggleAddProfModal() {
      showAddProfModal.value = !showAddProfModal.value;
      console.log(showAddProfModal.value);
    }

    return {
      toggleAddProfModal,
      showAddProfModal,
      tags,
      newTag,
      addTag,
      removeTag,
      paddingLeft,
      tagsUl,
      state,
    };
  },
};
</script>
