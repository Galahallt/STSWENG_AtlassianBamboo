<template>
  <div class="background_all home-container">
    <nav-bar />

    <div class="grid grid-cols-10" v-if="state.render != null">
      <div class="col-span-2 ml-10 mt-6 text-2xl font-bold hello_color">
        Hello, {{ user.firstName }}
      </div>
      <div
        class="col-span-8 flex space-x-4 space-x-reverse flex-row-reverse mr-8"
      >
        <div v-if="state.isAdministrator">
          <router-link :to="`/adminlist`">
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
              name="adminAccessBtn"
            >
              Admin Access
            </button>
          </router-link>
        </div>
        <div>
          <button
            data-test="addProfessorButton"
            name="addProfessorButton"
            class="
              px-6
              py-2
              mt-4
              text-white
              dark_green
              rounded-lg
              hover:bg-green-900
              shadow-lg
            "
            @click="toggleAddProfModal"
          >
            <svg
              width="18"
              height="18"
              viewBox="4 2 16 24 "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="inline-flex items-center"
            >
              <path
                d="M12 12H4M12 20V12V20ZM12 12V4V12ZM12 12H20H12Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Single Instructor
          </button>
        </div>
        <addProfModal :addProf="showAddProfModal" @close="toggleAddProfModal">
          <div class="flex flex-col mt-6">
            <div class="flex mb-5 justify-center">
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
                    px-2
                  "
                  :class="{
                    'border-red-500': v.lastName.$error,
                  }"
                />
                <p
                  class="
                    ml-10
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    lastname_error
                  "
                  v-if="v.lastName.$error"
                >
                  {{ v.lastName.$errors[0].$message }}
                </p>
              </div>
            </div>

            <div class="flex mb-5 justify-center">
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
                    px-2
                  "
                  :class="{
                    'border-red-500': v.firstName.$error,
                  }"
                />
                <p
                  class="
                    ml-10
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    firstname_error
                  "
                  v-if="v.firstName.$error"
                >
                  {{ v.firstName.$errors[0].$message }}
                </p>
              </div>
            </div>

            <div class="flex mb-9 justify-center">
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
                    px-2
                  "
                  @keyup="isValidProf"
                  :class="{
                    'border-red-500': v.email.$error,
                  }"
                />

                <p
                  class="
                    ml-9
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    email_error
                  "
                  v-if="v.email.$error"
                >
                  {{ v.email.$errors[0].$message }}
                </p>
              </div>
            </div>

            <div class="flex mb-9 justify-center">
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
                    mt-2
                    border-solid border-2
                    rounded-md
                    border-gray-500
                    college_select
                  "
                  :class="{
                    'border-red-500': v.college.$error,
                  }"
                  v-model="addProfData.college"
                  @change="checkAddCollege"
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
                  class="
                    ml-16
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    college_error
                  "
                  v-if="v.college.$error"
                >
                  {{ v.college.$errors[0].$message }}
                </p>
              </div>
            </div>

            <div class="flex mb-5 justify-center">
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
                    department_select
                    mt-1
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
                    <option
                      v-for="dept in colleges.CCS"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- BAGCED -->
                  <optgroup
                    v-if="addProfData.college === 'BAGCED'"
                    label="Brother Andrew Gonzales College of Education"
                  >
                    <option
                      v-for="dept in colleges.BAGCED"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- RVR-COB -->
                  <optgroup
                    v-if="addProfData.college === 'RVR-COB'"
                    label="Ramon V. del Rosario College of Business"
                  >
                    <option
                      v-for="dept in colleges.RVRCOB"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- CLA -->
                  <optgroup
                    v-if="addProfData.college === 'CLA'"
                    label="College of Liberal Arts"
                  >
                    <option
                      v-for="dept in colleges.CLA"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- COS -->
                  <optgroup
                    v-if="addProfData.college === 'COS'"
                    label="College of Science"
                  >
                    <option
                      v-for="dept in colleges.COS"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- SOE  -->
                  <optgroup
                    v-if="addProfData.college === 'SOE'"
                    label="School of Economics"
                  >
                    <option
                      v-for="dept in colleges.SOE"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- GCOE -->
                  <optgroup
                    v-if="addProfData.college === 'GCOE'"
                    label="Gokongwei College of Engineering"
                  >
                    <option
                      v-for="dept in colleges.GCOE"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <!-- COL -->
                  <optgroup
                    v-if="addProfData.college === 'COL'"
                    label="College of Law"
                  >
                    <option
                      v-for="dept in colleges.COL"
                      :value="dept"
                      :key="dept"
                    >
                      {{ dept }}
                    </option>
                  </optgroup>

                  <option value="N/A">N/A</option>
                </select>
                <p
                  class="
                    ml-8
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    department_error
                  "
                  v-if="v.department.$error"
                >
                  {{ v.department.$errors[0].$message }}
                </p>
              </div>
            </div>

            <div class="flex justify-center">
              <label
                for="courses"
                class="relative manrope-bold text-gray-600 text-md mt-4"
                >Courses:</label
              >
              <div class="tag-div">
                <input
                  name="courses"
                  class="
                    ml-14
                    input-text-field
                    sm:w-16
                    md:w-32
                    lg:w-64
                    uppercase
                    courses_input
                    px-2
                  "
                  v-model.trim="newTag"
                  type="text"
                  @keydown.enter="addTag(newTag)"
                  @keydown.prevent.tab="addTag(newTag)"
                  @keydown.delete="
                    newTag.length || removeTag(addProfData.courses.length - 1)
                  "
                  :style="{
                    'padding-left': `${paddingLeft}px`,
                  }"
                  :class="{
                    'border-red-500': v.courses.$error || state.tagValidation,
                  }"
                />

                <ul class="tags ml-14" ref="tagsUl">
                  <li
                    v-for="(tag, index) in addProfData.courses"
                    :key="tag"
                    class="tag"
                  >
                    {{ tag }}
                    <button class="delete" @click="removeTag(index)">x</button>
                  </li>
                </ul>
                <p
                  class="
                    ml-14
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    courses_error
                  "
                  v-if="v.courses.$error"
                >
                  {{ v.courses.$errors[0].$message }}
                </p>
                <p
                  class="
                    ml-14
                    text-red-500
                    manrope-bold
                    text-left text-sm
                    courses_error
                  "
                  v-if="state.tagValidation"
                >
                  Each course should contain at least 7 characters.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <p
                class="
                  mt-20
                  text-red-500
                  manrope-bold
                  text-center text-sm
                  professor_error
                "
                v-if="state.error"
              >
                {{ state.error }}
              </p>
              <button
                name="confirm_addProfessorBtn"
                class="
                  px-6
                  py-2
                  mt-20
                  mr-4
                  w-40
                  text-white
                  dark_green
                  rounded-lg
                  hover:bg-green-900
                  shadow-lg
                  content-center
                  place-self-center
                "
                @click="addProf"
              >
                Submit
              </button>
            </div>
          </div>
        </addProfModal>
        <button
          name="addMultipleProfessorsButton"
          class="
            px-6
            py-2
            mt-4
            text-white
            dark_green
            rounded-lg
            hover:bg-green-900
            shadow-lg
            flex
          "
          @click="toggleMultipleAddProfModal"
        >
          <svg
            width="18"
            height="18"
            viewBox="4 0 24 15 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex items-center"
          >
            <path
              d="M12 12H4M12 20V12V20ZM12 12V4V12ZM12 12H20H12Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <div>Multiple Instructors</div>
        </button>
        <multipleAddProfModal
          :multipleAddProf="showMultipleAddProfModal"
          @close="toggleMultipleAddProfModal"
        >
          <p
            class="
              mt-8
              px-10
              multiple_prof_color
              font-semibold
              text-center text-lg
            "
          >
            Multiple professors may be added through a CSV file upload.
          </p>
          <p class="mt-6 px-10 multiple_prof_color text-sm text-center">
            CSV File must contain headers and follow this format:
          </p>
          <p class="px-10 multiple_prof_color text-sm text-center">
            [Last Name, First Name, DLSU Email, College, Department, Courses]
          </p>
          <div class="mt-4 flex-col">
            <div class="flex justify-center">
              <label
                for="csv-file"
                class="
                  px-6
                  py-2
                  mt-4
                  text-green-600
                  bg-white
                  rounded-lg
                  border-2 border-green-600
                  hover:bg-gray-200
                  shadow-lg
                  mb-1
                "
                >Select CSV File</label
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
              v-if="state.fileValidation"
              class="mt-8 text-red-500 text-center manrope-bold text-sm"
            >
              Only .csv files are allowed.
            </p>
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
              mt-10
              text-white
              dark_green
              rounded-lg
              hover:bg-green-900
              shadow-lg
              flex-shrink
              content-center
              place-self-center
              w-36
            "
            @click="addProfsCsv"
            :disabled="!state.csvFile || state.fileValidation"
          >
            Submit
          </button>
        </multipleAddProfModal>
        <div>
          <!-- Search bar -->
          <div class="text-gray-600 lg:block hidden mt-4">
            <input
              class="
                border-2 border-gray-300
                bg-white
                h-10
                pl-2
                pr-8
                rounded-lg
                text-sm
                w-80
                focus:outline-none
              "
              type="search"
              name="search"
              placeholder="Search for an instructor"
              v-model.trim="state.search"
              @keyup="searchProfs"
            />
            <button type="submit">
              <svg
                class="text-green-600 h-4 w-4 fill-current -ml-7"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="flex space-x-4 ml-8 mr-8">
      <div class="flex-col text-center dark_green p-6 rounded-lg">
        <div>
          <label class="text-white text-lg">FILTER BY</label>
        </div>
        <div class="white_line mb-6 mx-5"></div>
        <div class="mb-1">
          <label class="text-white">COLLEGE</label>
        </div>
        <div>
          <select
            class="rounded-lg w-44 h-8 pl-2"
            v-model="state.filterCol"
            @change="checkFilterCollege"
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
        </div>
        <div class="mt-6 mb-1">
          <label class="text-white">DEPARTMENT</label>
        </div>
        <div>
          <select class="rounded-lg w-44 h-8 pl-2" v-model="state.filterDept">
            <option selected disabled hidden>Choose One</option>
            <!-- CCS -->
            <optgroup
              v-if="state.filterCol === 'CCS'"
              label="College of Computer Studies"
            >
              <option v-for="dept in colleges.CCS" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- BAGCED -->
            <optgroup
              v-if="state.filterCol === 'BAGCED'"
              label="Brother Andrew Gonzales College of Education"
            >
              <option v-for="dept in colleges.BAGCED" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- RVR-COB -->
            <optgroup
              v-if="state.filterCol === 'RVR-COB'"
              label="Ramon V. del Rosario College of Business"
            >
              <option v-for="dept in colleges.RVRCOB" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- CLA -->
            <optgroup
              v-if="state.filterCol === 'CLA'"
              label="College of Liberal Arts"
            >
              <option v-for="dept in colleges.CLA" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- COS -->
            <optgroup
              v-if="state.filterCol === 'COS'"
              label="College of Science"
            >
              <option v-for="dept in colleges.COS" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- SOE  -->
            <optgroup
              v-if="state.filterCol === 'SOE'"
              label="School of Economics"
            >
              <option v-for="dept in colleges.SOE" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- GCOE -->
            <optgroup
              v-if="state.filterCol === 'GCOE'"
              label="Gokongwei College of Engineering"
            >
              <option v-for="dept in colleges.GCOE" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <!-- COL -->
            <optgroup v-if="state.filterCol === 'COL'" label="College of Law">
              <option v-for="dept in colleges.COL" :value="dept" :key="dept">
                {{ dept }}
              </option>
            </optgroup>

            <option value="N/A">N/A</option>
          </select>
        </div>
        <div class="mt-6 mb-1">
          <label class="text-white">COURSE CODE</label>
        </div>
        <div>
          <input
            id="filterCourse"
            name="filterCourse"
            type="text"
            v-model.trim="state.filterCourse"
            class="manrope-regular rounded-lg w-44 h-8 pl-2 pr-2"
          />
        </div>
        <div class="mt-8">
          <button
            class="
              px-8
              py-2
              text-green-600
              bg-white
              rounded-lg
              border-2 border-green-600
              hover:bg-gray-200
              shadow-lg
            "
            @click="filterProfs"
          >
            Submit
          </button>
        </div>
        <div class="mt-3">
          <button
            class="
              px-10
              py-2
              text-green-600
              bg-white
              rounded-lg
              border-2 border-green-600
              hover:bg-gray-200
              shadow-lg
            "
            @click="clearFilter"
          >
            Clear
          </button>
        </div>
      </div>

      <br />
      <p
        v-if="state.empty"
        class="mt-20 text-red-500 manrope-bold text-center text-sm"
      >
        No results.
      </p>
      <div
        class="flex-col flex-grow overflow-y-auto scrollbar-hidden"
        v-if="!state.empty"
      >
        <div class="grid grid-cols-9 dark_green py-1">
          <div class="text-white px-1 col-span-1">Name</div>
          <div class="text-white px-1 col-span-1">College</div>
          <div class="text-white px-1 col-span-3">Department</div>
          <div class="text-white px-1 col-span-1">Rating</div>
          <div class="text-white px-1 col-span-1">Status</div>
          <div class="text-white px-1 col-span-2">Course Codes</div>
        </div>
        <profInfo
          v-for="prof in state.shownProfs"
          :key="prof.id"
          :prof="prof"
          v-bind:name="'prof-' + prof.email"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap');

