<template>
<<<<<<< HEAD
  <div>
    <button
      @click="logoutUser"
      :disabled="!Vue3GoogleOauth.isAuthorized"
      class="
        px-6
        py-2
        mt-4
        text-white
        bg-green-600
        rounded-lg
        hover:bg-gray-900
      "
    >
      Logout
    </button>
    <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
    <vue3-star-ratings :disableClick="true" v-model="state.rating" />
    <h1>{{ state.rating }}</h1>
=======
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
                v-model.trim="addProfData.lastName"
                class="
                  manrope-regular
                  input-text-field
                  sm:w-16
                  md:w-32
                  lg:w-64
                  ml-10
                  capitalize
                "
                :class="{
                  'border-red-500': v.lastName.$error,
                }"
              />
              <p
                class="ml-10 text-red-500 manrope-bold text-left text-sm"
                v-if="v.lastName.$error"
              >
                {{ v.lastName.$errors[0].$message }}
              </p>
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
                v-model.trim="addProfData.firstName"
                class="
                  manrope-regular
                  input-text-field
                  sm:w-16
                  md:w-32
                  lg:w-64
                  ml-10
                  capitalize
                "
                :class="{
                  'border-red-500': v.firstName.$error,
                }"
              />
              <p
                class="ml-10 text-red-500 manrope-bold text-left text-sm"
                v-if="v.firstName.$error"
              >
                {{ v.firstName.$errors[0].$message }}
              </p>
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
                v-model.trim="addProfData.email"
                class="
                  manrope-regular
                  input-text-field
                  sm:w-16
                  md:w-32
                  lg:w-64
                  ml-9
                  lowercase
                "
                @keyup="isValidProf"
                :class="{
                  'border-red-500': v.email.$error,
                }"
              />

              <p
                class="ml-9 text-red-500 manrope-bold text-left text-sm"
                v-if="v.email.$error"
              >
                {{ v.email.$errors[0].$message }}
              </p>
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
            <div>
              <select
                name="college"
                id="college"
                class="
                  sm:w-16
                  md:w-32
                  lg:w-64
                  ml-16
                  border-solid border-2
                  rounded-md
                  border-gray-500
                "
                :class="{
                  'border-red-500': v.college.$error,
                }"
                v-model="addProfData.college"
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
                <option value="N/A">N/A</option>
              </select>
              <p
                class="ml-16 text-red-500 manrope-bold text-left text-sm"
                v-if="v.college.$error"
              >
                {{ v.college.$errors[0].$message }}
              </p>
            </div>
          </div>

          <div class="flex mb-5">
            <label
              for="department"
              class="relative manrope-bold text-gray-600 text-md mt-2"
              >Department:</label
            >
            <div>
              <select
                name="department"
                id="department"
                class="
                  sm:w-16
                  md:w-32
                  lg:w-64
                  ml-8
                  border-solid border-2
                  rounded-md
                  border-gray-500
                "
                v-model="addProfData.department"
                :class="{ 'border-red-500': v.department.$error }"
              >
                <option selected disabled hidden>Choose One</option>

                <!-- CCS -->
                <optgroup
                  v-if="addProfData.college === 'CCS'"
                  label="College of Computer Studies"
                >
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Computer Technology">
                    Computer Technology
                  </option>
                  <option value="Software Technology">
                    Software Technology
                  </option>
                </optgroup>

                <!-- BAGCED -->
                <optgroup
                  v-if="addProfData.college === 'BAGCED'"
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
                  v-if="addProfData.college === 'RVR-COB'"
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
                  v-if="addProfData.college === 'CLA'"
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
                  v-if="addProfData.college === 'COS'"
                  label="College of Science"
                >
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                </optgroup>

                <!-- SOE  -->
                <optgroup
                  v-if="addProfData.college === 'SOE'"
                  label="School of Economics"
                >
                  <option value="School of Economics">
                    School of Economics
                  </option>
                </optgroup>

                <!-- GCOE -->
                <optgroup
                  v-if="addProfData.college === 'GCOE'"
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
                <optgroup
                  v-if="addProfData.college === 'COL'"
                  label="College of Law"
                >
                  <option value="College of Law">College of Law</option>
                </optgroup>
                <option value="N/A">N/A</option>
              </select>
              <p
                class="ml-8 text-red-500 manrope-bold text-left text-sm"
                v-if="v.department.$error"
              >
                {{ v.department.$errors[0].$message }}
              </p>
            </div>
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
                class="ml-14 input-text-field sm:w-16 md:w-32 lg:w-64 uppercase"
                v-model="newTag"
                type="text"
                @keydown.enter="addTag(newTag)"
                @keydown.prevent.tab="addTag(newTag)"
                @keydown.delete="
                  newTag.length || removeTag(addProfData.courses.length - 1)
                "
                :style="{
                  'padding-left': `${paddingLeft}px`,
                }"
                :class="{ 'border-red-500': v.courses.$error }"
              />

              <ul class="tags ml-14" ref="tagsUl">
                <li v-for="tag in addProfData.courses" :key="tag" class="tag">
                  {{ tag }}
                  <button class="delete" @click="removeTag(index)">x</button>
                </li>
              </ul>
              <p
                class="ml-14 text-red-500 manrope-bold text-left text-sm"
                v-if="v.courses.$error"
              >
                {{ v.courses.$errors[0].$message }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row-reverse">
            <p
              class="mt-20 text-red-500 manrope-bold text-center text-sm"
              v-if="state.error"
            >
              {{ state.error }}
            </p>
            <button
              class="
                px-6
                py-2
                mt-80
                mr-4
                text-white
                bg-green-600
                rounded-lg
                hover:bg-green-900
                shadow-lg
                content-center
                place-self-end
              "
              @click="addProf"
            >
              Add Professor
            </button>
          </div>
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
        @click="toggleMultipleAddProfModal"
      >
        Add Multiple Professors
      </button>
      <multipleAddProfModal
        :multipleAddProf="showMultipleAddProfModal"
        @close="toggleMultipleAddProfModal"
      >
        <p class="mt-12">
          CSV File must contain headers and follow this format: [Last Name,
          First Name, DLSU Email, College, Department, Courses]
        </p>
        <div class="mt-4 flex-col">
          <div class="flex justify-center">
            <label
              for="csv-file"
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
              >Upload CSV File</label
            >
            <input
              id="csv-file"
              name="csv-file"
              type="file"
              ref="file"
              accept=".csv"
              class="hidden"
              @change="onFileUpload"
            />
          </div>

          <div class="flex justify-center">
            <p v-if="!state.fileExisting" class="text-red-500">
              No Files Selected
            </p>
            <p v-if="state.fileExisting">
              {{ state.csvFile.name }}
            </p>
          </div>
          <p
            class="mt-8 text-red-500 manrope-bold text-center text-sm"
            v-if="state.profExisting"
          >
            {{ state.profExisting }}
          </p>
        </div>
        <button
          class="
            px-6
            py-2
            mt-48
            mr-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-900
            shadow-lg
            flex-shrink
            content-center
            place-self-end
          "
          @click="addProfsCsv"
          :disabled="!state.csvFile"
        >
          Add Multiple Professors
        </button>
      </multipleAddProfModal>
    </div>
    <br />
    <div class="flex space-x-4 ml-8 mr-8">
      <div class="flex-col text-center justify-center bg-gray-400 p-6">
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

      <div class="flex-col flex-grow overflow-y-auto scrollbar-hidden">
        <div class="grid grid-cols-5 bg-gray-400">
          <div class="text-white">Name</div>
          <div class="text-white">College</div>
          <div class="text-white">Department</div>
          <div class="text-white">Rating</div>
          <div class="text-white">Status</div>
        </div>
        <profInfo v-for="prof in state.profs" :key="prof.id" :prof="prof" />
        <!-- <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div> -->
      </div>
    </div>
>>>>>>> development
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

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}
</style>

