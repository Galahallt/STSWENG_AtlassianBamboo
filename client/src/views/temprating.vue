<multipleAddProfModal
          :multipleAddProf="showMultipleAddProfModal"
          @close="toggleMultipleAddProfModal"
        >
          <p
            class="mt-8 px-10 multiple_prof_color font-semibold text-center text-lg"
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
                class=" px-6 py-2 mt-4 text-green-600 bg-white rounded-lg border-2 border-green-600 hover:bg-gray-200 shadow-lg mb-1"
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
            :disabled="!state.csvFile"
          >
            Submit
          </button>
        </multipleAddProfModal>