.background_all {
  background-color: #edfff7;
  height: 100vh;
}

.home-container {
  font-family: 'Manrope', sans-serif;
  background-color: var(--light-green);
  color: var(--gray);
}

.multiple_prof_color {
  color: #546681;
}

.dark_green {
  background-color: #37b47e;
}

.hello_color {
  color: #546681;
}

.white_line {
  border-bottom: 1px solid white;
}

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
  max-width: 75%;
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
import * as api from '../api/index.js';
import NavBar from '../components/NavBar.vue';
import addProfModal from '../components/addProfessorModal.vue';
import multipleAddProfModal from '../components/multipleProfessorModal.vue';
import useVuelidate from '@vuelidate/core';
import profInfo from '../components/profInfo.vue';
import { email, required, helpers } from '@vuelidate/validators';
import { ref, watch, nextTick, onMounted, reactive, onBeforeMount } from 'vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    addProfModal,
    profInfo,
    multipleAddProfModal,
  },
  setup() {
    const state = reactive({
      disable: null,
      error: null,
      invalidEmail: [],
      invalidFile: null,
      empty: null,
      allProfs: [],
      shownProfs: [],
      filterProfs: [],
      searchProfs: [],
      fileExisting: null,
      csvFile: null,
      fileValidation: null,
      profExisting: null,
      filterDept: 'Choose One',
      filterCourse: '',
      filterCol: 'Choose One',
      isAdministrator: false,
      search: null,
      tagValidation: false,
      render: null,
    });

    const user = reactive({
      firstName: JSON.parse(localStorage.getItem('user')).givenName.split(
        ' '
      )[0],
      email: JSON.parse(localStorage.getItem('user')).email,
    });

    const addProfData = reactive({
      lastName: null,
      firstName: null,
      email: null,
      college: 'Choose One',
      department: 'Choose One',
      courses: [],
    });

    const colleges = {
      BAGCED: [
        'Counseling and Educational Psychology',
        'Educational Leadership and Management',
        'English and Applied Linguistics',
        'Physical Education',
        'Science Education',
      ],
      CCS: [
        'Information Technology',
        'Computer Technology',
        'Software Technology',
      ],
      COL: ['College of Law'],
      CLA: [
        'Behavioral Science',
        'Communication',
        'Filipino',
        'History',
        'International Studies',
        'Literature',
        'Philosophy',
        'Political Science',
        'Psychology',
        'Theology and Religious Education',
      ],
      COS: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
      GCOE: [
        'Chemical Engineering',
        'Civil Engineering',
        'Electronics and Communications Engineering',
        'Mechanical Engineering',
        'Industrial Engineering',
        'Manufacturing Engineering and Management',
      ],
      RVRCOB: [
        'Accountancy',
        'Commercial Law',
        'Decision Sciences and Innovation',

        'Management of Financial Institutions',

        'Management and Organization',

        'Marketing Management',
      ],
      SOE: ['School of Economics'],
    };

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

    watch(
      () => addProfData.courses,
      () => nextTick(onTagsChange),
      { deep: true }
    );

    onMounted(onTagsChange);

    // add the new tag to the tags array
    async function addTag(tag) {
      if (tag) {
        addProfData.courses.push(tag.toUpperCase());
        newTag.value = '';
        checkTags();
      }
    }

    // remove the latest tag from the tags array
    function removeTag(index) {
      addProfData.courses.splice(index, 1);
      checkTags();
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
      state.tagValidation = false;
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
      courses: {
        required,
      },
    };

    // create validation object
    const v = useVuelidate(addProfRules, addProfData);

    async function addProf() {
      try {
        formatAddProfInputs();

        const validated = await v.value.$validate();

        if (validated && !state.tagValidation) {
          const res = await api.addProf(addProfData);
          if (res) {
            state.allProfs.push(res.data);
            clearFilter();
            state.shownProfs = state.allProfs;
            state.shownProfs.sort(compareLastName);

            toggleAddProfModal();

            if (state.allProfs.length !== 0) {
              state.empty = false;
            } else {
              state.empty = true;
            }
          }
          state.error = null;
        }
      } catch (error) {
        console.log(error);
        state.error = error.response.data.message;
        if (state.error === 'Professor already exists.') {
          state.invalidEmail.push(addProfData.email);
        }
      }
    }

    function formatAddProfInputs() {
      if (addProfData.lastName && addProfData.firstName && addProfData.email) {
        addProfData.lastName = titleCase(addProfData.lastName);
        addProfData.firstName = titleCase(addProfData.firstName);
        addProfData.email = addProfData.email.toLowerCase();
      }
    }

    function checkTags() {
      state.tagValidation =
        addProfData.courses.filter(function (course) {
          console.log('course length: ' + course.length);
          return course.length !== 7;
        }).length !== 0;

      console.log(state.tagValidation);
    }

    function titleCase(str) {
      if (str) {
        return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
      }
    }

    async function initProfs() {
      try {
        const result = await api.getAllProfs();
        state.shownProfs = state.allProfs = result.data;

        state.shownProfs.sort(compareLastName);

        if (state.allProfs.length !== 0) {
          state.empty = false;
        } else {
          state.empty = true;
        }
      } catch (err) {
        console.log(err.response.data);
        state.empty = true;
      }
    }
    async function getUserAdminAccess() {
      try {
        const result = await api.getUserByEmail(user.email);
        if (result) {
          state.isAdministrator = result.data.isAdministrator;
        }
      } catch (err) {
        console.log(err);
      }
    }
    onBeforeMount(() => {
      initProfs();
      getUserAdminAccess();
      state.render = false;
    });

    function isValidProf() {
      state.error =
        state.invalidEmail.includes(addProfData.email) &&
        state.invalidEmail.length !== 0
          ? 'Professor already exists.'
          : false;
    }

    function onFileUpload() {
      state.fileExisting = file.value.files.length != 0 ? true : false;
      if (state.fileExisting) {
        state.csvFile = file.value.files[0];
        if (state.csvFile.name.split('.')[1] !== 'csv') {
          state.fileValidation = true;
        } else {
          state.fileValidation = false;
        }
      }
    }

    async function addProfsCsv() {
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
              state.allProfs.push(res.data[i]);
            }
            clearFilter();
            state.shownProfs = state.allProfs;
            state.shownProfs.sort(compareLastName);

            if (state.allProfs.length !== 0) {
              state.empty = false;
            } else {
              state.empty = true;
            }
          }
        }
      } catch (error) {
        state.profExisting = error.response.data.message;
        console.log(error);
      }
    }

    function compareLastName(a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    }

    function checkAddCollege() {
      if (addProfData.college === 'BAGCED') {
        addProfData.department = 'Counseling and Educational Psychology';
      } else if (addProfData.college === 'CCS') {
        addProfData.department = 'Information Technology';
      } else if (addProfData.college === 'COL') {
        addProfData.department = 'College of Law';
      } else if (addProfData.college === 'CLA') {
        addProfData.department = 'Behavioral Science';
      } else if (addProfData.college === 'COS') {
        addProfData.department = 'Biology';
      } else if (addProfData.college === 'GCOE') {
        addProfData.department = 'Chemical Engineering';
      } else if (addProfData.college === 'RVR-COB') {
        addProfData.department = 'Accountancy';
      } else if (addProfData.college === 'SOE') {
        addProfData.department = 'School of Economics';
      } else if (addProfData.college === 'N/A') {
        addProfData.department = 'N/A';
      }
    }

    function checkFilterCollege() {
      if (state.filterCol === 'BAGCED') {
        state.filterDept = 'Counseling and Educational Psychology';
      } else if (state.filterCol === 'CCS') {
        state.filterDept = 'Information Technology';
      } else if (state.filterCol === 'COL') {
        state.filterDept = 'College of Law';
      } else if (state.filterCol === 'CLA') {
        state.filterDept = 'Behavioral Science';
      } else if (state.filterCol === 'COS') {
        state.filterDept = 'Biology';
      } else if (state.filterCol === 'GCOE') {
        state.filterDept = 'Chemical Engineering';
      } else if (state.filterCol === 'RVR-COB') {
        state.filterDept = 'Accountancy';
      } else if (state.filterCol === 'SOE') {
        state.filterDept = 'School of Economics';
      } else if (state.filterCol === 'N/A') {
        state.filterDept = 'N/A';
      }
    }

    // filter reviews of professor
    function filterProfs() {
      if (
        (state.filterDept === '' || state.filterDept === 'Choose One') &&
        state.filterCourse === '' &&
        (state.filterCol === '' || state.filterCourse === 'Choose One')
      ) {
        if (state.search) {
          state.shownProfs = state.searchProfs;
        } else {
          state.shownProfs = state.allProfs;
        }
      } else {
        if (state.search) {
          state.shownProfs = state.searchProfs;
          state.filterProfs = state.searchProfs;
        } else {
          state.shownProfs = state.allProfs;
          state.filterProfs = state.allProfs;
        }

        if (state.filterDept !== '' && state.filterDept !== 'Choose One') {
          state.shownProfs = state.filterProfs.filter(function (prof) {
            return (
              prof.department.toUpperCase() === state.filterDept.toUpperCase()
            );
          });
        }
        state.filterProfs = state.shownProfs;

        if (state.filterCol !== '' && state.filterCol !== 'Choose One') {
          state.shownProfs = state.filterProfs.filter((prof) => {
            return prof.college.toUpperCase() === state.filterCol.toUpperCase();
          });
        }

        state.filterProfs = state.shownProfs;

        if (state.filterCourse !== '') {
          state.shownProfs = state.filterProfs.filter((prof) => {
            return prof.courses.includes(state.filterCourse.toUpperCase());
          });
        }

        state.filterProfs = state.shownProfs;
      }

      state.shownProfs.sort(compareLastName);

      if (state.shownProfs.length === 0) {
        state.empty = true;
      } else {
        state.empty = false;
      }
    }

    // search professor
    function searchProfs() {
      if (
        (state.filterDept === '' || state.filterDept === 'Choose One') &&
        state.filterCourse === '' &&
        (state.filterCol === '' || state.filterCol === 'Choose One')
      ) {
        console.log('hello');
        state.shownProfs = state.allProfs.filter((prof) => {
          const fullName = (prof.firstName + ' ' + prof.lastName).toUpperCase();

          return fullName.match(state.search.toUpperCase());
        });
      } else {
        state.shownProfs = state.filterProfs.filter((prof) => {
          const fullName = (prof.firstName + ' ' + prof.lastName).toUpperCase();

          return fullName.match(state.search.toUpperCase());
        });
      }

      state.searchProfs = state.shownProfs;

      state.shownProfs.sort(compareLastName);

      if (state.shownProfs.length === 0) {
        state.empty = true;
      } else {
        state.empty = false;
      }
    }

    // clear filter values
    function clearFilter() {
      state.filterDept = 'Choose One';
      state.filterCourse = '';
      state.filterCol = 'Choose One';
      state.filterProfs = [];
      state.shownProfs = state.allProfs;

      if (state.shownProfs.length === 0) {
        state.empty = true;
      } else {
        state.empty = false;
      }
    }

    return {
      state,
      searchProfs,
      clearFilter,
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
      addProf,
      addProfsCsv,
      v,
      isValidProf,
      titleCase,
      file,
      onFileUpload,
      filterProfs,
      user,
      colleges,
      checkFilterCollege,
      checkAddCollege,
    };
  },
};
</script>