<script>
<<<<<<< HEAD
import { inject, getCurrentInstance, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
=======
import * as api from '../api/index.js';
import NavBar from '../components/NavBar.vue';
import addProfModal from '../components/addProfessorModal.vue';
import multipleAddProfModal from '../components/multipleProfessorModal.vue';
import useVuelidate from '@vuelidate/core';
import profInfo from '../components/profInfo.vue';
import { email, required, helpers } from '@vuelidate/validators';
import { ref, watch, nextTick, onMounted, reactive, onBeforeMount } from 'vue';
>>>>>>> development

export default {
  name: 'Home',
  components: {
    NavBar,
    addProfModal,
    profInfo,
    multipleAddProfModal,
  },
  setup() {
<<<<<<< HEAD
    let state = reactive({
      rating: 0,
    });
    const app = getCurrentInstance();
    const gAuth = app.appContext.config.globalProperties.$gAuth;
    const router = useRouter();
    const store = useStore();
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    async function logoutUser() {
      console.log('hello');
=======
    const state = reactive({
      disable: null,
      error: null,
      invalidEmail: null,
      invalidFile: null,
      empty: null,
      profs: [],
      fileExisting: null,
      csvFile: null,
      profExisting: null,
    });

    const addProfData = reactive({
      lastName: null,
      firstName: null,
      email: null,
      college: 'Choose One',
      department: 'Choose One',
      courses: [],
    });

    const file = ref(null);

    const showAddProfModal = ref(false);
    const showMultipleAddProfModal = ref(false);

    const newTag = ref('');
    const paddingLeft = ref(10);
    const tagsUl = ref(null);

    // adjust cursor
    function onTagsChange() {
      // set left padding
      const extraCushion = 15;
      paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
      // scroll tags ul to end
      tagsUl.value.scrollTo(tagsUl.value.scrollWidth, 0);
    }

    watch(addProfData.courses, () => nextTick(onTagsChange), { deep: true });

    onMounted(onTagsChange);

    // add the new tag to the tags array
    function addTag(tag) {
      if (tag) {
        addProfData.courses.push(tag.toUpperCase());
        newTag.value = '';
      }
    }

    // remove the latest tag from the tags array
    function removeTag(index) {
      addProfData.courses.splice(index, 1);
    }

    // toggles add professor modal
    function toggleAddProfModal() {
      for (var elem in addProfData) {
        if (elem == 'department' || elem == 'college') {
          addProfData[elem] = 'Choose One';
        } else if (elem == 'courses') {
          addProfData[elem] = [];
        } else {
          addProfData[elem] = null;
        }
      }
      showAddProfModal.value = !showAddProfModal.value;
    }

    // toggles multiple add professor modal
    function toggleMultipleAddProfModal() {
      showMultipleAddProfModal.value = !showMultipleAddProfModal.value;
      state.csvFile = null;
      state.fileExisting = null;
      if (!showMultipleAddProfModal.value) {
        state.profExisting = false;
      }
    }

    const dlsuEmail = (value) => {
      const domain = value.split('@').pop();

      if (domain != 'dlsu.edu.ph') {
        return false;
      } else {
        return true;
      }
    };

    const notDefault = (value) => !value.includes('Choose One');

    const validName = (value) => (/^[a-zA-Z ]*$/.test(value) ? true : false);

    // initialize validation rules
    const addProfRules = {
      lastName: {
        required,
        validName: helpers.withMessage(
          'Value must contain alphabet characters.',
          validName
        ),
      },
      firstName: {
        required,
        validName: helpers.withMessage(
          'Value must contain alphabet characters.',
          validName
        ),
      },
      email: {
        email,
        required,
        dlsuEmail: helpers.withMessage(
          'Value must contain DLSU e-mail.',
          dlsuEmail
        ),
      },
      college: {
        notDefault: helpers.withMessage(
          'Value must not be default',
          notDefault
        ),
      },
      department: {
        notDefault: helpers.withMessage(
          'Value must not be default',
          notDefault
        ),
      },
      courses: { required },
    };

    // create validation object
    const v = useVuelidate(addProfRules, addProfData);
    console.log;

    async function addProf() {
      try {
        formatAddProfInputs();

        const validated = await v.value.$validate();

        if (validated) {
          const res = await api.addProf(addProfData);
          if (res) {
            state.profs.unshift(res.data);
            toggleAddProfModal();
          }
          state.error = null;
        }
      } catch (error) {
        console.log(error);
        state.error = error.response.data.message;

        state.invalidEmail = addProfData.email;
      }
    }

    function formatAddProfInputs() {
      if (addProfData.lastName && addProfData.firstName && addProfData.email) {
        addProfData.lastName = titleCase(addProfData.lastName);
        addProfData.firstName = titleCase(addProfData.firstName);
        addProfData.email = addProfData.email.toLowerCase();
      }
    }

    function titleCase(str) {
      if (str) {
        return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
      }
    }

    async function initProfs() {
      try {
        const result = await api.getAllProfs();
        state.profs = result.data;

        if (state.profs.length !== 0) {
          state.empty = false;
        } else {
          state.empty = true;
        }
      } catch (err) {
        console.log(err.response.data);
        state.empty = true;
      }
    }

    onBeforeMount(() => {
      initProfs();
    });

    function isValidProf() {
      state.error =
        addProfData.email === state.invalidEmail && state.invalidEmail != null
          ? 'Professor already exists.'
          : false;
    }

    function onFileUpload() {
      state.fileExisting = file.value.files.length != 0 ? true : false;
      if (state.fileExisting) {
        state.csvFile = file.value.files[0];
        console.log('file: ' + file.value.files[0].name);
      }
    }

    async function addProfsCsv() {
>>>>>>> development
      try {
        const tempCsv = state.csvFile;
        const formData = new FormData();
        formData.append('csv-file', tempCsv);
        const res = await api.addProfsCsv(formData);
        if (res) {
          toggleMultipleAddProfModal();
          console.log(res);
          if (res.status == 200) {
            for (let i = 0; i < res.data.length; i++) {
              state.profs.unshift(res.data[i]);
            }
          }
        }
      } catch (error) {
        state.profExisting = error.response.data.message;
        console.log(error);
      }
    }

    return {
<<<<<<< HEAD
      state,
      Vue3GoogleOauth,
      logoutUser,
=======
      toggleAddProfModal,
      toggleMultipleAddProfModal,
      showAddProfModal,
      showMultipleAddProfModal,
      newTag,
      addTag,
      removeTag,
      paddingLeft,
      tagsUl,
      addProfData,
      state,
      addProf,
      addProfsCsv,
      v,
      isValidProf,
      titleCase,
      file,
      onFileUpload,
>>>>>>> development
    };
  },
};
</script>
